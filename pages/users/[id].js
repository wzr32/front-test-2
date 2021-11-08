import React from 'react';
import Router, { useRouter } from 'next/router';
import {
  deleteUserAction,
  getUserAction,
  updateUserAction
} from '../../modules/users/store/users.actions';
import { useDispatch, useSelector } from 'react-redux';
import Layout from '../../modules/layout';
import ConfirmDialog from '../../shared/components/dialog/ConfirmDialog';
import UserUpdateForm from '../../modules/users/UserUpdateForm';

const User = () => {
  const { query } = useRouter();
  const { id } = query;

  const dispatch = useDispatch();
  const { user, deleteLoading } = useSelector((state) => state.user);

  const [showUpdateForm, setShowUpdateForm] = React.useState(false);
  const [showConfirmDialog, setShowConfirmDialog] = React.useState(false);
  const [dialogMessage, setDialogMessage] = React.useState('');
  const [selectedUser, setSelectedUser] = React.useState({});

  React.useEffect(() => {
    if (id) dispatch(getUserAction(id));
  }, [id]);

  const handleShowUpdateFormState = (user) => {
    setSelectedUser(user);
    setShowUpdateForm(!showUpdateForm);
  };

  const handleShowConfirmDialog = (user) => {
    const deleteMessage = `You want to delete '${user.name}' user?`;
    setSelectedUser(user);
    setDialogMessage(deleteMessage);
    setShowConfirmDialog(true);
  };

  const handleHideConfirmDialog = () => {
    setShowConfirmDialog(false);
    setSelectedUser({});
    setDialogMessage('');
  };

  const handleConfirmDialog = async () => {
    await dispatch(deleteUserAction(selectedUser.id));
  };

  const handleCancelDialog = () => {
    handleHideConfirmDialog();
  };

  const handleOnChange = (field, value) => {
    const auxObject = { ...selectedUser };

    Object.assign(auxObject, { [field]: value });
    setSelectedUser(auxObject);
  };

  const handleSubmit = () => {
    dispatch(updateUserAction(selectedUser));
  };

  return (
    <Layout>
      <div className="flex items-center flex-col mt-10">
        <img className="inline-block h-30 w-30 rounded-full ring-2 ring-white mb-5" src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />

        <h2 className="text-3xl">{user?.name}</h2>
        <small className="text-gray-400">@{user?.username}</small>

        <div className="my-10">
          <button
            className="rounded-full py-2 px-4 mx-2 bg-blue-600 text-white hover:bg-blue-800 cursor-pointer capitalize"
            onClick={() => handleShowUpdateFormState(user)}
          >
            {showUpdateForm ? 'cancel edit' : 'edit'}
          </button>
          <button
            className="rounded-full py-2 px-4 mx-2 bg-red-600 text-white hover:bg-red-800 cursor-pointer capitalize"
            onClick={() => handleShowConfirmDialog(user)}
          >
            delete
          </button>
        </div>
        <div className="mt-10">
          {
            showUpdateForm &&
            (
              <UserUpdateForm
                userData={selectedUser}
                handleOnChange={handleOnChange}
                handleSubmit={handleSubmit}
              />
            )
          }
        </div>
      </div>
      <ConfirmDialog
        open={showConfirmDialog}
        onClose={handleHideConfirmDialog}
        onConfirm={handleConfirmDialog}
        onCancel={handleCancelDialog}
        message={dialogMessage}
        loading={deleteLoading}
      />
    </Layout>
  );
};

export default User;
