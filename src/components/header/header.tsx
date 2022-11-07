import styled from "styled-components";
import Image from "next/image";
import Logo from "../../assets/images/Logo.png";

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 46px 230px 102px 118px;

  .category1 {
    display: flex;
    gap: 45px;
    align-items: center;
  }

  .category2 {
    display: flex;
    gap: 26px;
    align-items: center;
  }

  p {
    font-family: "Inter";
    font-weight: 400;
    font-size: 26px;
    line-height: 31px;
    color: #fff;
  }

  .reservedbtn {
    color: #ffffff;
    font-family: "Rufina";
    font-weight: 700;
    font-size: 32px;
    line-height: 48px;
    border: 2px solid #fff;
    align-self: flex-start;
  }

  .hamburger-container {
    position: relative;
  }
  .hamburger {
    width: 30px;
    height: 30px;
    position: relative;

    .bar {
      padding: 0;
      width: 30px;
      height: 4px;
      background-color: #fff;
      display: block;
      border-radius: 4px;
      transition: all 0.4s ease-in-out;
      position: absolute;
    }
    .bar1 {
      top: 0;
      transform-origin: 5%;
    }

    .bar2 {
      top: 13.5px;
    }

    .bar3 {
      top: 13.5px;
      right: 0;
    }

    .bar4 {
      transform-origin: 5%;
      bottom: 0;
    }
  }

  .visuallyHidden {
    position: absolute;
    overflow: hidden;
    height: 100%;
    width: 100%;
    margin: -1px;
    padding: 0;
    border: 0;
    opacity: 0;
  }

  .checkbox:checked + label > .hamburger > .bar1 {
    transform: rotate(45deg);
    height: 3px;
    width: 42px;
  }

  .checkbox:checked + label > .hamburger > .bar3 {
    transform: rotate(45deg);
    height: 3px;
    background-color: transparent;
  }

  .checkbox:checked + label > .hamburger > .bar2 {
    transform: rotate(-45deg);
    height: 3px;
    background-color: transparent;
  }

  .checkbox:checked + label > .hamburger > .bar4 {
    transform: rotate(-45deg);
    height: 3px;
    width: 42px;
  }
`;

const Header = () => {
  return (
    <HeaderContainer>
      <div className="category1">
        <Image src={Logo} alt="logo" />
        <div className="hamburger-container">
          <input
            type="checkbox"
            id="checkbox"
            className="checkbox visuallyHidden"
          />
          <label htmlFor="checkbox">
            <div className="hamburger">
              <span className="bar bar1"></span>
              <span className="bar bar2"></span>
              <span className="bar bar3"></span>
              <span className="bar bar4"></span>
            </div>
          </label>
        </div>
      </div>
      <div className="category2">
        <p>+86 852 346 000</p>
        <div className="reservedbtn">Reservations</div>
      </div>
    </HeaderContainer>
  );
};

export default Header;
