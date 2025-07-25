<template>
  <q-page class="flex flex-center" style="height: 1px">
    <!-- Swiper Container -->
    <!--

space-between="10"
    parallax="true"
    -->
    <swiper-container
      ref="swiperRef"
      slides-per-view="2"
      speed="600"
      navigation="true"
      pagination-clickable="true"
      free-mode="true"
      mousewheel-enabled="true"
    >
      <!-- https://swiperjs.com/demos/images/nature-1.jpg -->
      <div
        slot="container-start"
        class="parallax-bg"
        style="background-image: url(https://picsum.photos/1000/1000/?random=10)"
        data-swiper-parallax="-23%"
      ></div>
      <swiper-slide>
        <div class="card">
          <img src="https://rprojectjapan.com/assets/images/top/exhibition/story_image_1.webp" />
          <div class="title" data-swiper-parallax="-300">STORY</div>
          <div class="subtitle" data-swiper-parallax="-200">01</div>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="title" data-swiper-parallax="-300">Slide 2</div>
        <div class="subtitle" data-swiper-parallax="-200">Subtitle</div>
        <div class="text" data-swiper-parallax="-100">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam dictum mattis velit,
            sit amet faucibus felis iaculis nec. Nulla laoreet justo vitae porttitor porttitor.
            Suspendisse in sem justo. Integer laoreet magna nec elit suscipit, ac laoreet nibh
            euismod. Aliquam hendrerit lorem at elit facilisis rutrum. Ut at ullamcorper velit.
            Nulla ligula nisi, imperdiet ut lacinia nec, tincidunt ut libero. Aenean feugiat non
            eros quis feugiat.
          </p>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="title" data-swiper-parallax="-300">Slide 3</div>
        <div class="subtitle" data-swiper-parallax="-200">Subtitle</div>
        <div class="text" data-swiper-parallax="-100">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam dictum mattis velit,
            sit amet faucibus felis iaculis nec. Nulla laoreet justo vitae porttitor porttitor.
            Suspendisse in sem justo. Integer laoreet magna nec elit suscipit, ac laoreet nibh
            euismod. Aliquam hendrerit lorem at elit facilisis rutrum. Ut at ullamcorper velit.
            Nulla ligula nisi, imperdiet ut lacinia nec, tincidunt ut libero. Aenean feugiat non
            eros quis feugiat.
          </p>
        </div>
      </swiper-slide>
      <!-- <swiper-slide><img src="https://picsum.photos/800/600/?random=10" /></swiper-slide>
    <swiper-slide><img src="https://picsum.photos/400/300/?random=11" /></swiper-slide>
    <swiper-slide><img src="https://picsum.photos/800/600/?random=12" /></swiper-slide> -->
    </swiper-container>
    <!-- End Swiper Container -->
  </q-page>
</template>

<script setup>
//
import { onMounted, ref } from 'vue'

const swiperRef = ref(null)

onMounted(() => {
  if (swiperRef.value) {
    const swiperParams = {
      parallax: true,
      // speed: 600,
      // navigation: true,
      // pagination: {
      //   clickable: true,
      // },
      // mousewheel: true,
    }

    Object.assign(swiperRef.value, swiperParams)
    swiperRef.value.initialize()
  }
})
</script>

<style scoped>
swiper-container {
  width: 100%;
  height: 100%;
  background-color: #000;
  border: 5px solid blue;

  /* --swiper-navigation-color: '#fff';
  --swiper-pagination-color: '#fff'; */
}

swiper-slide {
  font-size: 18px;
  color: #fff;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  padding: 40px 60px;

  .card {
    width: 100%;
    height: 40%;
    border: 5px solid cyan;

    position: relative;
  }
  img {
    width: 100%;
    height: 100%;

    position: absolute;
  }
  .title {
    font-size: 17px;
    font-weight: 1000;

    position: absolute;
    top: 50%;
    left: -12%;
  }
  .subtitle {
    font-size: 55px;

    position: absolute;
    top: 57%;
    left: -12%;
    text-decoration: underline;
  }
  .text {
    font-size: 14px;
    max-width: 400px;
    line-height: 1.3;
  }

  border: 1px solid green;
}

.parallax-bg {
  position: absolute;
  left: 0;
  top: 0;
  width: 130%;
  height: 100%;
  -webkit-background-size: cover;
  background-size: cover;
  background-position: center;
}

.q-page {
  border: 1px solid red;
}
</style>
