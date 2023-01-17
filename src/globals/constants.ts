export type PostionType = {
  x: number;
  y: number;
};

export type DIRECTION = "up" | "down" | "left" | "right";

enum SPRITES {
  GROUND = 0,
  PLAYER = 1,
  HOLE = 2,
  KEY = 3,
  OBSTACLE_1 = 4,
  OBSTACLE_2 = 5,
  CLOSED_DOOR = 6,
  OPEN_DOOR = 7,
  USED_KEY = 8,
}

export default SPRITES;
