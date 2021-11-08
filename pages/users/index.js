import React from 'react';
import { useSelector } from 'react-redux';
import { CircularProgress } from '@mui/material';
import UsersList from '../../modules/users/UsersList';
import Layout from '../../modules/layout';

const index = () => {
  const { users, loadingUsers } = useSelector(state => state.user);

  return (
    <Layout>
      {
        loadingUsers
          ? (
            <div className="text-3xl flex justify-center items-center w-screen h-screen bg-white">
              Loading <CircularProgress size={35} />
            </div>
          )
          : (
            <div>
              <UsersList usersList={users} />
            </div>
          )
      }
    </Layout>
  );
};

export default index;
