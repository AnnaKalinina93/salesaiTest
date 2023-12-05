import { createReducer } from '@reduxjs/toolkit';
import { UiState } from '../../types/state';
import { activePageChange} from './action';

const initialState: UiState = {
  activePage: 1,
};

export const uiState = createReducer(initialState, (builder) => {
  builder

    .addCase(activePageChange, (state, action) => {
      state.activePage = action.payload;
    })

});