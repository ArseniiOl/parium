<script setup lang="ts">
import {useI18n} from "vue-i18n";

const { t } = useI18n();
</script>

<template>
  <section class="team-banner">
    <div class="team-banner__logo flex items-center no-wrap">
      <div class="team-banner__logo__icon">
        <q-img fetchpriority="high" src="~assets/img/logo.png" alt="logo" />
      </div>

      <div class="team-banner__logo__text ft-extra-light">
        <span class="ft-bold">
          {{ t('commandPg')}}
        </span> <br>

        {{ t('management')}} <br>
        {{ t('experience')}} <br>
        {{ t('creativity')}}
      </div>
    </div>

  </section>
</template>

<style scoped lang="scss">
@import "src/css/components/main-sections/team-banner-section";
</style>

