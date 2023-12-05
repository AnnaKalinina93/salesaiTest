import { createReducer } from '@reduxjs/toolkit'
import { UserData } from '../../types/state'
import {
  userDataFailed,
  userDataRequest,
  userDataSucceeded,
  changeUserDataCard,
  deleteUserDataCard,
} from './action'

const initialState: UserData = {
  userData: {results: []},
  userDataLoading: false,
  userDataError: false,
  userCardChange: null,
  userCardDeleted: null,
  isUserCardDelete: false,
  isUserCardChange: false,
}

export const cardsData = createReducer(initialState, (builder) => {
  builder

    .addCase(userDataRequest, (state) => {
      state.userDataLoading = true
    })

    .addCase(userDataSucceeded, (state, action) => {
      state.userDataLoading = false
      state.userDataError = false
      state.userData = action.payload
    })

    .addCase(userDataFailed, (state) => {
      state.userDataLoading = false
      state.userDataError = true
    })

    .addCase(changeUserDataCard, (state, action) => {
      state.isUserCardChange = true
      state.userCardChange = action.payload
      const newUserData = state.userData.results.map(data =>data.id.value === action.payload.id.value && data.id.name === action.payload.id.name && data.name.title === action.payload.name.title ? action.payload:data)
      state.userData = {results: newUserData}
    })

    .addCase(deleteUserDataCard, (state, action) => {
      state.isUserCardDelete = true
      state.userCardDeleted = action.payload
      const userData= state.userData.results.slice();
      const indexFirstSearch = userData.findIndex((data)=> data.id.name === action.payload.id.name && data.id.value === action.payload.id.value);
      userData.splice(indexFirstSearch,1);
      state.userData = {results: userData}
    })
})
