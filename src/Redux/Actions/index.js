const type = type => ({ type });

export const init = () => type("INIT");
export const login = () => type("LOGIN");
export const logout = () => type("LOGOUT");
