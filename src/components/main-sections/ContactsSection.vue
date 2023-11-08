<script setup lang="ts">
import {useI18n} from "vue-i18n";
import {AppLanguages, LanguagesEnum, useLanguageStore} from "stores/language";
import { ref} from "vue";

const { t } = useI18n();
const languageStore = useLanguageStore();

const toggleLanguage = (value: LanguagesEnum ) => {
  languageStore.setLanguage({
    lang: value,
    replace: true,
  });
}
</script>

<template>
  <div class="contacts flex column justify-center items-center no-wrap">
    <h4 class="contacts__title ft-medium">
      {{ t('contacts')}}
    </h4>

    <p class="contacts__text ft-medium-italic">
      {{ t('contactsAddress')}}
    </p>

    <a class="contacts__link ft-medium-italic" href="tel:+380673432011">
      {{ t('phone')}} <span>
      +38 (067) 343 20 11
    </span>
    </a>

    <a class="contacts__mail ft-bold" href="mailto:parium.group@gmail.com">
      parium.group@gmail.com
    </a>

    <div class="lang-btns-wrap flex">
      <q-btn
        :class="{'active': lang === item.value}"
        v-for="(item, index) in AppLanguages" :key="index" flat class="lang-btn" @click="toggleLanguage(item.value)">
        {{ item.label}}
      </q-btn>

    </div>
  </div>
</template>

<style scoped lang="scss">
@import "src/css/components/main-sections/contacts-section";
</style>
