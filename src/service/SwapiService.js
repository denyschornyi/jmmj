export class SwapiService {
  _apiBase = `https://swapi.dev/api`;

  getRecource = async (url) => {
    const res = await fetch(`${this._apiBase}${url}`);

    if (!res.ok) {
      throw new Error(`Could not fetch ${url}, recived ${res.status}`);
    }

    return await res.json();
  };

  getAllPlanets = async (page) => {
    const res = await this.getRecource(`/planets/?page=${page}`);
    return res;
  };
}
