export const srcGenerator = (id) => {
  return `https://starwars-visualguide.com/assets/img/planets/${id}.jpg`;
};

export const exttractId = (item) => {
  const idRegExp = /\/([0-9]*)\/$/;
  return item.url.match(idRegExp)[1];
};

export const transformPlanet = (planet) => {
  return {
    id: exttractId(planet),
    name: planet.name,
    population: planet.population,
    diameter: planet.diameter
  };
};
