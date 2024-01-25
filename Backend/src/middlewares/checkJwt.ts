import { ClientError } from "../utils/errors";
import { decodeToken ,TokenSignature} from "../utils/jwtUtils";
import jwt from "jsonwebtoken";
import usersSchema from "../databases/mongodb/schemas/usersSchema"


const checkJwt = async (req, res, next) => {
    const token = req.headers.authorization?.split('Bearer ')[1];
    if (!token)
      next(new ClientError('Missing token! Authorization=undefined', 400))
    try {
      const decodedToken = decodeToken(token) as TokenSignature

    const userEmail = decodedToken;    
    
    const userId = await usersSchema.findOne({ email: userEmail.email }); 
        
    if (!userId) {
    return res.status(401).json({ message: 'Usuario no encontrado en la base de datos' });
     }

      req.user = userId;
     // console.log(userId)
      next();
    } catch (error) {
      next(new ClientError('Token falló al decodificarse!', 400))
    }
  };
  
  export { 
    checkJwt,
}
