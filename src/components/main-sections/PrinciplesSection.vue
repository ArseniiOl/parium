<script setup lang="ts">
import {useI18n} from "vue-i18n";

const { t } = useI18n();
</script>

<template>
  <section class="principles-section flex column items-center justify-center no-wrap">
    <h3 class="principles-section__title ft-medium">
      {{ t('principlesOfWork')}}
    </h3>

    <div class="principles-section__notice ft-italic text-center">
      {{ t('principlesText1')}}

      <span class="ft-black-italic">
        {{ t('principlesText2')}}
      </span> <br>

      <span class="ft-black-italic">
        {{ t('principlesText3')}}
      </span>
      {{ t('principlesText4')}}

    </div>

    <div class="principles">
      <q-expansion-item
        class="principles-item principles-item--1"
        expand-icon="img: assets/arrow-down.svg"
      >
        <template v-slot:header>
         <div class="principles-item__head">
           <div class="flex column no-wrap">
             <div class="principles-item__title">
                {{ t('goal')}}
             </div>

             <div class="principles-item__notice">
               {{ t('goalNotice')}}
             </div>
           </div>
         </div>
        </template>

        <q-card class="principles-item__text">
          <p>
            <span class="ft-bold text-capitalize">
              {{ t('goal')}}
            </span>

            {{ t('goalText')}}
          </p>
        </q-card>
      </q-expansion-item>

      <q-expansion-item
        class="principles-item"
        expand-icon="img: assets/arrow-down.svg"
      >
        <template v-slot:header>
          <div class="principles-item__head">
            <div class="flex column no-wrap">
              <div class="principles-item__title">
                {{ t('experts')}}
              </div>

              <div class="principles-item__notice">
                {{ t('expertsNotice')}}
              </div>
            </div>
          </div>
        </template>

        <q-card class="principles-item__text">
          <p>
            {{ t('expertsText')}}
          </p>
        </q-card>
      </q-expansion-item>
    </div>

    <div class="principles-section__quote relative-position ft-light-italic">
      <p class="principles-section__quote__text">
        <span class="ft-bold-italic">Parium Group</span>

        {{ t('principlesQuote')}}
      </p>
    </div>
  </section>
</template>

<style scoped lang="scss">
@import "src/css/components/main-sections/principles-section";
</style>
