import { put, takeLatest, all } from "redux-saga/effects";
import configs from "../../Configs/Google.json";

/**
 * Initialize google apis and check if user is logged in
 * If user is logged in, set auth state, otherwise, move user
 * to google login
 */
function* init() {
  yield window.gapi.client.init(configs);
  if (window.gapi.auth2.getAuthInstance().isSignedIn.get()) {
    yield put({ type: "LOGIN" });
  } else {
    window.gapi.auth2.getAuthInstance().signIn();
  }
}

function* actionWatcher() {
  yield takeLatest("INIT", init);
}

export default function* rootSaga() {
  yield all([actionWatcher()]);
}
