import axios from "axios";
import URL_BASE from "../Constants/URL_BASE";

export const login = async (credentials) => {
    try {
      const response = await axios.post(`${URL_BASE}/user/login`, credentials, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log("Resposta completa:", response); 
      const token = response.data.token;
  
      if (!token) {
        throw new Error("Token não encontrado na resposta.");
      }
  
      localStorage.setItem("spoticry_token", token);
      return token;
    } catch (error) {
      console.error("Erro durante login:", error.response?.data || error.message);
      const message = error.response?.data?.message || "Erro ao fazer login.";
      throw new Error(message);
    }
  };
  
