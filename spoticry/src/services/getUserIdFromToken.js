import { jwtDecode } from "jwt-decode";

export const getUserIdFromToken = (token) => {
    try {
      const decodedToken = jwtDecode(token);
      return decodedToken.id; 
    } catch (error) {
      console.error("Erro ao decodificar o token:", error);
      return null;
    }
  };
export default getUserIdFromToken;