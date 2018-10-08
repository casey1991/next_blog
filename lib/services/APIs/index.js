import { create } from "apisauce";
import { store } from "../../redux/withReduxSaga";
export const api = create({
  baseURL: "http://localhost:3210"
});

api.addRequestTransform(request => {
  if (store.getState().auth.token) {
    request.headers["Authorization"] = "Bearer " + store.getState().auth.token;
  }
});
api.addResponseTransform(response => {
  console.log(response);
});
