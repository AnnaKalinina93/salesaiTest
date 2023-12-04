import { combineReducers } from 'redux';
import { cardsData } from './cards-data/cards-data';
import { uiState } from './ui-state/ui-state';

export enum NameSpace {
  Ui = 'UI_STATE',
  Data = 'DATA',
}

export const rootReducer = combineReducers({
  [NameSpace.Data]: cardsData,
  [NameSpace.Ui]: uiState,
});

export type RootState = ReturnType<typeof rootReducer>