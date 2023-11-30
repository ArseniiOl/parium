<script setup lang="ts">
import AboutSection from "components/main-sections/AboutSection.vue";
import PrinciplesSection from "components/main-sections/PrinciplesSection.vue";
import TeamSection from "components/main-sections/TeamSection.vue";
import TeamBannerSection from "components/main-sections/TeamBannerSection.vue";
import ObjectsSection from "components/main-sections/ObjectsSection.vue";
import ContactsSection from "components/main-sections/ContactsSection.vue";
import ArrowRightSvg from "components/icons/ArrowRightSvg.vue";
import {useI18n} from "vue-i18n";
import {onMounted, ref} from "vue";
import { scroll } from 'quasar'
import {useLanguageStore, LanguagesEnum} from "stores/language";

const languageStore = useLanguageStore();

const { t } = useI18n();
const navBtn = ref(false);
const menuState = ref(false);

const { getScrollTarget, setVerticalScrollPosition } = scroll

const scrollToElement = (el: any) => {
  const target = getScrollTarget(el)
  const offset = el.offsetTop
  const duration = 1000
  setVerticalScrollPosition(target, offset, duration)
}

const onScroll = (el: any) => {
  let navPos = el.target.documentElement.scrollTop;

  navBtn.value = navPos >= 100;
}

onMounted(() => {
  window.addEventListener('scroll', onScroll)
});
</script>

<template>
  <div class="main-container" :class="{'eng-lang':  languageStore.getLanguage?.value === LanguagesEnum.EN,
  'deu-lang':  languageStore.getLanguage?.value === LanguagesEnum.DEU,
  'pl-lang':  languageStore.getLanguage?.value === LanguagesEnum.PL,
  }">
    <q-btn-dropdown
      ref="menu"
      class="menu-btn q-ml-auto"
      flat
      no-caps
      v-model="menuState"
      dropdown-icon="none"
      transition-hide="slide-top"
      transition-duration="550"
      content-class="menu-btn-drop"
      v-show="navBtn"
    >
      <template v-slot:label>
        <div class="menu-btn__icon" :class="{active: menuState}">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </template>

      <div class="menu-btn-drop__list">
        <q-list class="main-nav__list">
          <q-item class="main-nav__item" clickable @click="scrollToElement($refs.about)" v-close-popup>

            <arrow-right-svg/>

            {{ t('aboutUs')}}
          </q-item>



          <q-item class="main-nav__item" clickable @click="scrollToElement($refs.principles)" v-close-popup>
            <arrow-right-svg/>

            {{ t('principles')}}
          </q-item>

          <q-item class="main-nav__item" clickable @click="scrollToElement($refs.team)" v-close-popup>
            <arrow-right-svg/>

            {{ t('team')}}
          </q-item>

          <q-item class="main-nav__item" clickable @click="scrollToElement($refs.contacts)" v-close-popup>
            <arrow-right-svg/>

            {{ t('contacts')}}
          </q-item>
        </q-list>
      </div>
    </q-btn-dropdown>

    <section ref="welcome" class="welcome-section relative-position">
      <div class="welcome-section__img">
        <q-img fetchpriority="high" src="~assets/img/slider-1-img-1.png" alt="img-1" />
      </div>

      <nav class="main-nav">
        <q-list class="main-nav__list">
          <q-item class="main-nav__item" clickable @click="scrollToElement($refs.about)">

            <arrow-right-svg/>

            {{ t('aboutUs')}}
          </q-item>



          <q-item class="main-nav__item" clickable @click="scrollToElement($refs.principles)">
            <arrow-right-svg/>

            {{ t('principles')}}
          </q-item>

          <q-item class="main-nav__item" clickable @click="scrollToElement($refs.team)">
            <arrow-right-svg/>

            {{ t('team')}}
          </q-item>

          <q-item class="main-nav__item" clickable @click="scrollToElement($refs.contacts)">
            <arrow-right-svg/>

            {{ t('contacts')}}
          </q-item>
        </q-list>
      </nav>

      <div class="welcome-section__wrap">
        <h1 class="app-title ft-thin">
          {{ t('welcome')}} <br> {{ t('welcomeTo')}}  <span class="ft-bold">PG</span>
        </h1>

        <p class="welcome-section__text ft-light">
          <span class="ft-bold">Parium Group</span>
          — {{ t('welcomeSectionText')}}
        </p>
      </div>
    </section>

    <div ref="about">
      <about-section/>
    </div>

    <div ref="principles">
    <principles-section/>
    </div>

    <div ref="team">
    <team-section/>
    </div>

    <team-banner-section/>

    <section class="footer-section">
        <objects-section/>

      <div ref="contacts">
        <contacts-section/>
      </div>
    </section>
  </div>
</template>

<style scoped lang="scss">
@import "src/css/components/main-sections/welcome-section";
</style>
