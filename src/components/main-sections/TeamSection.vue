<script setup lang="ts">
import {useI18n} from "vue-i18n";
import {ref} from "vue";
import ArrowDownSvg from "components/icons/ArrowDownSvg.vue";

const { t } = useI18n();
const teamSlide = ref(1);
</script>

<template>
  <section class="team-section flex column items-center justify-center no-wrap">
    <h3 class="team-section__title ft-medium">
      {{ t('team')}}
    </h3>

    <div class="team-list">
      <q-carousel
        v-model="teamSlide"
        vertical
        transition-prev="slide-down"
        transition-next="slide-up"
        swipeable
        animated
        class="team-slider"
        ref="carousel"
      >
        <q-carousel-slide :name="1" class="team-slider__slide">
          <div class="team-slider__slide-wrap">
            <div class="team-slider__wrap">
              <div class="team-slider__num ft-thin-italic">
                1
              </div>

              <div class="team-slider__img">
                <q-img fetchpriority="low" src="~assets/img/ostap.png" alt="ostap">
                </q-img>

                <div class="team-slider__next">
                  <q-img fetchpriority="low" src="~assets/img/ihor.png" alt="ostap">
                  </q-img>
                </div>
              </div>
            </div>

            <div class="team-slider__text">
              <div class="team-slider__text__title ft-bold">
                {{ t('ostapKimakovuch')}}
              </div>

              <p>

               <span class="ft-bold">
                 {{ t('ostapTextTitle') }}
               </span> {{ t('ostapText1')}}
              </p>

              <p>
                {{ t('ostapText2')}}
              </p>
            </div>


          </div>
        </q-carousel-slide>

        <q-carousel-slide :name="2" class="team-slider__slide">
          <div class="team-slider__slide-wrap">
            <div class="team-slider__wrap">
              <div class="team-slider__num ft-thin-italic">
                2
              </div>

              <div class="team-slider__img">
                <q-img fetchpriority="low" src="~assets/img/ihor.png" alt="ostap">
                </q-img>

                <div class="team-slider__next">
                  <q-img fetchpriority="low" src="~assets/img/command.png" alt="ostap">
                  </q-img>
                </div>
              </div>
            </div>

            <div class="team-slider__text">
              <div class="team-slider__text__title ft-bold">
                {{ t('ihorKovalchuk')}}
              </div>

              <p>

               <span class="ft-bold">
                 {{ t('ihorTextTitle') }}
               </span> {{ t('ihorText1')}}
              </p>

              <p>
                {{ t('ihorText2')}}
              </p>
            </div>


          </div>
        </q-carousel-slide>

        <q-carousel-slide :name="3" class="team-slider__slide">
          <div class="team-slider__slide-wrap">
          <div class="team-slider__wrap">
            <div class="team-slider__num ft-thin-italic">
              3
            </div>

            <div class="team-slider__img">
              <q-img fetchpriority="low" src="~assets/img/command.png" alt="ostap">
              </q-img>
            </div>
          </div>

          <div class="team-slider__text">
            <div class="team-slider__text__title team-slider__text__title--sm ft-bold">
              {{ t('teamNames')}}
            </div>

            <p>

             <span class="ft-bold">
               {{ t('teamTextTitle') }}
             </span> {{ t('teamText1')}}
            </p>

            <p>
              {{ t('teamText2')}}
            </p>
          </div>
          </div>
        </q-carousel-slide>


        <template v-slot:control>

          <q-carousel-control
            position="bottom-right"
            class="team-slider__control"
          >
            <q-btn
              flat
              class="team-slider__control__btn team-slider__control__btn--prev"
              @click="$refs.carousel.previous()"
              v-show="teamSlide !== 1"
            >
              <arrow-down-svg/>
            </q-btn>
            <q-btn
              flat
              class="team-slider__control__btn"
              @click="$refs.carousel.next()"
            >
              <arrow-down-svg/>
            </q-btn>
          </q-carousel-control>
        </template>
      </q-carousel>
    </div>
  </section>
</template>

<style scoped lang="scss">
@import "src/css/components/main-sections/team-section";
</style>

