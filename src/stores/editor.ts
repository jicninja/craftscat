import { ref } from "vue";
import { defineStore } from "pinia";
import isUndefined from "lodash/isUndefined";
import SPRITES from "../globals/constants";

type BoolOrUndefined = boolean | undefined;

export const useEditorStore = defineStore("editor", () => {
  const isEditing = ref<BoolOrUndefined>(true);
  const currentBrushTile = ref<SPRITES>(SPRITES.GROUND);
  const showTutorial = ref<boolean>(true);

  const toggleEdit: Function = (force?: boolean): BoolOrUndefined => {
    isEditing.value = isUndefined(force) ? !isEditing.value : force;
    return isEditing.value;
  };

  const hideTutorial: Function = (): boolean => {
    showTutorial.value = !showTutorial.value;
    return showTutorial.value;
  };

  const setCurrentBrush: Function = (value: SPRITES): void => {
    currentBrushTile.value = value;
  };

  return {
    currentBrushTile,
    isEditing,
    showTutorial,
    toggleEdit,
    hideTutorial,
    setCurrentBrush,
  };
});
