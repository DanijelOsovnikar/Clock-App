export class Ip {
  status: string;
  country: string;
  countryCode: string;
  region: string;
  regionName: string;
  city: string;
  zip: string;
  lat: number;
  lon: number;
  timezone: string;
  isp: string;
  org: string;
  as: string;
  query: string;

  constructor(obj?: any) {
    this.status = (obj && obj.status) || '';
    this.country = (obj && obj.country) || '';
    this.countryCode = (obj && obj.countryCode) || '';
    this.region = (obj && obj.region) || '';
    this.regionName = (obj && obj.regionName) || '';
    this.city = (obj && obj.city) || '';
    this.zip = (obj && obj.zip) || '';
    this.lat = (obj && obj.lat) || 0;
    this.lon = (obj && obj.lon) || 0;
    this.timezone = (obj && obj.timezone) || '';
    this.isp = (obj && obj.isp) || '';
    this.org = (obj && obj.org) || '';
    this.as = (obj && obj.as) || '';
    this.query = (obj && obj.query) || '';
  }
}
