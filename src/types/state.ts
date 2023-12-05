import { UserCard, UserCards } from './cards';
import { RootState } from '../store/root-reduser';

export type State = RootState

export type UserData = {
  userData: UserCards,
  userDataLoading: boolean,
  userDataError: boolean,
  userCardChange: UserCard | null,
  userCardDeleted: UserCard | null,
  isUserCardChange: boolean,
  isUserCardDelete: boolean,
}

export type UiState = {
  activePage: number,
}