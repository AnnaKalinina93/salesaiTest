import { UserCard } from './cards';
import { RootState } from '../store/root-reduser';

export type State = RootState

export type UserData = {
  userData: UserCard[],
  userDataLoading: boolean,
  userDataError: boolean,
  isUserCardChange: boolean,
  isUserCardDelete: boolean,
}

export type UiState = {
  activePage: number,
}