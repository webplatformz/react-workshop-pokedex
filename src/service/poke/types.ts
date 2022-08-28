export type Stat = { name: string; baseStat: number };

type PokemonDetailBase = {
  name: string;
  sprites: {
    front_shiny: string;
  };
};

export type PokemonDetail = PokemonDetailBase & {
  stats: Stat[];
};

export type Pokemon = {
  name: string;
};

export type PokemonResultDto = {
  results: Pokemon[];
};

export type PokemonDetailDto = PokemonDetailBase & {
  stats: StatDto[];
};

export type StatDto = {
  base_stat: number;
  stat: {
    name: string;
  };
};
