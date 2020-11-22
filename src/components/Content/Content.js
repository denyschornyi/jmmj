import React, { useState, useEffect } from "react";
import numeral from "numeral";
import {
  ContentContainer,
  ContentContent,
  ContentTitle,
  ContentSubtitle,
  ContentPlanets,
  PlanetCard,
  PlanetImg,
  PlanetInfo,
  PlanetName,
  PlanetPopulation,
  PlanetDiameter
} from "./ContentElements";
// import { ContentLoader } from "../ContentLoader/ContentLoader";
import { SwapiService } from "../../service/SwapiService";
import { srcGenerator } from "../../service/utils";
import CrashedImg from "../../img/planetCrash.jpg";

export function Content() {
  const [planets, setPlanets] = useState([]);
  const getData = new SwapiService();

  useEffect(() => {
    getData.getAllPlanets().then((data) => {
      setPlanets(data);
    });
  }, []);

  const addDefaultSrc = (e) => {
    e.target.src =
      "https://static.wikia.nocookie.net/starwars/images/b/b0/Tatooine_TPM.png/revision/latest?cb=20131019121937" ||
      CrashedImg;
  };

  return (
    <ContentContainer>
      <ContentContent>
        <ContentTitle>Open API show off</ContentTitle>
        <ContentSubtitle>
          It’s up to you what you display down there and how you style it. Use
          fetch/axios (preffered) or if you’re already tired of this task - get
          the data from a JSON object. Lazy loading is optional but highly
          appreciated. List of APIs you could use:
          https://github.com/public-apis/public-apis
        </ContentSubtitle>
        <ContentPlanets>
          {planets ? (
            planets.map((planet) => {
              const { id, name, population, diameter } = planet;
              return (
                <PlanetCard key={id}>
                  <PlanetImg src={srcGenerator(id)} onError={addDefaultSrc} />
                  <PlanetInfo>
                    <PlanetName>{name}</PlanetName>
                    <PlanetPopulation>
                      Population: {numeral(population).format("0,0")}
                    </PlanetPopulation>
                    <PlanetDiameter>
                      Diameter: {numeral(diameter).format("0,0")}
                    </PlanetDiameter>
                  </PlanetInfo>
                </PlanetCard>
              );
            })
          ) : (
            <span>Loading...</span>
          )}
        </ContentPlanets>
      </ContentContent>
    </ContentContainer>
  );
}
