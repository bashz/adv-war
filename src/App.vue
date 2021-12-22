<template>
  <router-view/>
</template>

<script lang="ts">
import { Vue } from 'vue-class-component';

const imageUrls = ['/img/world.png', '/img/estate.png', '/img/estate_snow.png', '/img/population.png', '/img/status.png'];

const loadImages = (): void => {
  imageUrls.forEach((url) => {
    (new Image()).src = url;
  });
};

export default class App extends Vue {
  loadImages = loadImages;

  beforeCreate(): void {
    this.loadImages();
  }
}
</script>
