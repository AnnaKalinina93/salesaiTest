import { NameSpace } from '../root-reduser';
import { State } from '../../types/state';

export const getActivePage = (state: State): number =>
  state[NameSpace.Ui].activePage;
