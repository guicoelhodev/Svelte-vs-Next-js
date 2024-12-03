export interface TCharactereQuery {
  newPageIndex: number
};

export interface CharactereResponse {
  info: Info
  results: Result[]
}

interface Info {
  count: number
  pages: number
  next: string
  prev: string
}

interface Character {
  id: number
  name: string
  status: string
  species: string
  type: string
  gender: string
  origin: Origin
  location: Location
  image: string
  episode: string[]
  url: string
  created: string
}

interface Origin {
  name: string
  url: string
}

interface Location {
  name: string
  url: string
}
