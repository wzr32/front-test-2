import React from 'react';
import Router from 'next/router';

const UsersList = ({ usersList }) => {
  return (
    <div className="w-6/12 mx-auto">
      <div className="flex justify-between items-center">
        <h3 className="text-2xl mb-6">Users</h3>
        <button
          className="capitalize bg-green-700 hover:bg-green-900 py-1 px-3 rounded-full text-white"
          onClick={() => Router.push('/users/create')}
        >
          add user
        </button>
      </div>
      <ul>
        {usersList?.map((user, i) => (
          <li
            key={`users-${0 + i}`}
            onClick={(e) => Router.push('/users/[id]', `/users/${user.id}`)}
            className="flex items-center py-2 px-4 hover:bg-opacity-40 hover:bg-gray-300 border-solid border-2 cursor-pointer"
          >
            <div className="mr-10">
              <img className="inline-block h-10 w-10 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
            </div>
            <div>
              <span className="mr-5 text-gray-600 block">
                {user.name}
              </span>
              <small className="mr-5 text-gray-400 block">
                @{user.username}
              </small>
              <small className="mr-5 text-gray-400 block">
                {user.email}
              </small>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UsersList;
