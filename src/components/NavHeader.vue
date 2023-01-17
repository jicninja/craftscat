<script lang="ts" setup>
import { useEditorStore } from "../stores/editor";
import { RouterLink } from "vue-router";

const editorStore = useEditorStore();
</script>

<template>
  <header class="root">
    <h3>
      <RouterLink to="/">Craftscat <span>+</span></RouterLink>
    </h3>
    <button
      @click="() => editorStore.toggleEdit()"
      class="action-btn"
      :class="{ play: editorStore.isEditing, pause: !editorStore.isEditing }"
    ></button>
  </header>
</template>

<style scoped lang="scss">
.root {
  padding: 1rem 2rem;
  background-color: var(--vt-full-black);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2000;
  width: 100%;
  display: flex;
  align-content: center;
}

.action-btn {
  background: white;
  border: 0 solid transparent;
  width: 28px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;

  &:active {
    opacity: 0.9;
  }
}

.play {
  background-image: url("images/play.png");
}

.pause {
  background-image: url("images/pause.png");
}

h3 {
  width: 150px;
  flex: 0.5;
  display: flex;
  align-items: flex-start;

  a {
    text-decoration: none;
    margin: 0;
    padding: 0;
    display: inline-block;
    cursor: pointer;
    text-transform: uppercase;
    color: var(--vt-c-white);
    font-weight: 600;
    font-size: 1.6rem;
    line-height: 1;

    span {
      font-size: 1.8rem;
      margin-left: -0.25rem;
      font-weight: 900;
    }
  }
}
</style>
