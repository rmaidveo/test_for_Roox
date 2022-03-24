import { TState, TUsersList } from "../types/types";
import { createSelector } from 'reselect';
import { SortingType } from "../consts";
import { sortByCity, sortByCompany } from "../utils";

export const getUsers = (state: TState): TUsersList => state.users;
export const getSorting = (state: TState): string => state.sorting;
export const getSortBySorting = createSelector(
    [getUsers, getSorting],
  (users, sorting) => {
      if (sorting === SortingType.City) {
         return users.slice().sort(sortByCity());
        }
        if (sorting === SortingType.Company) {
          return users.slice().sort(sortByCompany())
        }
    });
export const getCurrentUser = (id: number) => createSelector(
  [getUsers],
  (users) => {
   return users.find((item) => item.id === id);
  },
);
export const getLoadingFlag = (state: TState): boolean => state.isLoading;
