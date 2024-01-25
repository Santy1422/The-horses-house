import usersSchema from "../databases/mongodb/schemas/usersSchema"

async function findUserIdByEmail(email) {
    try {
      const user = await usersSchema.findOne({ email });
      if (user) {
        return user._id;
      } else {
        return null; 
      }
    } catch (error) {
      console.error('Error al buscar el ID del usuario:', error);
      throw error; 
    }
  }
  

export { findUserIdByEmail };