<template>
  <router-view/>
</template>

<script lang="ts">
import { Vue } from 'vue-class-component';

const imageUrls = ['/img/world.png', '/img/estate.png', '/img/estate_snow.png', '/img/population.png'];

export default class App extends Vue {
  // eslint-disable-next-line class-methods-use-this
  beforeCreate(): void {
    imageUrls.forEach((url) => {
      (new Image()).src = url;
    });
  }
}
</script>
