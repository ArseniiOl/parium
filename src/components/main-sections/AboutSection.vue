<script setup lang="ts">
import {ref} from "vue";
import {useI18n} from "vue-i18n";
import DocumentationSvg from "components/icons/DocumentationSvg.vue";
import DevelopmentSvg from "components/icons/DevelopmentSvg.vue";

const { t } = useI18n();

</script>

<template>
  <section class="about-section relative-position">
    <h2 class="about-section__title">
      {{ t('organizeObjectCreation')}}
    </h2>

    <p class="about-section__subtitle">
      {{ t('fullCycleConstruction')}}
    </p>

    <q-list class="hover-list">
      <q-item class="hover-list__item cursor-pointer">
        <div class="hover-list__icon">
          <documentation-svg/>
        </div>

        <p class="hover-list__text ft-light-italic">
          {{ t('permissiveDocumentation')}}
        </p>
      </q-item>

      <q-item class="hover-list__item cursor-pointer">
        <div class="hover-list__icon">
          <development-svg/>
        </div>

        <p class="hover-list__text ft-light-italic">
          {{ t('projectDevelopment')}}
        </p>
      </q-item>
    </q-list>
  </section>
</template>

<style scoped lang="scss">
</style>
