import {createReducer} from '@reduxjs/toolkit';
import { SortingType } from '../consts';
import { TState } from '../types/types';
import { changeSortingType, loadUsers } from './actions';

const initialState: TState = {
  users: [],
  sorting: SortingType.City,
  isLoading: true,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(loadUsers, (state, action) => {
      state.users = action.payload;
      state.isLoading = false;
    })
    .addCase(changeSortingType, (state, action) => {
      return {
        ...state,
        sorting: action.payload
      }
      })
});

export {reducer};
