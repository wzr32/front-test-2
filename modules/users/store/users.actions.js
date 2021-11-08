import { Api } from '../../../shared/api/server-api';
import {
  GET_USERS,
  GET_USERS_SUCCESS,
  SET_USERS_ERROR,
  GET_USER,
  GET_USER_SUCCESS,
  GET_USER_ERROR,
  CREATE_USER,
  CREATE_USER_SUCCESS,
  CREATE_USER_ERROR,
  UPDATE_USER,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_ERROR,
  DELETE_USER,
  DELETE_USER_SUCCESS,
  DELETE_USER_ERROR
} from './user.action.types';

/**
 * GET USERS ACTIONS
 */

const startGetUsers = () => {
  return {
    type: GET_USERS
  }
};

const getUsersSuccess = (users) => {
  return {
    type: GET_USERS_SUCCESS,
    payload: users,
  }
};

const getUsersError = (error) => {
  return {
    type: SET_USERS_ERROR,
    payload: error
  }
};

export const getUsersAction = () => async (dispatch) => {
  dispatch(startGetUsers());

  try {
    const { data } = await Api.get('/users');
    dispatch(getUsersSuccess(data));
  } catch (err) {
    dispatch(getUsersError(err));
  }
};

/**
 * GET USER ACTIONS
 */

const startGetUser = () => {
  return {
    type: GET_USER
  }
};

const getUserSuccess = (user) => {
  return {
    type: GET_USER_SUCCESS,
    payload: user,
  }
};

const getUserError = (error) => {
  return {
    type: GET_USER_ERROR,
    payload: error
  }
};

export const getUserAction = (id) => async (dispatch) => {
  dispatch(startGetUser());

  try {
    const { data } = await Api.get(`/users/${id}`);
    dispatch(getUserSuccess(data));
  } catch (err) {
    dispatch(getUserError(err));
  }
};

/**
 * CREATE USER ACTIONS
 */

const startCreateUser = () => {
  return {
    type: CREATE_USER,
  }
};

const createUserSuccess = (user) => {
  return {
    type: CREATE_USER_SUCCESS,
    payload: user
  }
};

const createUserError = (error) => {
  return {
    type: CREATE_USER_ERROR,
    payload: error
  }
};

export const createUserAction = (user) => async (dispatch, getState) => {
  const usersState = getState();
  const { users } = usersState.user;

  dispatch(startCreateUser());

  try {
    const { data } = await Api.post(`/users`, user);
    const newUsersArray = [...users];
    newUsersArray.push(data);

    dispatch(getUserSuccess(newUsersArray));
    dispatch(createUserSuccess(user));
  } catch (err) {
    dispatch(createUserError(err))
  }
};

/**
 * UPDATE USER ACTIONS
 */

const startUpdateUser = () => {
  return {
    type: UPDATE_USER,
  };
};

const updateUserSuccess = (user) => {
  return {
    type: UPDATE_USER_SUCCESS,
    payload: user
  };
};

const updateUserError = (error) => {
  return {
    type: UPDATE_USER_ERROR,
    payload: error
  };
};

export const updateUserAction = (user) => async (dispatch, getState) => {
  const usersState = getState();
  const { users } = usersState.user;

  dispatch(startUpdateUser());

  try {
    const itemIndex = users.findIndex((item) => item.id === user.id);

    if (itemIndex > -1) {
      const { data } = await Api.put(`/users/${user.id}`);
      users.splice(data.id, 1, user);

      dispatch(updateUserSuccess(user));
      dispatch(getUsersSuccess(updateArray));
    }
  } catch (err) {
    dispatch(updateUserError(err));
  }
};

/**
 * DELETE USER ACTIONS
 */

const startDeleteUser = () => {
  return {
    type: DELETE_USER,
  };
};

const deleteUserSuccess = (user) => {
  return {
    type: DELETE_USER_SUCCESS,
    payload: user
  };
};

const deleteUserError = (error) => {
  return {
    type: DELETE_USER_ERROR,
    payload: error
  };
};

export const deleteUserAction = (id) => async (dispatch, getState) => {
  const usersState = getState();
  const { users } = usersState.user;
  dispatch(startDeleteUser());

  try {
    setTimeout(() => {
      const deleteArray = users.filter((elem) => elem.id !== id);
      dispatch(deleteUserSuccess(deleteArray));
    }, 1000);
  } catch (err) {
    dispatch(deleteUserError(err));
  }
};

