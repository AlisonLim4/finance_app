import "./Home.css";
import Container from "../../components/layout/container/Container";
import ButtonLink from "../../components/button/ButtonLink";
import logo from "../../assets/logo.png";
import money_income from "../../assets/money_income.png";
import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <section className="home">
      <Container>
        <div className="card">
          <div className="logo-container">
            <img className="logo" src={logo} alt="logo" width={150} />
            <h1 className="title">Finan-c</h1>
          </div>
          <div className="money_income-container">
            <img src={money_income} alt="Money Income Illustration" />
          </div>
        </div>
        <div className="slogan_container">
          <span>Controle melhor suas finanças</span>
        </div>
        <div className="links_container">
          <ButtonLink text="Sign Up" bgcolor="#5EED87" />
          <ButtonLink text="Sign in" border="#5E5E5E" />
        </div>
      </Container>
    </section>
  );
};

export default Home;
