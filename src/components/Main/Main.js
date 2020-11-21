import React from "react";
import Bg from "../../img/main.jpg";

import {
  MainContainer,
  MainBg,
  MainContent,
  MainTitle,
  MainSubtitle,
  MainBtnWrapper,
  MainBtnFilled,
  MainBtnOutlined
} from "./MainElements";

export function Main() {
  return (
    <MainContainer>
      <MainBg src={Bg} />
      <MainContent>
        <MainTitle>Hello fellow developer!</MainTitle>
        <MainSubtitle>
          Do as much as you can in a decent amount of time. Do not push it, 1-4
          hours are totally okay. Just show us your skills.
          Sass/styled-components, BEM and React are preferred. But use anything
          you know, like or want.
          <br />
          <br />
          And most importantly - have fun!
        </MainSubtitle>
        <MainBtnWrapper>
          <MainBtnFilled>Button with a label</MainBtnFilled>
          <MainBtnOutlined>This button looks empty</MainBtnOutlined>
        </MainBtnWrapper>
      </MainContent>
    </MainContainer>
  );
}
