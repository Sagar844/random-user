export type User = {
  results: Result[];
  info: Info;
};

export interface Info {
  seed: string;
  results: number;
  page: number;
  version: string;
}

export type Result = {
  gender: Gender;
  name: Name;
  location: Location;
  email: string;
  picture: Picture;
  nat: string;
};

export enum Gender {
  Female = "female",
  Male = "male",
}

export type Location = {
  street: Street;
  city: string;
  state: string;
  country: string;
  postcode: number | string;
  coordinates: Coordinates;
  timezone: Timezone;
};

export interface Coordinates {
  latitude: string;
  longitude: string;
}

export type Street = {
  number: number;
  name: string;
};

export type Timezone = {
  offset: string;
  description: string;
};

export type Name = {
  title: string;
  first: string;
  last: string;
};

export type Picture = {
  large: string;
  medium: string;
  thumbnail: string;
};
