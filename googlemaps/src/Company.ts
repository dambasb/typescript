import faker, { address } from 'faker';
import { Mappable } from './CustomMap';

export class Company implements Mappable {
  companyName: string;
  cachePhase: string;
  location: {
    lat: number,
    lng: number
  };

  constructor() {
    this.companyName = faker.company.companyName();
    this.cachePhase = faker.company.catchPhrase();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude())
    }
  }

  markerContent(): string {
    return `
    <div>
      <h1>Company Name: ${this.companyName}</h1>
      <h3>Catchphrase: ${this.cachePhase}</h3>
    </div>
    `;
  }

}