<script setup lang="ts">
import { useEditorStore } from "../stores/editor";
const EditorData = useEditorStore();
</script>

<template>
  <div
    @click="() => EditorData.hideTutorial()"
    v-if="EditorData.showTutorial"
    class="blackout"
  >
    <div class="container">
      <div>
        <img src="images/player.png" />
        <h1>Hello World!</h1>
      </div>
      <div class="content">
        <p>
          Here it's a simple excersie that I did during this weekend to
          understand VueJS and show you my capacities.
        </p>
        <p>
          The following app is a simple map editor for an adventure/rpg game.
          The goal is to get all keys to open the door and let the puss free!
        </p>
      </div>

      <p class="content-2">
        You have 2 modes: <strong>Edit Mode</strong> and
        <strong>Play Mode</strong>.
      </p>

      <p class="content-2">
        <strong>Edit Mode: </strong> You can select a tile for draw over the
        map. Use the side menu to resize the map matrix. To change to play mode,
        press play button on the header.
      </p>

      <p class="content-2">
        <strong>Play Mode: </strong>
      </p>
      <ul>
        <li>Use arrows or AWSD to control the puss! (Mobile compatible)</li>
        <li>The puss needs to find all keys, Fnot just one!</li>
        <li>Water hurts the puss, be aware you have only 3 lives!</li>
      </ul>
      <button>Enjoy!</button>
    </div>
  </div>
</template>

<style scoped lang="scss">
.blackout {
  z-index: 10000;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(black, 0.5);
}

.container {
  text-align: center;
  width: 40rem;
  height: 27rem;
  background-color: black;
  padding: 1.5rem;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: 0.1px solid white;
}

.content {
  margin-top: 1rem;
  color: white;
  text-align: justify;
}

.content-2 {
  margin-top: 1rem;
  color: white;
  text-align: justify;
}

ul {
  padding: 10px;
  color: white;

  li {
    text-align: justify;
  }
}

strong {
  font-weight: 800;
}

h1 {
  display: inline-block;
  font-weight: 600;
  color: white;
}

img {
  width: 32px;
  position: relative;
  top: 5px;
  left: -5px;
}

button {
  font-weight: 600;
  margin-top: 1rem;
  width: 100%;
  border: 0px solid transparent;
  padding: 0.5rem;

  &:active {
    opacity: 0.9;
  }
}
</style>
