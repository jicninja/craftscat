import { ref, computed } from "vue";
import { defineStore } from "pinia";
import { DEFAULT_MAP } from "../globals/initials";

import SPRITES from "../globals/constants";
import type { PostionType } from "../globals/constants";
import type { MapType } from "../globals/initials";

export const useMapStore = defineStore("map", () => {
  const map = ref<MapType>(DEFAULT_MAP);

  const rows = computed(() => map.value.length);
  const columns = computed(() => map.value[0].length);

  const playerPosition = computed<PostionType>((): PostionType => {
    let x: number = 0;
    let y: number = 0;
    map.value.forEach((row, yIndex) => {
      row.find((column, xIndex) => {
        if (column === SPRITES.PLAYER) {
          x = xIndex;
          y = yIndex;
        }
      });
    });

    return { x, y };
  });

  const setRows: Function = (newRow: number, copyPrev: boolean): MapType => {
    const { value: mapData } = map;
    const { length } = mapData;
    // prevent nevagitve and empty rows
    if (newRow < 0) return map.value;

    const isBigger = newRow > length;

    if (isBigger) {
      for (let i = length; i < newRow; i++) {
        const newRowData = copyPrev
          ? Object.assign([], mapData[length])
          : new Array(mapData[0].length).fill(0);
        map.value.push(newRowData);
      }
    } else {
      map.value.length = newRow;
    }

    return map.value;
  };

  const setColumns: Function = (
    newColumns: number,
    copyPrev: boolean
  ): MapType => {
    const { value: mapData } = map;
    const _column = mapData[0];
    const { length } = _column;
    const isBigger = newColumns > length;
    // prevent nevagitve and empty rows

    if (newColumns < 0) return map.value;

    map.value.forEach((row) => {
      const newColumnData = copyPrev ? Object.assign([], row[length - 1]) : 0;
      row.length = newColumns;
      if (isBigger) {
        row.fill(newColumnData, length, newColumns);
      }
    });
    return map.value;
  };

  const setMatrix = (
    newRows: number,
    newColumns: number,
    copyPrev: boolean
  ) => {
    setRows(newRows, copyPrev);
    setColumns(newColumns, copyPrev);

    return map.value;
  };

  const setCell = (x: number, y: number, value: SPRITES) => {
    try {
      map.value[x][y] = value;
    } catch (err) {
      console.warn("Not allow to set this value");
    }
  };

  const replaceCell = (from: SPRITES, to: SPRITES) => {
    map.value.forEach((row: SPRITES[]) => {
      const keyIndex = row.findIndex((checker: SPRITES) => checker === from);
      if (keyIndex > -1) {
        row[keyIndex] = to;
      }
    });
  };

  const openDoor: Function = (): boolean => {
    const remainingKeys = map.value.reduce(
      (acc: number, row: SPRITES[]): number => {
        const keyIndex = row.findIndex(
          (checker: SPRITES) => checker === SPRITES.KEY
        );
        if (keyIndex > -1) {
          acc = acc + 1;
        }
        return acc;
      },
      0
    );

    if (!remainingKeys) {
      console.log("remaining keys", remainingKeys);
      replaceCell(SPRITES.CLOSED_DOOR, SPRITES.OPEN_DOOR);
      return true;
    }
    return false;
  };

  const resetMap = () => {
    replaceCell(SPRITES.OPEN_DOOR, SPRITES.CLOSED_DOOR);
    replaceCell(SPRITES.USED_KEY, SPRITES.KEY);
  };

  return {
    map,
    playerPosition,
    rows,
    columns,
    openDoor,
    setRows,
    setColumns,
    setMatrix,
    setCell,
    resetMap,
  };
});
