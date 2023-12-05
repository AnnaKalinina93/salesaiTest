import { createAction } from '@reduxjs/toolkit';
import { ActionType } from '../../types/action';

export const activePageChange = createAction(
    ActionType.ActivePage,
    (activePage: number) => ({
      payload: activePage,
    }),
  );