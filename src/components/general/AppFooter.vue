<script setup lang="ts">
import {useI18n} from "vue-i18n";

const { t } = useI18n();
</script>

<template>
  <q-footer class="app-footer">
    <div class="logo-wrap flex items-end no-wrap">
      <div class="logo-wrap__icon">
        <q-img fetchpriority="high" src="~assets/img/logo.png" alt="logo" />
      </div>

      <div class="logo-wrap__text ft-medium">
        <q-img fetchpriority="high" src="~assets/img/logo-parium.png" alt="parium" />
      </div>
    </div>

    <div class="copyright">
      {{ t('copyright')}}
    </div>

    <div class="app-footer__text ft-copyright">
      PARIUMGROUP  {{ new Date().getFullYear() }}
    </div>
  </q-footer>
</template>

<style scoped lang="scss">
@import "src/css/components/general/app-footer";
</style>
