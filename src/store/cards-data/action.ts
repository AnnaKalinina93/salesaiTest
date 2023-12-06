import { ActionType } from '../../types/action'
import { UserCard, UserCards } from '../../types/cards'
import { createAction } from '@reduxjs/toolkit'

export const userDataSucceeded = createAction(
  ActionType.UserDataSucceeded,
  (data: UserCards) => ({
    payload: data,
  }),
)

export const userDataRequest = createAction(ActionType.UserDataRequest)

export const userDataFailed = createAction(ActionType.UserDataFailed)

export const changeUserDataCard = createAction(
  ActionType.UserDataCardChange,
  (data: UserCard) => ({
    payload: data,
  }),
)

export const deleteUserDataCard = createAction(
  ActionType.UserDataCardDeleted,
  (data: UserCard) => ({
    payload: data,
  }),
)
