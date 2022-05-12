import { Stat } from "./types";

type ApiStat = {
  base_stat: number;
  stat: {
    name: string;
  };
};

function mapStats(apiStats: ApiStat[]): Stat[] {
  return apiStats.map(({ base_stat, stat: { name } }) => ({
    name,
    baseStat: base_stat
  }));
}

export default mapStats;
