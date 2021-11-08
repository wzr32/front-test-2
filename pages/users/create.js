import React from 'react';
import { initialUser } from '../../modules/users/initialUserData';
import { useSelector, useDispatch } from 'react-redux';
import { createUserAction } from '../../modules/users/store/users.actions';
import UserCreateForm from '../../modules/users/UserCreateForm';
import Layout from '../../modules/layout';

const create = () => {
  const dispatch = useDispatch();
  const userState = useSelector(state => state.user);

  const [createUser, setCreateUser] = React.useState(initialUser);

  React.useEffect(() => {
    if (userState.createUser) {
      setCreateUser(initialUser);
    }
  }, [userState.createUser]);

  const handleOnChange = (field, value) => {
    const auxObject = { ...createUser };
    Object.assign(auxObject, { [field]: value });
    setCreateUser(auxObject);
  };

  const handleOnSubmit = () => {
    dispatch(createUserAction(createUser));
  };

  return (
    <Layout>
      <UserCreateForm
        user={createUser}
        onChange={handleOnChange}
        onSubmit={handleOnSubmit}
      />
    </Layout>
  )
}

export default create
