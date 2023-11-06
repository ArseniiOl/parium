<script setup lang="ts">
import WelcomeSection from "../components/main-sections/WelcomeSection.vue";
import AboutSection from "components/main-sections/AboutSection.vue";
import PrinciplesSection from "components/main-sections/PrinciplesSection.vue";
import TeamSection from "components/main-sections/TeamSection.vue";
import TeamBannerSection from "components/main-sections/TeamBannerSection.vue";
import ObjectsSection from "components/main-sections/ObjectsSection.vue";
import ContactsSection from "components/main-sections/ContactsSection.vue";

</script>

<template>
  <div class="main-container">
    <welcome-section/>

    <about-section/>

    <principles-section/>

    <team-section/>

    <team-banner-section/>

    <section class="footer-section">
        <objects-section/>

        <contacts-section/>
    </section>
  </div>
</template>

<style scoped>

</style>
