import { NameSpace } from '../root-reduser'
import { State } from '../../types/state'
import { UserCards, UserCard } from '../../types/cards'
import { createSelector } from 'reselect'
import { getActivePage } from '../ui-state/selectors'

export const getUserData = (state: State): UserCards =>
  state[NameSpace.Data].userData
export const getUserDataLoading = (state: State): boolean =>
  state[NameSpace.Data].userDataLoading
export const getUserDataError = (state: State): boolean =>
  state[NameSpace.Data].userDataError

export const getSelectedUsers = createSelector(
  [getUserData, getActivePage],
  (userData, activePage) => {
    const selectedUser: UserCard[] = userData.results.slice((activePage - 1 )* 10,activePage * 10)
    return selectedUser
  },
)
