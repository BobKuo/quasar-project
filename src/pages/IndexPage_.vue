<template>
  <q-page class="flex flex-center">
    <!-- Swiper Container -->
    <swiper-container slides-per-view="2" space-between="10" pagination navigation>
      <swiper-slide><img src="https://picsum.photos/300/200/?random=10" /></swiper-slide>
      <swiper-slide>Slide 2</swiper-slide>
      <swiper-slide>Slide 3</swiper-slide>
    </swiper-container>
    <!-- End Swiper Container -->
  </q-page>
</template>

<script setup>
//
</script>

<style scoped>
swiper-container {
  width: 100%;
  height: 100%;
}
</style>
