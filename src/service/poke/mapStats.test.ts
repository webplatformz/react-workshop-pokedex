import mapStats from "./mapStats";

describe("mapStats", () => {
  it("should handle empty list", () => {
    const stats = mapStats([]);

    expect(stats).toHaveLength(0);
  });

  it("should handle single entry", () => {
    const stats = mapStats([{ base_stat: 40, stat: { name: "hp" } }]);

    expect(stats).toHaveLength(1);
    expect(stats[0].baseStat).toBe(40);
    expect(stats[0].name).toBe("hp");
  });

  it("should handle multiple entries", () => {
    const stats = mapStats([
      { base_stat: 40, stat: { name: "hp" } },
      { base_stat: 20, stat: { name: "attack" } }
    ]);

    expect(stats).toHaveLength(2);
    expect(stats[0].baseStat).toBe(40);
    expect(stats[0].name).toBe("hp");
    expect(stats[1].baseStat).toBe(20);
    expect(stats[1].name).toBe("attack");
  });
});
