<template>
  <q-header class="app-header bg-transparent">
    <div class="app-header__wrap flex items-center no-wrap justify-between">
      <div class="logo-wrap flex items-end no-wrap">
        <div class="logo-wrap__icon">
          <q-img fetchpriority="high" src="~assets/img/logo.png" alt="logo" />
        </div>

        <div class="logo-wrap__text">
          <q-img fetchpriority="high" src="~assets/img/logo-parium.png" alt="parium" />
        </div>
      </div>

      <div class="app-header__social cursor-pointer">
        <a href="mailto: parium.group@gmail.com" class="ft-bold">
          parium.group@gmail.com
        </a>
      </div>
    </div>
  </q-header>
</template>

<style lang="scss" scoped>
@import "src/css/components/general/app-header";
</style>
