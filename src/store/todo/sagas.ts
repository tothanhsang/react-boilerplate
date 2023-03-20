import axios from "axios";
import { ITodo } from "./types";
import { all, call, put, takeLatest } from "redux-saga/effects";
import { fetchTodoFailure, fetchTodoSuccess } from "./actions";
import { FETCH_TODO_REQUEST } from "./actionTypes";

const getTodos = () =>
  axios.get<{ data: ITodo[] }>("https://jsonplaceholder.typicode.com/todos");

/* Worker Saga: Fired on FETCH_TODO_REQUEST action */

function* fetchTodoSaga() {
  try {
    const response: { data: ITodo[] } = yield call(getTodos);
    console.log("response: ", response);
    yield put(
      fetchTodoSuccess({
        totdos: response.data,
      })
    );
  } catch (e) {
    yield put(
      fetchTodoFailure({
        error: e.message,
      })
    );
  }
}

/* Starts worker saga on latest dispatched `FETCH_TODO_REQUEST action` */
/* Allows concurrent increments */
function* todoSaga() {
  yield all([takeLatest(FETCH_TODO_REQUEST, fetchTodoSaga)]);
}

export default todoSaga;
