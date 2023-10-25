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
  <section class="about-section relative-position">
    <h2 class="about-section__title text-uppercase">
      {{ t('organizeObjectCreation')}}
    </h2>

    <p class="about-section__subtitle text-uppercase">
      {{ t('fullCycleConstruction')}}
    </p>

    <q-list class="block-list">
      <q-item class="block-list__item">
        <div class="block-list__icon">
          <documentation-svg/>
        </div>

        <p class="block-list__text ft-light-italic">
          {{ t('permissiveDocumentation')}}
        </p>
      </q-item>

      <q-item class="block-list__item">
        <div class="block-list__icon">
          <development-svg/>
        </div>

        <p class="block-list__text ft-light-italic">
          {{ t('projectDevelopment')}}
        </p>
      </q-item>

      <q-item class="block-list__item block-list__item--primary ft-light-italic">
        <div class="block-list__icon">
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
        <div class="block-list__icon">
          <object-svg/>
        </div>

        <p class="block-list__text ft-light-italic">
          {{ t('reconstructionText')}}
        </p>
      </q-item>

      <q-item class="block-list__item">
        <div class="block-list__icon">
          <building-svg/>
        </div>

        <p class="block-list__text ft-light-italic">
          {{ t('buildingText')}}
        </p>
      </q-item>
    </q-list>
  </section>
</template>

<style scoped lang="scss">

</style>
