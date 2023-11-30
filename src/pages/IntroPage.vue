<script setup lang="ts">
import {useI18n} from "vue-i18n";
import {AppLanguages, LanguagesEnum, useLanguageStore} from "stores/language";
import {useAppLink} from "src/composable/useAppLink";

const { t } = useI18n();
const languageStore = useLanguageStore();
const {homeLink} = useAppLink();

const toggleLanguage = (value: LanguagesEnum ) => {
  languageStore.setLanguage({
    lang: value,
    replace: true,
  });
}
</script>

<template>
<q-page class="intro-page flex no-wrap items-center column justify-center">
  <div class="logo-wrap">
    <div class="logo-wrap__icon">
      <q-img fetchpriority="high" src="~assets/img/logo.png" alt="logo" />
    </div>

    <div class="logo-wrap__text ft-medium">
      <q-img fetchpriority="high" src="~assets/img/logo-parium.png" alt="parium" />
    </div>
  </div>

  <div class="lang-btns-wrap flex">
    <q-btn
      :class="{'active': languageStore.getLanguage?.value === item.value}"
      v-for="(item, index) in AppLanguages" :key="index" flat class="lang-btn"
      @click="async () => {
             await toggleLanguage(item.value)
              $router.push(homeLink());

            }"
      >
      {{ item.label}}
    </q-btn>

  </div>

</q-page>
</template>

<style lang="scss" scoped>
@import "src/css/pages/intro-page";
</style>
