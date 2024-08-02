import api from "../../services/api";
import { types } from "../types/types";
import Constants from "../../services/constants";
import { hideLoaderAction, showLoaderAction } from "./loaderAction";

const getFAQs = () => async (dispatch) => {
  dispatch(showLoaderAction());

  try {
    // const res = await api(
    //   "get",
    //   `${Constants.END_POINT.FAQ}`
    // );
    const res = {
      faq: [
        { question: "question text1", answer: "answer text1" },
        { question: "question text2", answer: "answer text2" },
      ],
    };

    dispatch({
      type: types.FAQ,
      payload: res,
    });
  } catch (error) {
    console.error("Error fetching data:", error);
  } finally {
    dispatch(hideLoaderAction());
  }
};

export { getFAQs };
