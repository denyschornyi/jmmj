import styled from "styled-components";

export const ContentContainer = styled.div`
  background: #fff;
  display: flex;
  justify-content: center;
`;

export const ContentContent = styled.div`
  max-width: 1200px;
  padding: 50px 30px;
`;

export const ContentTitle = styled.h2`
  margin-bottom: 24px;
  font-weight: bold;
  font-size: 32px;
  line-height: 40px;
  text-align: center;
  letter-spacing: 0.1px;
  color: #373f41;

  @media screen and (max-width: 786px) {
    font-size: 30px;
  }

  @media screen and (max-width: 480px) {
    font-size: 26px;
  }
`;

export const ContentSubtitle = styled.p`
  max-width: 920px;
  padding: 0 20px;
  margin-bottom: 50px;
  text-align: center;
  color: #737b7d;
  font-size: 16px;
  line-height: 22px;
  letter-spacing: 0.3px;
`;

export const ContentPlanets = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;

  @media screen and (max-width: 800px) {
    justify-content: center;
  }
`;

export const PlanetCard = styled.div`
  color: rgba(0, 0, 0, 0.54);
  cursor: pointer;
  margin: 0 10px 25px 10px;
`;

export const PlanetImg = styled.img.attrs((props) => ({
  src: props.src
}))`
  width: 350px;
  height: 350px;
`;

export const PlanetInfo = styled.div`
  width: 100%;
  padding: 15px;
  border: 1px solid #ccc;
  margin-top: -5px;
`;

export const PlanetName = styled.h3`
  margin-bottom: 10px;
`;

export const PlanetPopulation = styled.p`
  margin-bottom: 10px;
`;

export const PlanetDiameter = styled.p`
  margin-bottom: 10px;
`;
