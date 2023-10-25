<script setup lang="ts">
import {ref} from "vue";
import {useI18n} from "vue-i18n";
import ArrowRightSvg from "components/icons/ArrowRightSvg.vue";

const { t } = useI18n();

const slide = ref(1);
const autoplay = ref(true);
</script>

<template>
  <section class="welcome-section relative-position">
    <q-carousel
      animated
      v-model="slide"
      navigation
      infinite
      :autoplay="autoplay"
      transition-prev="slide-right"
      transition-next="slide-left"
      class="back-slider"
    >
      <q-carousel-slide :name="1">
        <div class="back-slider__img">
          <q-img fetchpriority="high" src="~assets/img/slider-1-img-1.png" alt="img-1" />
        </div>
      </q-carousel-slide>
      <q-carousel-slide :name="2">
        <q-img fetchpriority="high" src="~assets/img/slider-1-img-1.png" alt="img-1" />
      </q-carousel-slide>
      <q-carousel-slide :name="3">
        <q-img fetchpriority="high" src="~assets/img/slider-1-img-1.png" alt="img-1" />
      </q-carousel-slide>
      <q-carousel-slide :name="4">
        <q-img fetchpriority="high" src="~assets/img/slider-1-img-1.png" alt="img-1" />
      </q-carousel-slide>
      <q-carousel-slide :name="5">
        <q-img fetchpriority="high" src="~assets/img/slider-1-img-1.png" alt="img-1" />
      </q-carousel-slide>
    </q-carousel>

    <nav class="main-nav">
      <q-list class="main-nav__list">
        <q-item class="main-nav__item">
          <arrow-right-svg/>

          {{ t('aboutUs')}}
        </q-item>

        <q-item class="main-nav__item">
          <arrow-right-svg/>

          {{ t('principles')}}
        </q-item>

        <q-item class="main-nav__item">
          <arrow-right-svg/>

          {{ t('team')}}
        </q-item>

        <q-item class="main-nav__item">
          <arrow-right-svg/>

          {{ t('contacts')}}
        </q-item>
      </q-list>
    </nav>

    <div class="welcome-section__wrap">
      <h1 class="app-title ft-thin">
        {{ t('welcome')}} <br> {{ t('welcomeTo')}}  <span class="ft-bold">PG</span>
      </h1>

      <p class="welcome-section__text ft-light">
        <span class="ft-bold">Parium Group</span>
        — {{ t('welcomeSectionText')}}
      </p>
    </div>


  </section>
</template>

<style scoped lang="scss">
@import "src/css/components/main-sections/welcome-section";
</style>
