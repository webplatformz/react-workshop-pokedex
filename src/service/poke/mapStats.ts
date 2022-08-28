import { ApiStat, Stat } from "./types";

function mapStats(apiStats: ApiStat[]): Stat[] {
  return apiStats.map(({ base_stat, stat: { name } }) => ({
    name,
    baseStat: base_stat,
  }));
}

export default mapStats;
