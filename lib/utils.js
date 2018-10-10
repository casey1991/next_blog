import cookie from "cookie";
import Router from "next/router";
export const persistToken = (token, expireIn) => {
  document.cookie = cookie.serialize("token", token, {
    maxAge: 30 * 24 * 60 * 60 // 30 days
  });
};

export const redirect = (context, target) => {
  if (context.res) {
    // server
    // 303: "See other"
    context.res.writeHead(303, { Location: target });
    context.res.end();
  } else {
    // In the browser, we just pretend like this never even happened ;)
    Router.replace(target);
  }
};
