import {
  FETCH_TODO_FAILURE,
  FETCH_TODO_REQUEST,
  FETCH_TODO_SUCCESS,
} from "./actionTypes";
import {
  FetchTodoFailure,
  FetchTodoFailurePayload,
  FetchTodoRequest,
  FetchTodoSuccessPayload,
  FetchTodoSucess,
} from "./types";

export const fetchTodoRequest = (): FetchTodoRequest => ({
  type: FETCH_TODO_REQUEST,
});

export const fetchTodoSuccess = (
  payload: FetchTodoSuccessPayload
): FetchTodoSucess => ({
  type: FETCH_TODO_SUCCESS,
  payload,
});

export const fetchTodoFailure = (
  payload: FetchTodoFailurePayload
): FetchTodoFailure => ({
  type: FETCH_TODO_FAILURE,
  payload,
});
