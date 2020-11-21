import styled from "styled-components";

export const MainContainer = styled.div`
  background: #ccc;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  height: 560px;
  position: relative;
  z-index: 1;
`;

export const MainBg = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  heigth: 100%;
  overflow: hidden;
  background-color: #fff;
  background-image: url(${(props) => props.src});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;

export const MainContent = styled.div`
  z-index: 3;
  max-width: 1200px;
  position: absolute;
  paddiing: 8px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const MainTitle = styled.h1`
  color: #373f41;
  font-size: 44px;
  font-weight: bold;
  letter-spacing: 0.2px;
  text-align: center;
  margin-bottom: 32px;

  @media screen and (max-width: 786px) {
    font-size: 40px;
  }

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

export const MainSubtitle = styled.p`
  max-width: 730px;
  padding: 0 20px;
  margin-bottom: 50px;
  text-align: center;
  letter-spacing: 0.3px;
  color: #737b7d;
  font-size: 16px;
  line-height: 22px;
`;

export const MainBtnWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const MainBtnFilled = styled.button`
  padding: 10px 22px;
  margin-right: 24px;
  color: #fff;
  background: #3c64b1;
  font-size: 16px;
  white-space: nowrap;
  text-decoration: none;
  outline: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  border: 1px solid #3c64b1;
  &:hover {
    background: #0a327f;
    border: 1px solid #0a327f;
    transition: all 0.2s ease-in-out;
  }
`;

export const MainBtnOutlined = styled.button`
  color: #3c64b1;
  font-size: 16px;
  font-weight: bold;
  white-space: nowrap;
  margin-right: 20px;
  text-decoration: none;
  outline: none;
  cursor: pointer;
  border: 2px solid transparent;
  padding: 10px 22px;
  transition: all 0.2s ease-in-out;
  border: 1px solid #3c64b1;
  background: transparent;

  &:hover {
    transition: all 0.2s ease-in-out;
    border: 1px solid #3c64b1;
    background: #3c64b1;
    color: #fff;
  }
`;
