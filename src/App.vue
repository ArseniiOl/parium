<script setup lang="ts">
import { useLanguageStore } from "src/stores/language";
import {onMounted, watch} from "vue";
import {useQuasar} from "quasar";
import {useI18n} from "vue-i18n";
import {useRoute} from "vue-router";
import { LanguagesEnum } from 'src/utils/enums/language/LanguagesEnum';
import {registerLocale} from "i18n-iso-countries";

const route = useRoute();
const languageStore = useLanguageStore();

onMounted(() => {
  languageStore.setLanguage();
  registerLocale(require("i18n-iso-countries/langs/en.json"));
});
</script>

<template>
  <router-view />
</template>
