import * as Action from "../redux/result_reducer";
import { postServerData } from "../helper/helper";

// insert result into redux, into answers array.
export const PushAnswer = (result) => async (dispatch) => {
  try {
    await dispatch(Action.pushResultAction(result));
  } catch (error) {
    console.log(error);
  }
};

export const updateResult = (index) => async (dispatch) => {
  try {
    dispatch(Action.updateResultAction(index));
  } catch (error) {
    console.log(error);
  }
};

// Set data into MongoDB
export const usePublishResult = async (resultData) => {
  const { result, username } = resultData;

  try {
    if (result.length === 0 || !username) {
      throw new Error("Couldn't get Result");
    }

    await postServerData(
      `${process.env.REACT_APP_SERVER_HOSTNAME}/api/result`,
      resultData
    );
  } catch (error) {
    console.log(error);
  }
};
