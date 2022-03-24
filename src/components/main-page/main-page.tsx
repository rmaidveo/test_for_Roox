import SortingSide from '../sorting-side/sorting-side';
import UserList from '../user-list/user-list';

function MainPage(): JSX.Element {

  return (
    <div className="page">
      <SortingSide/>
      <UserList/>
    </div>
  );
}

export default MainPage;
