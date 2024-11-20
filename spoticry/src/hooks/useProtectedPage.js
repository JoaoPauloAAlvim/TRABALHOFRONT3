import { useEffect } from "react";
import { useCoordinator } from "./useCoordinator";

export const useProtectedPage = () => {
  const {goToLogin} = useCoordinator() 

  useEffect(() => {
    const token = localStorage.getItem("spoticry_token");
    
    if (!token) {
      goToLogin()
      return; 
    }
    
    try {
      const decodedToken = JSON.parse(atob(token.split(".")[1]));
      const currentTime = Date.now() / 1000; 

      if (currentTime > decodedToken.exp) {
        localStorage.removeItem("spoticry_token");
        goToLogin()
      }
    } catch (error) {
      console.error("Erro ao decodificar o token", error);
      localStorage.removeItem("spoticry_token");
      goToLogin()
    }
  }, [goToLogin]); 
};
