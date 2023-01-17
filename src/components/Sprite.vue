<script lang="ts" setup>
import SPRITES from "../globals/constants";
import { usePlayerStore } from "../stores/player";
import { useMapStore } from "../stores/map";
import { DEFAULT_SPRITE_SIZE } from "../globals/initials";
import { ref } from "vue";
import { useEditorStore } from "../stores/editor";
import type { DIRECTION } from "../globals/constants";

const playerData = usePlayerStore();
const mapData = useMapStore();

const EditorData = useEditorStore();

const size = ref<Number | any>(DEFAULT_SPRITE_SIZE);

const props = defineProps({
  column: { type: Number, required: true },
  row: { type: Number, required: true },
  spriteType: { type: Number, required: true },
});

const isPlayer = props.spriteType === SPRITES.PLAYER;

const getValue: Function = (value: SPRITES) => {
  const keys = Object.keys(SPRITES);
  const key = keys[value + keys.length / 2];

  return { [key.toLocaleLowerCase()]: true, editing: EditorData.isEditing };
};

const calculatePos: Function = (
  direction: DIRECTION,
  skipPlayer?: boolean
): number => {
  if (isPlayer && !skipPlayer) {
    if (direction === "up") return size.value * playerData.position.y;
    if (direction === "left") return size.value * playerData.position.x;
  }
  if (direction === "up") return size.value * props.row;
  if (direction === "left") return size.value * props.column;
  return 0;
};

const editCell: Function = (): void => {
  if (EditorData.isEditing && props.spriteType !== SPRITES.PLAYER) {
    mapData.setCell(props.row, props.column, EditorData.currentBrushTile);
  }
};
</script>

<template>
  <div
    v-if="isPlayer"
    class="cell"
    :class="getValue(0)"
    :style="{
      width: `${size}px`,
      height: `${size}px`,
      top: `${calculatePos('up', true)}px`,
      left: `${calculatePos('left', true)}px`,
    }"
  />
  <div
    @click="() => editCell()"
    :style="{
      width: `${size}px`,
      height: `${size}px`,
      top: `${calculatePos('up')}px`,
      left: `${calculatePos('left')}px`,
    }"
    class="cell"
    :class="getValue(props.spriteType)"
  />
</template>

<style scoped>
.cell {
  position: absolute;
  display: inline-block;
  background-image: url("images/grass.png");
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
}

.editing {
  border: 1px solid white;
}

.player {
  background-image: url("images/player.png");
  z-index: 100;
}

.hole {
  background-image: url("images/hole.png");
}

.key {
  background-image: url("images/key.png");
}

.closed_door {
  background-image: url("images/closedDoor.png");
}

.open_door {
  background-image: url("images/openDoor.png");
}

.obstacle_1 {
  background-image: url("images/bush.png");
}

.obstacle_2 {
  background-image: url("images/rock.png");
}
</style>
