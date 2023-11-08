<script setup lang="ts">
import {ref} from "vue";

const mailVisible = ref(false);
</script>

<template>
  <q-header class="app-header bg-transparent">
    <div class="app-header__wrap flex items-center no-wrap justify-between">
      <div class="logo-wrap flex items-end no-wrap">
        <div class="logo-wrap__icon">
          <q-img fetchpriority="high" src="~assets/img/logo.png" alt="logo" />
        </div>

        <div class="logo-wrap__text" v-show="!mailVisible">
          <q-img fetchpriority="high" src="~assets/img/logo-parium.png" alt="parium" />
        </div>
      </div>

      <div class="app-header__social cursor-pointer">
        <a href="mailto: parium.group@gmail.com" class="ft-bold app-header__social__link" v-show="mailVisible">
          parium.group@gmail.com
        </a>

        <q-btn flat class="app-header__social__icon ft-medium" @click="mailVisible = !mailVisible"
        :class="{active: mailVisible}">
          @
        </q-btn>
      </div>
    </div>
  </q-header>
</template>

<style lang="scss" scoped>
@import "src/css/components/general/app-header";
</style>
