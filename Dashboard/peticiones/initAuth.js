import { init } from 'next-firebase-auth';
import app from './firebase';

const initAuth = () => {
  init({
    // ... otras configuraciones ...
    firebaseClientInitConfig: {
      app
    },
  });
};

export default initAuth;


