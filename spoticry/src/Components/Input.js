import React from "react";
import { useForm } from "../hooks/useForm";
import { Form, InputField, Label, LoginContainer, Title } from "../style";
import { Button } from "./Button";

export const Input = () => {
  const { form, onChange, cleanFields } = useForm({
    email: "",
    senha: "",
  });

  const logar = (event) => {
    event.preventDefault();
    cleanFields();
  };

  return (
    <LoginContainer>
      <Title>Entre no Spoticry</Title>
      <Form onSubmit={logar}>
        <Label>Email</Label>
        <InputField
          name={"email"}
          value={form.email}
          onChange={onChange}
          placeholder="Email"
          required
          pattern={"[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,}$"}
          type={"email"}
        />
        <p>Senha</p>
        <InputField
          name={"senha"}
          value={form.senha}
          onChange={onChange}
          placeholder="Senha"
          required
          type={"password"}
        />
        <Button text={'Entrar'}/>
      </Form>
    </LoginContainer>
  );
};
