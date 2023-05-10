import { useSelector } from 'react-redux';

function UsersList() {
  const userArr = useSelector((state) => state.user.users);

  return (
    <>
    {userArr.map((user) => ())}
    </>
  );
}

export default UsersList;
