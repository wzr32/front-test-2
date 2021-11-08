import React from 'react';
import { TextField, Button, CircularProgress } from '@mui/material';
import { useSelector } from 'react-redux';

const UserUpdateForm = ({ userData, handleOnChange, handleSubmit }) => {
  const { name, username, email } = userData;
  const { updatingUser } = useSelector((state) => state.user);

  return (
    <div className="flex flex-col">
      <TextField
        label="name"
        value={name}
        margin="dense"
        variant="outlined"
        onChange={(e) => handleOnChange('name', e.target.value)}
        disabled={updatingUser}
      />
      <TextField
        label="username"
        value={username}
        margin="dense"
        variant="outlined"
        onChange={(e) => handleOnChange('username', e.target.value)}
        disabled={updatingUser}
      />
      <TextField
        label="email"
        value={email}
        margin="dense"
        variant="outlined"
        onChange={(e) => handleOnChange('email', e.target.value)}
        disabled={updatingUser}
      />

      <Button
        onClick={() => handleSubmit()}
        variant="outlined"
        disabled={updatingUser}
      >
        {
          updatingUser
            ? <CircularProgress size={20} />
            : 'Submit'
        }
      </Button>
    </div>
  )
}

export default UserUpdateForm
