// hooks/useSocket.js
import { useEffect, useState } from 'react';
import io from 'socket.io-client';

const useSocket = () => {
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    // const token = localStorage.getItem('token');
    // const socketIo = io('https://horse-riders-house-production-34bb.up.railway.app', {
    //   query: { token }
    // });

    // setSocket(socketIo);

    // function cleanup() {
    //   socketIo.disconnect();
    // }
    // return cleanup;
  }, []);

  return socket;
};

export default useSocket;



