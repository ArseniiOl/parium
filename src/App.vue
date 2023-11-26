<script setup lang="ts">
import { useLanguageStore } from "src/stores/language";
import {onMounted} from "vue";
import {useQuasar} from "quasar";
import {useI18n} from "vue-i18n";
import {useRoute} from "vue-router";
import { LanguagesEnum } from 'src/utils/enums/language/LanguagesEnum';
import {registerLocale} from "i18n-iso-countries"

registerLocale(require("i18n-iso-countries/langs/en.json"));
//const route = useRoute();
const languageStore = useLanguageStore();



onMounted(() => {
  languageStore.setLanguage();

});


</script>

<template>
  <router-view />
</template>
