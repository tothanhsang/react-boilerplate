import {
  FETCH_TODO_FAILURE,
  FETCH_TODO_REQUEST,
  FETCH_TODO_SUCCESS,
} from "./actionTypes";

export interface ITodo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

export interface TodoState {
  pending: boolean;
  todos: ITodo[];
  error: string | null;
}

export interface FetchTodoSuccessPayload {
  totdos: ITodo[];
}

export interface FetchTodoFailurePayload {
  error: string;
}

export interface FetchTodoRequest {
  type: typeof FETCH_TODO_REQUEST;
}

export type FetchTodoSucess = {
  type: typeof FETCH_TODO_SUCCESS;
  payload: FetchTodoSuccessPayload;
};

export type FetchTodoFailure = {
  type: typeof FETCH_TODO_FAILURE;
  payload: FetchTodoFailurePayload;
};

export type TodoActions = FetchTodoRequest | FetchTodoSucess | FetchTodoFailure;
