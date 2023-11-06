<script setup lang="ts">
import {useI18n} from "vue-i18n";
import {ref} from "vue";

const { t } = useI18n();

const object = ref(1);

</script>

<template>
  <div class="objects-section">
    <h3 class="objects-section__title ft-thin-italic">
      {{ t('objectsInProcess')}}
    </h3>

   <div class="objects-wrap w-100">
     <div class="object object--top relative-position" :class="{'active': object === 1}">
       <div class="object__img" v-show="object === 1">
         <q-img fetchpriority="high" src="~assets/img/object-1.png" alt="object" />
       </div>

       <div class="object__toggle cursor-pointer" @click="object = 1">
          <p class="object__toggle__title">
            {{ t('kulishStr')}}
          </p>

         <p class="object__toggle__subtitle">
           {{ t('reconstructionOfBuilding')}}
         </p>
       </div>

       <div class="object__line cursor-pointer">
         <span></span>
       </div>
     </div>

     <div class="object relative-position" :class="{'active': object === 2}">
       <div class="object__img object__img--wide" v-show="object === 2">
         <q-img fetchpriority="high" src="~assets/img/object-2.png" alt="object" />
       </div>

       <div class="object__toggle cursor-pointer" @click="object = 2">
         <p class="object__toggle__title">
           {{ t('vunnuchenkoStr')}}
         </p>

         <p class="object__toggle__subtitle">
           {{ t('restorationOfMonument')}}
         </p>
       </div>

       <div class="object__line cursor-pointer">
         <span></span>
       </div>
     </div>
   </div>


  </div>
</template>

<style scoped lang="scss">
@import "src/css/components/main-sections/objects-section";
</style>

