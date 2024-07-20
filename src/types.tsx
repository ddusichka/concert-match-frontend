export type ConcertInfo = {
  id: number;
  name: string;
  image_url: string;
  local_date: string;
  local_time: string;
  genre: string;
  min_price: string;
  max_price: string;
  market_id: number;
  venue: string;
  city: string;
  state: string;
};

export type Market = {
  market_id: number;
  description: string;
};

export type TrackInfo = {
  id: number;
  name: string;
  added_at: string;
};

export type Album = {
  name: string;
  artist: string;
  image_url: string;
  release_date: string;
  tracks: TrackInfo[];
};

export type Match = {
  id: number;
  concert: ConcertInfo;
  artist_name: string;
  albums: Album[];
};

import { DefaultSession } from "next-auth";

export interface AuthUser {
  name: string;
  email: string;
  picture?: string | null;
  image?: string | null;
  accessToken: string;
  sub: string;
  expires_at: number;
}

export interface AuthSession extends Omit<DefaultSession, "user"> {
  user: AuthUser;
}
