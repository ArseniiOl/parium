<script setup lang="ts">
import AppHeader from "components/general/AppHeader.vue";
</script>

<template>
  <q-layout view="hhh lpR fFf">
    <app-header />

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>


