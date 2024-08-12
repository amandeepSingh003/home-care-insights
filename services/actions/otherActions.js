import api from "../../services/api";
import Constants from "../../services/constants";

const getFAQs = async () => {
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
    return res;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

export { getFAQs };
