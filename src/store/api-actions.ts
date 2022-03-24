
import {AxiosInstance} from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { loadUsers } from './actions';
import { store } from '../store';
import { TUsersList } from '../types/types';

export type TState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const fetchUsers = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch,
  state: TState,
  extra: AxiosInstance
}>(
  'data/fetchUsers',
  async (_arg, {dispatch, extra: api}) => {
    try {
      const { data } = await api.get<TUsersList>(`/users`);
      dispatch(loadUsers(data));
    } catch (error) {
      console.log(error)
    }
  },
);
