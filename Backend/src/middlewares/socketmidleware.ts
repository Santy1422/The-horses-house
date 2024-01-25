import { JWT_RANDOM_PASSWORD } from "../config/env";
const jwt = require('jsonwebtoken');


export const socketAuthMiddleware = (socket, next) => {
    const token = socket.handshake.auth.token;
  
    if (!token) {
      return next(new Error('Authentication error: No token provided.'));
    }
  
    jwt.verify(token, JWT_RANDOM_PASSWORD, (err, decoded) => {
      if (err) {
        return next(new Error('Authentication error: Invalid token.'));
      }
  
      // Attach the decoded data to the socket object so you can use it in the socket event handlers
      socket.user = decoded;
      next();
    });
  }