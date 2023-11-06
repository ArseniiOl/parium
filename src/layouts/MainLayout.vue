<script setup lang="ts">
import AppHeader from "components/general/AppHeader.vue";
import AppFooter from "components/general/AppFooter.vue";

</script>

<template>
  <q-layout view="hhh lpR fFf">
    <app-header />

    <q-page-container>
      <router-view />
    </q-page-container>

    <app-footer/>
  </q-layout>
</template>


