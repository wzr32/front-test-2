import React from 'react';
import { TextField, Grid, CircularProgress } from '@mui/material';
import { useSelector } from 'react-redux';

const UserCreateForm = ({ user, onChange, onSubmit }) => {
  const { creatingUser, createUser } = useSelector(state => state.user);

  return (
    <div className="w-6/12 mx-auto">
      <p className="my-5 text-1xl">User data</p>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={6}>
          <TextField
            label="Name"
            variant="outlined"
            margin="dense"
            value={user?.name}
            onChange={(e) => onChange('name', e.target.value)}
          />
        </Grid>
        <Grid item xs={12} sm={12} md={6}>
          <TextField
            label="Username"
            variant="outlined"
            margin="dense"
            value={user?.username}
            onChange={(e) => onChange('username', e.target.value)}
          />
        </Grid>
        <Grid item xs={12} sm={12} md={6}>
          <TextField
            label="Email"
            variant="outlined"
            margin="dense"
            value={user?.email}
            onChange={(e) => onChange('email', e.target.value)}
          />
        </Grid>
        <Grid item xs={12} sm={12} md={6}>
          <TextField
            label="Phone"
            variant="outlined"
            margin="dense"
            value={user?.phone}
            onChange={(e) => onChange('phone', e.target.value)}
          />
        </Grid>
        <Grid item xs={12} sm={12} md={6}>
          <TextField
            label="Website"
            variant="outlined"
            margin="dense"
            value={user?.website}
            onChange={(e) => onChange('website', e.target.value)}
          />
        </Grid>
      </Grid>

      <button
        className="my-5 py-2 px-4 rounded-full ml bg-green-700 hover:bg-green-900 text-white"
        onClick={() => onSubmit()}
      >
        {creatingUser ? <CircularProgress size={20} className="text-white" /> : 'Submit'}
      </button>
    </div>
  )
}

export default UserCreateForm
