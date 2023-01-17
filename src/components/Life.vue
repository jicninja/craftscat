<script setup lang="ts">
import { usePlayerStore } from "../stores/player";
import { useEditorStore } from "../stores/editor";
const EditorData = useEditorStore();
const PlayerData = usePlayerStore();
</script>

<template>
  <div v-if="!EditorData.isEditing" class="life-container">
    <div class="heart" :class="{ empty: PlayerData.life < 1 }" />
    <div class="heart" :class="{ empty: PlayerData.life < 2 }" />
    <div class="heart" :class="{ empty: PlayerData.life < 3 }" />
  </div>
</template>

<style lang="scss" scoped>
.life-container {
  position: fixed;
  z-index: 1000;
  top: 4rem;
  right: 1rem;
}

.heart {
  display: inline-block;
  height: 32px;
  width: 32px;
  background-image: url("images/heart.png");
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
}

.empty {
  background-image: url("images/empty_heart.png");
}
</style>
