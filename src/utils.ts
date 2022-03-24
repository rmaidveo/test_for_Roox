import { TUser } from "./types/types";

export const sortByCity = () => {
    return (a: TUser, b: TUser) => (a.address.city > b.address.city ) ? 1 : ((b.address.city  > a.address.city) ? -1 : 0)
};

export const sortByCompany = () => {
    return (a: TUser, b: TUser) => (a.company.name > b.company.name ) ? 1 : ((b.company.name  > a.company.name) ? -1 : 0)
};
