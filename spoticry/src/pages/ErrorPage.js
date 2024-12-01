import React from "react";
import { Link } from "react-router-dom";
import { ErrorContainer, ErrorTitle, ErrorSubtitle, BackButton } from "../style";

const ErrorPage = () => {
  return (
    <ErrorContainer>
      <ErrorTitle>404</ErrorTitle>
      <ErrorSubtitle>Página Não Encontrada</ErrorSubtitle>
      <p style={{ fontSize: "1.2rem", marginBottom: "2rem", textAlign: "center" }}>
        Opa! Parece que você tentou acessar uma página que não existe.
      </p>
      <BackButton as={Link} to="/">
        Voltar para a Home
      </BackButton>
    </ErrorContainer>
  );
};

export default ErrorPage;
