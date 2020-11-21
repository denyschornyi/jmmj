export class SwapiService {
  _apiBase = `https://swapi.dev/api`;

  getRecource = async (url) => {
    const res = await fetch(`${this._apiBase}${url}`);

    if (!res.ok) {
      throw new Error(`Could not fetch ${url}, recived ${res.status}`);
    }

    return await res.json();
  };

  getAllPlanets = async () => {
    const res = await this.getRecource(`/planets/`);
    return res.results.map(this._transformPlanet);
  };

  _exttractId = (item) => {
    const idRegExp = /\/([0-9]*)\/$/;
    return item.url.match(idRegExp)[1];
  };

  _transformPlanet = (planet) => {
    return {
      id: this._exttractId(planet),
      name: planet.name,
      population: planet.population,
      diameter: planet.diameter
    };
  };
}
