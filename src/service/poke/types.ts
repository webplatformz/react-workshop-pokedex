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

export type PokemonDetailDto = Omit<PokemonDetail, "stats"> & {
  stats: ApiStat[];
};

export type ApiStat = {
  base_stat: number;
  stat: {
    name: string;
  };
};
