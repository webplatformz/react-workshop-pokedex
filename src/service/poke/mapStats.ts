import { StatDto, Stat } from "./types";

function mapStats(apiStats: StatDto[]): Stat[] {
  return apiStats.map(({ base_stat, stat: { name } }) => ({
    name,
    baseStat: base_stat,
  }));
}

export default mapStats;
