import React from 'react';
import { Provider, useDispatch } from 'react-redux';
import store from '../redux/store';
import 'tailwindcss/tailwind.css';
import '../shared/styles/slick-carousel/slick.min.css';
import '../shared/styles/slick-carousel/slick-theme.min.css';
import { getUsersAction } from '../modules/users/store/users.actions';

const MainComponent = ({ children }) => {
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(getUsersAction());
  }, []);

  return (
    <>
      {children}
    </>
  )
};

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <MainComponent>
        <Component {...pageProps} />
      </MainComponent>
    </Provider>
  )
};

export default MyApp;
