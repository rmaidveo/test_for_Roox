import {createAction} from '@reduxjs/toolkit';
import { TUsersList } from '../types/types';

export const loadUsers = createAction<TUsersList>('data/fetchUsers');
export const changeSortingType = createAction<string>('data/changeSorting');
