import styled from "styled-components";
import Header from "../header/header";

const HeroContainer = styled.div`
  background: #233000;
`;
const HeroSection = () => {
  return (
    <HeroContainer>
      <Header />
      <section>
        <h1 className="hero-title">
          Healthy Eating is important part of lifestyle
        </h1>
        <p className="hero-subtitle">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque congue
          arcu
        </p>
      </section>
    </HeroContainer>
  );
}

export default HeroSection