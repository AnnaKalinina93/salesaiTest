import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { Action } from 'redux';
import { AxiosInstance } from 'axios';
import { State } from '../types/state';

export enum ActionType {
  UserDataSucceeded = 'cards/dataSucceeded',
  UserDataRequest = 'cards/dataSucceededRequest',
  UserDataFailed = 'cards/dataSucceededFailed',
  ActivePage = 'cards/activePage',
  UserDataCardChange = 'card/dataCardChange',
  IsUserCardChange = 'card/isDataCardChange',
  UserDataCardDeleted = 'card/dataCardDeleted',
  IsUserCardDeleted = 'card/isDataCardDeleted',
}

export type ThunkActionResult<R = Promise<void>> = ThunkAction<
  R,
  State,
  AxiosInstance,
  Action
>

export type ThunkAppDispatch = ThunkDispatch<State, AxiosInstance, Action>