// pages/_app.js
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from '../redux/store/store';
import '../styles/tailwind.css'
import { useRouter } from 'next/router';
import axios from 'axios';
import Layout from '@/components/Layout';
import { appWithTranslation } from 'next-i18next'
import LoadingComponent from '@/components/landingReusableComponents/LoadingComponent';

//axios.defaults.baseURL = 'http://localhost:8080';
axios.defaults.baseURL = 'https://horse-riders-house-production-34bb.up.railway.app';

function App({ Component, pageProps }) {
  const router = useRouter();
  const isHomePage = router.pathname === '/';
  
  return (
    <Provider store={store}>
      <PersistGate loading={<LoadingComponent />} persistor={persistor}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </PersistGate>
    </Provider>
  );
}

export default appWithTranslation(App);
