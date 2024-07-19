type ConcertInfo = {
  id: number;
  name: string;
  image_url: string;
  local_date: string;
  local_time: string;
  genre: string;
  min_price: string;
  max_price: string;
  venue: string;
  city: string;
  state: string;
};

type TrackInfo = {
  id: number;
  name: string;
};

type Album = {
  name: string;
  artist: string;
  image_url: string;
  tracks: TrackInfo[];
};

type Match = {
  id: number;
  concert: ConcertInfo;
  artist_name: string;
  albums: Album[];
};
