import React from "react";
import { connect } from "react-redux";

const clientId =
  "382823543339-20hepohlgikguo862109uqa2bk7g57cm.apps.googleusercontent.com";

const GoogleAuth = ({ loginURL }) => {
  if (loginURL) window.location.href = loginURL;

  return <div>Loading...</div>;

  // <GoogleAPI
  //   clientId="382823543339-20hepohlgikguo862109uqa2bk7g57cm.apps.googleusercontent.com"
  //   onUpdateSigninStatus={a => (a ? login() : logout())}
  //   // onInitFailure={a => console.log("initfailure", a)}
  //   uxMode="redirect"
  //   scope="https://www.googleapis.com/auth/admin.directory.resource.calendar.readonly"
  // >
  //   {auth ? <CalendarApp /> : <Loading />}
  // </GoogleAPI>
};

export default connect(({ loginURL }) => ({ loginURL }))(GoogleAuth);
