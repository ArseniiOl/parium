<script setup lang="ts">
import {ref} from "vue";
import {useI18n} from "vue-i18n";
import DocumentationSvg from "components/icons/DocumentationSvg.vue";
import DevelopmentSvg from "components/icons/DevelopmentSvg.vue";
import OrganizationSvg from "components/icons/OrganizationSvg.vue";
import ObjectSvg from "components/icons/ObjectSvg.vue";
import BuildingSvg from "components/icons/BuildingSvg.vue";

const { t } = useI18n();
const slider = ref(1);
const autoplay = ref(true);
</script>

<template>
  <section id="about" class="about-section relative-position flex column no-wrap justify-center items-center">
    <div class="about-section__bg">
      <q-img fetchpriority="high" src="~assets/img/about-bg.png" alt="img-1">
        <template #loading></template>
      </q-img>
    </div>

    <div class="cycle-wrap flex column no-wrap justify-center items-center">
      <h2 class="cycle-wrap__title text-uppercase ft-thin-italic">
        {{ t('organizeObjectCreation')}}
      </h2>

      <p class="cycle-wrap__subtitle text-uppercase ft-medium-italic text-center">
        {{ t('fullCycleConstruction')}}
      </p>

      <q-list class="block-list flex no-wrap">
        <q-item class="block-list__item">
          <div class="block-list__icon block-list__icon--1">
            <documentation-svg/>
          </div>

          <p class="block-list__text ft-light-italic">
            {{ t('permissiveDocumentation')}}
          </p>
        </q-item>

        <q-item class="block-list__item">
          <div class="block-list__icon block-list__icon--2">
            <development-svg/>
          </div>

          <p class="block-list__text ft-light-italic">
            {{ t('projectDevelopment')}}
          </p>
        </q-item>

        <q-item class="block-list__item block-list__item--primary ft-light-italic">
          <div class="block-list__icon block-list__icon--3">
            <organization-svg/>
          </div>

          <p class="block-list__text">
            {{ t('processOrganization')}}
          </p>

          <p class="block-list__notice">
            {{ t('organizationNotice')}}
          </p>
        </q-item>

        <q-item class="block-list__item">
          <div class="block-list__icon block-list__icon--4">
            <object-svg/>
          </div>

          <p class="block-list__text ft-light-italic">
            {{ t('reconstructionText')}}
          </p>
        </q-item>

        <q-item class="block-list__item">
          <div class="block-list__icon block-list__icon--5">
            <building-svg/>
          </div>

          <p class="block-list__text ft-light-italic">
            {{ t('buildingText')}}
          </p>
        </q-item>
      </q-list>
    </div>

    <div class="about-wrap flex column no-wrap justify-center items-center">
      <div class="about-wrap__title text-center ft-medium">
        {{ t('aboutUs')}}
      </div>

      <div class="about-wrap__text flex no-wrap">
        <span class="about-wrap__text__num ft-light-italic">
          5
        </span>

        <p class="about-wrap__text__notice ft-thin-italic">
          <span class="ft-semibold-italic">
            {{ t('years')}}
          </span>

          {{ t('aboutText')}}
        </p>
      </div>

      <div class="timeline">
        <div class="timeline__item timeline__item--1">
          <div class="timeline__item__top timeline__item__num">
            2018
          </div>

          <span class="timeline__point timeline__point--lg"></span>

          <div class="timeline__item__bottom">
            {{ t('timelineText1')}}
          </div>
        </div>

        <div class="timeline__item timeline__item--2">
          <div class="timeline__item__img">
            <q-img fetchpriority="low" src="~assets/img/timeline-img-1.png" alt="construction-1" />

          </div>

          <span class="timeline__point"></span>

          <div class="timeline__item__bottom">
           <p> {{ t('timelineText2')}} </p>

            <span>2020</span>
          </div>
        </div>

        <div class="timeline__item timeline__item--3">
          <div class="timeline__item__img">
            <q-img fetchpriority="low" src="~assets/img/timeline-img-2.png" alt="construction-2" />

          </div>

          <span class="timeline__point"></span>

          <div class="timeline__item__bottom">
            <p> {{ t('timelineText3')}} </p>

            <span>2021</span>
          </div>
        </div>

        <div class="timeline__item timeline__item--3">
          <div class="timeline__item__img">
            <q-img fetchpriority="low" src="~assets/img/timeline-img-3.png" alt="construction-3" />

          </div>

          <span class="timeline__point"></span>

          <div class="timeline__item__bottom">
            <p> {{ t('timelineText4')}} </p>

            <span>2022</span>
          </div>
        </div>

      </div>
    </div>

    <div class="about-carousel">
      <q-carousel
        animated
        v-model="slider"
        infinite
        :autoplay="autoplay"
        transition-prev="slide-right"
        transition-next="slide-left"
        navigation
        padding
        class="about-slider"
      >
        <q-carousel-slide :name="1">
          <div class="flex no-wrap about-slider__wrap">
            <div class="about-slider__img">
              <q-img fetchpriority="high" src="~assets/img/about-slider-img-1.png" alt="img-1" />
            </div>
            <div class="about-slider__img">
              <q-img fetchpriority="high" src="~assets/img/about-slider-img-2.png" alt="img-2" />
            </div>
            <div class="about-slider__img">
              <q-img fetchpriority="high" src="~assets/img/about-slider-img-1.png" alt="img-1" />
            </div>
          </div>
        </q-carousel-slide>
        <q-carousel-slide :name="2">
          <div class="flex no-wrap about-slider__wrap">
            <div class="about-slider__img">
              <q-img fetchpriority="high" src="~assets/img/about-slider-img-1.png" alt="img-1" />
            </div>
            <div class="about-slider__img">
              <q-img fetchpriority="high" src="~assets/img/about-slider-img-2.png" alt="img-2" />
            </div>
            <div class="about-slider__img">
              <q-img fetchpriority="high" src="~assets/img/about-slider-img-1.png" alt="img-1" />
            </div>
          </div>
        </q-carousel-slide>
        <q-carousel-slide :name="3">
          <div class="flex no-wrap about-slider__wrap">
            <div class="about-slider__img">
              <q-img fetchpriority="high" src="~assets/img/about-slider-img-1.png" alt="img-1" />
            </div>
            <div class="about-slider__img">
              <q-img fetchpriority="high" src="~assets/img/about-slider-img-2.png" alt="img-2" />
            </div>
            <div class="about-slider__img">
              <q-img fetchpriority="high" src="~assets/img/about-slider-img-1.png" alt="img-1" />
            </div>
          </div>
        </q-carousel-slide>
        <q-carousel-slide :name="4">
          <div class="flex no-wrap about-slider__wrap">
            <div class="about-slider__img">
              <q-img fetchpriority="high" src="~assets/img/about-slider-img-1.png" alt="img-1" />
            </div>
            <div class="about-slider__img">
              <q-img fetchpriority="high" src="~assets/img/about-slider-img-2.png" alt="img-2" />
            </div>
            <div class="about-slider__img">
              <q-img fetchpriority="high" src="~assets/img/about-slider-img-1.png" alt="img-1" />
            </div>
          </div>
        </q-carousel-slide>

        <q-carousel-slide :name="5">
          <div class="flex no-wrap about-slider__wrap">
            <div class="about-slider__img">
              <q-img fetchpriority="high" src="~assets/img/about-slider-img-1.png" alt="img-1" />
            </div>
            <div class="about-slider__img">
              <q-img fetchpriority="high" src="~assets/img/about-slider-img-2.png" alt="img-2" />
            </div>
            <div class="about-slider__img">
              <q-img fetchpriority="high" src="~assets/img/about-slider-img-1.png" alt="img-1" />
            </div>
          </div>
        </q-carousel-slide>

      </q-carousel>
    </div>
  </section>
</template>

<style scoped lang="scss">
@import "src/css/components/main-sections/about-section";

.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.5s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateY(20px);
  opacity: 0;
}
</style>
