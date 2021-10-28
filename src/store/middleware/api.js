import axios from "axios";
import * as actions from "../api";

const baseURL = "https://jsonplaceholder.typicode.com/";

export const api =
  ({ dispatch, getState }) =>
  (next) =>
  async (action) => {
    if (action.type !== actions.apiCallBegan.type) return next(action);

    const { url, onSuccess, onStart, onError, method, data } = action.payload;

    if (onStart) dispatch({ type: onStart });
    next(action);

    try {
      const response = await axios.request({
        baseURL,
        url,
        method,
        data,
      });

      dispatch(actions.apiCallSuccess(response.data));

      if (onSuccess) dispatch({ type: onSuccess, payload: response.data });
    } catch (error) {
      dispatch(actions.apiCallFailed(error.message));
      if (onError) dispatch({ type: onError, payload: error.message });
    }
  };
