<script setup lang="ts">
import { onBeforeUnmount } from "vue";
import isMobile from "../globals/utils";
import { usePlayerStore } from "../stores/player";
import { useEditorStore } from "../stores/editor";
import Life from "./Life.vue";

const PlayerData = usePlayerStore();
const EditorData = useEditorStore();

const handleMove = ({ keyCode }) => {
  if (keyCode === 87 || keyCode === 38) PlayerData.move("up");
  if (keyCode === 65 || keyCode === 37) PlayerData.move("left");
  if (keyCode === 83 || keyCode === 40) PlayerData.move("down");
  if (keyCode === 68 || keyCode === 39) PlayerData.move("right");
};

document.addEventListener("keyup", handleMove);

onBeforeUnmount(() => {
  document.removeEventListener("keyup", handleMove);
});
</script>

<template>
  <Life />
  <div class="contrainer-controls" v-if="isMobile() && !EditorData.isEditing">
    <div class="wrapper-controls">
      <button @click="() => PlayerData.move('up')" class="dir-btn up">
        Up
      </button>
      <button @click="() => PlayerData.move('down')" class="dir-btn down">
        Down
      </button>
      <button @click="() => PlayerData.move('left')" class="dir-btn left">
        Left
      </button>
      <button @click="() => PlayerData.move('right')" class="dir-btn right">
        Right
      </button>
    </div>
  </div>
</template>

<style scoped lang="scss">
.contrainer-controls {
  position: fixed;
  bottom: 130px;
  left: 30px;
  z-index: 1000;
}

.wrapper-controls {
  position: relative;
}

.dir-btn {
  position: absolute;
  background-color: rgba(black, 0.75);
  border: 0 solid transparent;
  height: 3rem;
  width: 3rem;
  text-align: center;
  color: white;
  background-size: 32px 32px;
  background-position: center;
  background-repeat: no-repeat;
  font-size: 0;

  &:active {
    background-color: rgba(black, 1);
  }
}

.left {
  background-image: url("images/left.png");
  left: 0;
  top: 0rem;
}

.right {
  background-image: url("images/right.png");
  left: 6rem;
  top: 0rem;
}

.up {
  background-image: url("images/up.png");
  left: 3rem;
  top: -3rem;
}

.down {
  background-image: url("images/down.png");
  left: 3rem;
  top: 3rem;
}
</style>
