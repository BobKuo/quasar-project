<template>
  <swiper :navigation="true" :modules="modules" class="mySwiper">
    <swiper-slide><img src="https://picsum.photos/300/200/?random=1" /></swiper-slide>
    <swiper-slide><img src="https://picsum.photos/300/200/?random=2" /></swiper-slide>
    <swiper-slide>Slide 3</swiper-slide>
    <swiper-slide>Slide 4</swiper-slide><swiper-slide>Slide 5</swiper-slide>
    <swiper-slide>Slide 6</swiper-slide><swiper-slide>Slide 7</swiper-slide>
    <swiper-slide>Slide 8</swiper-slide><swiper-slide>Slide 9</swiper-slide>
  </swiper>
</template>

<script setup>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'

//
import { Navigation } from 'swiper/modules'

const modules = [Navigation]
</script>

<style scoped>
.mySwiper {
  width: 800px;
  height: 400px;
}
</style>
