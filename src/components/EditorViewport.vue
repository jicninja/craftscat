<script setup lang="ts">
import { useEditorStore } from "../stores/editor";
import { useMapStore } from "../stores/map";
import Sprite from "./Sprite.vue";
import Tutorial from "./Tutorial.vue";
import EditorSidebar from "./EditorSidebar.vue";

const EditorData = useEditorStore();
const MapData = useMapStore();
</script>

<template>
  <Tutorial />
  <div class="map-wrapper" :class="{ 'is-editing': EditorData.isEditing }">
    <div class="map-container">
      <div v-for="(row, rIndex) in MapData.map" :key="`${rIndex}`">
        <Sprite
          v-for="(column, cIndex) in row"
          :sprite-type="column"
          :column="cIndex"
          :row="rIndex"
          :key="`${rIndex}-${cIndex}`"
        />
      </div>
    </div>
    <EditorSidebar />
  </div>
</template>

<style scoped>
.map-container {
  display: block;
}

.map-wrapper {
  position: relative;

  overflow: auto;
  width: 100vw;
  height: calc(100vh - 63px);
  position: relative;
  top: 63px;
}

.is-editing {
  padding-right: 230px;
}
</style>
