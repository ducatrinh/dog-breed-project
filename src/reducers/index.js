import { combineReducers } from "redux";
import dogbreeds from "./dogbreeds";
import dogImages from "./dogImages";
import questions from "./questions";
import answers from "./answers";
import correctAnswers from "./correctAnswers";

export default combineReducers({
  dogbreeds,
  dogImages,
  questions,
  answers,
  correctAnswers
});
