export class WorldTime {
  abbreviation: string;
  client_ip: string;
  datetime: string;
  day_of_week: number;
  day_of_year: number;
  dst: boolean;
  dst_from: null;
  dst_offset: number;
  dst_until: null;
  raw_offset: number;
  timezone: string;
  unixtime: number;
  utc_datetime: string;
  utc_offset: string;
  week_number: number;

  constructor(obj?: any) {
    this.abbreviation = (obj && obj.abbreviation) || '';
    this.client_ip = (obj && obj.client_ip) || '';
    this.datetime = (obj && obj.datetime) || '';
    this.day_of_week = (obj && obj.day_of_week) || 0;
    this.day_of_year = (obj && obj.day_of_year) || 0;
    this.dst = (obj && obj.dst) || false;
    this.dst_from = (obj && obj.dst_from) || null;
    this.dst_offset = (obj && obj.dst_offset) || 0;
    this.dst_until = (obj && obj.dst_until) || null;
    this.raw_offset = (obj && obj.raw_offset) || 0;
    this.timezone = (obj && obj.timezone) || '';
    this.unixtime = (obj && obj.unixtime) || 0;
    this.utc_datetime = (obj && obj.utc_datetime) || '';
    this.utc_offset = (obj && obj.utc_offset) || '';
    this.week_number = (obj && obj.week_number) || 0;
  }
}
