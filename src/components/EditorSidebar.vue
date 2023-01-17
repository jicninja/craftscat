<script setup lang="ts">
import SPRITES from "../globals/constants";
import { useEditorStore } from "../stores/editor";
import { useMapStore } from "../stores/map";

const MapData = useMapStore();
const EditorData = useEditorStore();

const selectBrush: Function = (value: SPRITES): void =>
  EditorData.setCurrentBrush(value);
const changeRows = (value: Event): void =>
  MapData.setRows(value?.target?.value || 0);
const changeColumns = (value: Event) =>
  MapData.setColumns(value?.target?.value || 0);
</script>

<template>
  <aside v-if="EditorData.isEditing" class="container">
    <div>
      <h3>Map Size</h3>
      <label class="ranges">
        <span> Rows: </span>
        <input
          value="10"
          type="range"
          min="1"
          max="50"
          step="1"
          @change="changeRows"
        />
      </label>

      <label class="ranges">
        <span> Columns: </span>
        <input
          value="13"
          type="range"
          min="1"
          max="50"
          step="1"
          @change="changeColumns"
        />
      </label>
    </div>
    <div>
      <h3>Tileset</h3>
      <ul class="tileset">
        <li
          :class="{ selected: EditorData.currentBrushTile === SPRITES.GROUND }"
          @click="() => selectBrush(SPRITES.GROUND)"
        >
          <img src="images/grass.png" />
        </li>
        <li
          :class="{ selected: EditorData.currentBrushTile === SPRITES.KEY }"
          @click="() => selectBrush(SPRITES.KEY)"
        >
          <img src="images/key.png" />
        </li>
        <li
          :class="{
            selected: EditorData.currentBrushTile === SPRITES.OBSTACLE_1,
          }"
          @click="() => selectBrush(SPRITES.OBSTACLE_1)"
        >
          <img src="images/bush.png" />
        </li>
        <li
          :class="{
            selected: EditorData.currentBrushTile === SPRITES.OBSTACLE_2,
          }"
          @click="() => selectBrush(SPRITES.OBSTACLE_2)"
        >
          <img src="images/rock.png" />
        </li>
        <li
          :class="{
            selected: EditorData.currentBrushTile === SPRITES.CLOSED_DOOR,
          }"
          @click="() => selectBrush(SPRITES.CLOSED_DOOR)"
        >
          <img src="images/closedDoor.png" />
        </li>
        <li
          :class="{ selected: EditorData.currentBrushTile === SPRITES.HOLE }"
          @click="() => selectBrush(SPRITES.HOLE)"
        >
          <img src="images/hole.png" />
        </li>
      </ul>
    </div>
  </aside>
</template>

<style scoped lang="scss">
.container {
  padding: 10px;
  background-color: rgba(rgb(54, 54, 54), 0.6);
  height: 100vh;
  width: 250px;
  position: fixed;
  right: 0;
  top: 0;
  padding-top: 63px;
  overflow-y: auto;
}

h3 {
  font-weight: 600;
  color: white;
  margin-top: 15px;
  margin-bottom: 5px;
  padding-bottom: 5px;
}

.ranges {
  display: flex;
  flex: 1;

  input {
    flex: 1;
  }

  span {
    width: 60px;
  }
}

.selected {
  border: 1px solid white;
}

.tileset {
  list-style: none;
  padding: 0;

  li {
    display: inline-block;
    padding: 0;
    margin: 2.5px 5px;
  }

  img {
    width: 64px;
    height: 64px;
  }
}
</style>
