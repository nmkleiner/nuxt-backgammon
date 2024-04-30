import type { Cell } from "~/interfaces/cell.interface";

export const useGameStore = defineStore("game", {
  state: (): { cells: Record<string, Cell[]> } => ({
    cells: {
      regular: [],
      partition: [],
      exit: [],
    },
  }),
  actions: {
    createCells() {
      if (this.cells.regular.length > 0) {
        return;
      }

      for (let i = 0; i < 24; i++) {
        this.cells.regular.push(this.createCell(i));
      }
      for (let i = 0; i < 2; i++) {
        this.cells.partition.push(this.createCell(i, true));
      }
      for (let i = 0; i < 2; i++) {
        this.cells.exit.push(this.createCell(i, false, true));
      }
    },
    createCell(index: number, isPartition = false, isExit = false): Cell {
      return {
        index,
        soldiers: [],
        isPartition,
        isExit,
      };
    },
  },
});
