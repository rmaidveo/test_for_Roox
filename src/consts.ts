export enum AppRoute {
  User = '/user/:id',
  Main = '/'
}
export enum SortingType {
  City = `city`,
  Company = `company`
}
export const SORTS = [
  {
  id: SortingType.City,
  text: 'по городу'
  },
  {
  id: SortingType.Company,
  text: 'по компании'
 }
]
