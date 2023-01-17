import { ref } from "vue";
import { defineStore } from "pinia";
import { useMapStore } from "./map";
import { INITIAL_LIFE } from "../globals/initials";
import SPRITES from "../globals/constants";
import { useEditorStore } from "./editor";
import router from "../router";
import type { PostionType, DIRECTION } from "../globals/constants";

export const usePlayerStore = defineStore("player", () => {
  const MapStore = useMapStore();
  const { map } = MapStore;

  const position = ref<PostionType>(MapStore.playerPosition);
  const life = ref<number>(INITIAL_LIFE);
  const hasKey = ref<number>(0);

  const reset = () => {
    hasKey.value = 0;
    life.value = INITIAL_LIFE;
    MapStore.resetMap();
    position.value = { x: 1, y: 1 }; //MapStore.playerPosition;
  };

  const move = (direction: DIRECTION): boolean => {
    if (useEditorStore().isEditing) return false;
    const { rows, columns } = useMapStore();

    let newY: number = position.value.y;
    let newX: number = position.value.x;

    switch (direction) {
      case "up":
        newY += -1;
        break;
      case "down":
        newY += 1;
        break;
      case "left":
        newX += -1;
        break;
      case "right":
        newX += 1;
        break;
    }

    if (newY < 0 || newY > rows - 1) return false;
    if (newX < 0 || newX > columns - 1) return false;

    // Check collitions
    const newPosition = map[newY][newX];

    const cantMove =
      newPosition === SPRITES.OBSTACLE_1 ||
      newPosition === SPRITES.OBSTACLE_2 ||
      newPosition === SPRITES.CLOSED_DOOR ||
      newPosition === SPRITES.HOLE;

    //Grab key
    if (newPosition === SPRITES.KEY) {
      const keySound = new Audio("./sounds/found.mp3");
      keySound.play();
      hasKey.value += 1;
      MapStore.setCell(newY, newX, SPRITES.USED_KEY);
      MapStore.openDoor();
    }

    // Move freely
    if (!cantMove) {
      position.value.x = newX;
      position.value.y = newY;
    }

    //Hurts!!
    if (newPosition === SPRITES.HOLE) {
      const hitSound = new Audio("./sounds/hit.mp3");
      hitSound.play();
      life.value -= 1;
      if (!life.value) {
        const deathSound = new Audio("./sounds/death.mp3");
        deathSound.play();
        alert("Drowned!!");
        reset();
      }
    }

    // Win
    if (newPosition === SPRITES.OPEN_DOOR) {
      const winSound = new Audio("./sounds/win.mp3");
      winSound.play();
      alert("You Win!!");
      reset();
      router.push("/finish");
    }

    return true;
  };

  return { position, life, hasKey, move, reset };
});
