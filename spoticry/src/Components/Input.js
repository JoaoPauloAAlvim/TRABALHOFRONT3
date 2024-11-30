import React, { useState } from "react";
import { useForm } from "../hooks/useForm";
import { login } from "../services/auth";
import { Form, InputField, Label, LoginContainer, Title, ErrorMessage,LoadingGif} from "../style";
import { Button } from "./Button";
import loadingGif from "../Assets/Icons/loadingGif-gif.gif"
import  { useCoordinator } from "../hooks/useCoordinator"

export const Input = () => {
  const { form, onChange, cleanFields } = useForm({ email: "", password: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const {goToPlaylists}= useCoordinator()

  const handleLogin = (event) => {
    event.preventDefault();
    setError("");
    setLoading(true);

    login(form)
      .then((token) => {
        goToPlaylists()
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => {
        setLoading(false);
        cleanFields(); 
      });
  };

  return (
    <LoginContainer>
      <Title>Entre no Spoticry</Title>
      <Form onSubmit={handleLogin}>
        <Label>Email</Label>
        <InputField
          name="email"
          value={form.email}
          onChange={onChange}
          placeholder="Email"
          required
          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,}$"
          type="email"
        />
        <Label>Senha</Label>
        <InputField
          name="password"
          value={form.password}
          onChange={onChange}
          placeholder="Senha"
          required
          type="password"
        />
        {error && <ErrorMessage>{error}</ErrorMessage>}
        {loading ? (
          <LoadingGif src={loadingGif} alt="Carregando..." />
        ) : (
          <Button text="Entrar" />
        )}
      </Form>
    </LoginContainer>
  );
};
