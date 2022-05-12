export type Stat = { name: string; baseStat: number };

export type PokemonDetail = {
  name: string;
  stats: Stat[];
  sprites: {
    front_shiny: string;
  };
};

export type Pokemon = {
  name: string;
};

export type PokemonResultDto = {
  results: Pokemon[];
};
