import SPRITES from "./constants";
export type MapType = SPRITES[][];

// Sugar baby
const P: SPRITES = SPRITES.PLAYER;
const H: SPRITES = SPRITES.HOLE;
const K: SPRITES = SPRITES.KEY;
const D: SPRITES = SPRITES.CLOSED_DOOR;
const B: SPRITES = SPRITES.OBSTACLE_1;
const R: SPRITES = SPRITES.OBSTACLE_2;

export const DEFAULT_MAP: MapType = [
  [B, B, R, B, B, B, 0, 0, 0, 0, 0, 0, B],
  [B, P, R, 0, 0, B, 0, H, H, H, H, 0, B],
  [B, 0, 0, 0, 0, R, 0, H, R, B, H, 0, R],
  [B, 0, H, H, H, H, 0, H, K, B, H, 0, B],
  [B, 0, H, B, 0, R, 0, 0, 0, 0, H, 0, B],
  [B, 0, H, D, 0, H, B, 0, 0, 0, H, 0, B],
  [B, 0, H, 0, 0, H, H, H, R, H, H, 0, B],
  [B, 0, 0, 0, 0, 0, 0, 0, H, 0, 0, 0, B],
  [B, 0, 0, B, B, B, B, 0, 0, 0, R, 0, B],
  [B, B, B, B, H, H, B, B, R, B, B, B, B],
];

export const DEFAULT_SPRITE_SIZE = 64;
export const INITIAL_LIFE: number = 3;
