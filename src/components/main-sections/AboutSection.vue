<script setup lang="ts">
import {ref} from "vue";
import {useI18n} from "vue-i18n";
import DocumentationSvg from "components/icons/DocumentationSvg.vue";
import DevelopmentSvg from "components/icons/DevelopmentSvg.vue";
import OrganizationSvg from "components/icons/OrganizationSvg.vue";
import ObjectSvg from "components/icons/ObjectSvg.vue";
import BuildingSvg from "components/icons/BuildingSvg.vue";

const { t } = useI18n();

</script>

<template>
  <section class="about-section relative-position flex column no-wrap justify-center items-center">
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
