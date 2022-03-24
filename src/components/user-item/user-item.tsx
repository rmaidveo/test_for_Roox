import { Link } from "react-router-dom";

export type UserItemProps = {
  id: number,
  name: string,
  city: string,
  company: string
}

function UserItem(props: UserItemProps): JSX.Element {
  const {id, name, city, company } = props;

  return (
    <>
      <div className="user-item">
        <div className="user-item-option">
          <p className="user-item_title">ФИО:</p>
          <p className="user-item_text">{name}</p>
        </div>
        <div className="user-item-option">
          <p className="user-item_title">город:</p>
          <p className="user-item_text">{city}</p>
        </div>
        <div className="user-item-option">
          <p className="user-item_title">компания:</p>
          <p className="user-item_text">{company}</p>
          <Link to={`/user/${id}`} className="user-item_link">
            Подробнее
          </Link>
        </div>
      </div>
    </>
  );
}

export default UserItem;
