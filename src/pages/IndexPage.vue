<template>
  <!-- Swiper Container -->
  <!--
    slides-per-view="1"
    space-between="10"
    -->
  <swiper-container
    pagination-clickable="true"
    navigation="true"
    mousewheel-enabled="true"
    free-mode="true"
    speed="600"
    parallax="true"
  >
    <div
      slot="container-start"
      class="parallax-bg"
      style="background-image: url(https://swiperjs.com/demos/images/nature-1.jpg)"
      data-swiper-parallax="-23%"
    ></div>
    <swiper-slide>
      <div class="title" data-swiper-parallax="-300">Slide 1</div>
      <div class="subtitle" data-swiper-parallax="-200">Subtitle</div>
      <div class="text" data-swiper-parallax="-100">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam dictum mattis velit, sit
          amet faucibus felis iaculis nec. Nulla laoreet justo vitae porttitor porttitor.
          Suspendisse in sem justo. Integer laoreet magna nec elit suscipit, ac laoreet nibh
          euismod. Aliquam hendrerit lorem at elit facilisis rutrum. Ut at ullamcorper velit. Nulla
          ligula nisi, imperdiet ut lacinia nec, tincidunt ut libero. Aenean feugiat non eros quis
          feugiat.
        </p>
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="title" data-swiper-parallax="-300">Slide 2</div>
      <div class="subtitle" data-swiper-parallax="-200">Subtitle</div>
      <div class="text" data-swiper-parallax="-100">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam dictum mattis velit, sit
          amet faucibus felis iaculis nec. Nulla laoreet justo vitae porttitor porttitor.
          Suspendisse in sem justo. Integer laoreet magna nec elit suscipit, ac laoreet nibh
          euismod. Aliquam hendrerit lorem at elit facilisis rutrum. Ut at ullamcorper velit. Nulla
          ligula nisi, imperdiet ut lacinia nec, tincidunt ut libero. Aenean feugiat non eros quis
          feugiat.
        </p>
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="title" data-swiper-parallax="-300">Slide 3</div>
      <div class="subtitle" data-swiper-parallax="-200">Subtitle</div>
      <div class="text" data-swiper-parallax="-100">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam dictum mattis velit, sit
          amet faucibus felis iaculis nec. Nulla laoreet justo vitae porttitor porttitor.
          Suspendisse in sem justo. Integer laoreet magna nec elit suscipit, ac laoreet nibh
          euismod. Aliquam hendrerit lorem at elit facilisis rutrum. Ut at ullamcorper velit. Nulla
          ligula nisi, imperdiet ut lacinia nec, tincidunt ut libero. Aenean feugiat non eros quis
          feugiat.
        </p>
      </div>
    </swiper-slide>
    <!-- <swiper-slide><img src="https://picsum.photos/800/600/?random=10" /></swiper-slide>
    <swiper-slide><img src="https://picsum.photos/400/300/?random=11" /></swiper-slide>
    <swiper-slide><img src="https://picsum.photos/800/600/?random=12" /></swiper-slide> -->
  </swiper-container>
  <!-- End Swiper Container -->
</template>

<script setup>
//
</script>

<style scoped>
swiper-container {
  width: 100%;
  height: 100%;
  /* width: 100vw;
  height: 100vh; */

  /* --swiper-navigation-color: '#fff';
  --swiper-pagination-color: '#fff'; */
}

swiper-slide {
  font-size: 18px;
  color: #fff;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  padding: 40px 60px;

  .title {
    font-size: 41px;
    font-weight: 300;
  }

  .subtitle {
    font-size: 21px;
  }

  .text {
    font-size: 14px;
    max-width: 400px;
    line-height: 1.3;
  }
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
</style>
