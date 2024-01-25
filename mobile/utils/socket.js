import io from 'socket.io-client';

let socket;

export const initiateSocket = ({ setInscriptoRecibidoSocket }) => {
    try {
    socket = io('https://the-horses-house-production.up.railway.app/');
    //socket = io('http://192.168.0.9:8083');
      console.log(`Connecting socket...`);
  
      socket.on('Resultadoactualizado', async (data) => {
        try {
          console.log(`Recibiendo inscripto actualizado...`);
          const recibido = await data;
          setInscriptoRecibidoSocket(recibido);
        } catch (error) {
          console.error('Error al procesar el evento Resultadoactualizado:', error);
        }
      });
    } catch (error) {
      console.error('Error al conectar el socket:', error);
    }
}
  

export const disconnectSocket = () => {
    console.log('Disconnecting socket...')
    if(socket) socket.disconnect()
}