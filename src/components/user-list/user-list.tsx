import UserItem from "../user-item/user-item";
import { getSortBySorting } from '../../store/selectors';
import { useSelector } from "react-redux";
import { TUsersList } from "../../types/types";

type PossibleUsers = TUsersList | undefined;

function UserList(): JSX.Element {
   const users: PossibleUsers = useSelector(getSortBySorting);

  return (
    <>
      <div className="users-list_wrapper">
        <h2 className="title">Список пользователей</h2>
        <div className="users-list">
          {users.map((user) =>
            <UserItem key={`user-item-${user.id}`} id={user.id} name={user.name} city={user.address.city} company={user.company.name} />
          )}
          <p className="users-list-count">Найдено {users.length} пользователей </p>
        </div>
      </div>
    </>
  );
}

export default UserList;
