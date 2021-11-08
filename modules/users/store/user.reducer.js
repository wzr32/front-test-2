import {
  SET_USER,
  GET_USER_SUCCESS,
  GET_USER_ERROR,
  GET_USERS,
  GET_USERS_SUCCESS,
  GET_USERS_ERROR,
  CREATE_USER,
  CREATE_USER_SUCCESS,
  CREATE_USER_ERROR,
  UPDATE_USER,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_ERROR,
  DELETE_USER,
  DELETE_USER_SUCCESS,
  DELETE_USER_ERROR,
} from './user.action.types';

const initialState = {
  users: [],
  loadingUsers: false,
  loadingUsersError: null,

  user: {},
  loadingUser: false,
  loadingUserError: null,

  createUser: null,
  creatingUser: false,
  creatingUserError: null,

  updateUser: null,
  updatingUser: false,
  updatingUserError: null,

  deleteUser: null,
  deletingUser: false,
  deletingUserError: null,
};

export const usersReducer = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case GET_USERS:
      return {
        ...state,
        loadingUsers: true,
      }

    case GET_USERS_SUCCESS:
      return {
        ...state,
        users: action.payload,
        loadingUsers: false,
      }

    case GET_USERS_ERROR:
      return {
        ...state,
        loadingUsers: false,
        loadingUsersError: action.payload,
      }

    case SET_USER:
      return {
        ...state,
        loadingUser: true
      };

    case GET_USER_SUCCESS:
      return {
        ...state,
        user: action.payload,
        loadingUser: false,
      };

    case GET_USER_ERROR:
      return {
        ...state,
        user: null,
        loadingUser: false,
        loadingUserError: action.payload
      };

    case CREATE_USER:
      return {
        ...state,
        createUser: null,
        creatingUser: true,
        creatingUserError: null,
      };

    case CREATE_USER_SUCCESS:
      return {
        ...state,
        createUser: action.payload,
        creatingUser: false,
      };

    case CREATE_USER_ERROR:
      return {
        creatingUser: false,
        creatingUserError: action.payload,
      };

    case UPDATE_USER:
      return {
        ...state,
        updatingUser: true,
      };

    case UPDATE_USER_SUCCESS:
      return {
        ...state,
        user: action.payload,
        updatingUser: false,
      };

    case UPDATE_USER_ERROR:
      return {
        ...state,
        updatingUser: false,
        updatingUserError: action.payload,
      };

    case DELETE_USER:
      return {
        ...state,
        deleteUser: true,
      }

    case DELETE_USER_SUCCESS:
      return {
        ...state,
        user: action.payload,
        deletingUser: false,
      }

    case DELETE_USER_ERROR:
      return {
        ...state,
        deletingUser: false,
        deletingUserError: action.payload
      }

    default:
      return state;
  }
};