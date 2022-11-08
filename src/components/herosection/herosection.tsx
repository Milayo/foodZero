import styled from "styled-components";
import Header from "../header/header";
import Image from "next/image";
import HeroImg from "../../assets/images/Image.png";
import Spice1 from "../../assets/images/spices1.png";
import Spice2 from "../../assets/images/spices2.png";
import Spice3 from "../../assets/images/spices3.png";

const HeroContainer = styled.div`
  background: #233000;

  .hero_section {
    padding: 0 80px;
    position: relative;
  }

  .hero_heading-title {
    font-family: "Rufina";
    font-weight: 700;
    font-size: 100px;
    line-height: 110px;
    color: #fff;
    z-index: 20;
  }

  .hero_heading-subtitle {
    font-family: "Lato";
    font-weight: 400;
    font-size: 16px;
    line-height: 140%;
    letter-spacing: 0.02em;
    color: #ffffff;
    margin-top: 30px;
    width: 40%;
  }

  .heroimg {
    width: 550px;
    height: auto;
    position: absolute;
    left: 710px;
    top: 95px;
    opacity: 0.8;
  }

  .scroll {
    margin-top: 30px;
    writing-mode: vertical-rl;
    font-family: "Rufina";
    font-weight: 700;
    font-size: 30px;
    color: #ffffff;
  }

  .dashed {
    border-right: 2px dashed white;
    margin-top: 8px;
    writing-mode: vertical-rl;
    height: 200px;
    width: 20px;
  }
`;
const HeroSection = () => {
  return (
    <HeroContainer>
      <Header />
      <section className="hero_section">
        <div className="hero_topsection">
          <div className="hero_heading">
            <h1 className="hero_heading-title">
              Healthy Eating <br /> is important <br /> part of lifestyle
            </h1>
            <p className="hero_heading-subtitle">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque
              congue arcu
            </p>
          </div>
          <Image src={HeroImg} alt="heroimg" className="heroimg" />{" "}
        </div>
        <div className="scroll">Scroll</div>
        <div className="dashed"></div>
      </section>
    </HeroContainer>
  );
};

export default HeroSection;
