import type { Soldier } from "~/interfaces/soldier.interface";

export interface Cell {
  index: number;
  isPartition: boolean;
  isExit: boolean;
  soldiers: Soldier[];
}
