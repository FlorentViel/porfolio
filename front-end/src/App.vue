<template>
  <div :class="theme.isDarkMode ? 'backgroundDark ' : 'backgroundLight'" class="backgroundDefault d-flex flex-column" @toggle-theme-request="toggleTheme">

    <NavBar :theme="theme" :isNext="isNext" />
        
    <div class="d-flex justify-content-center mx-5">

      <button class="btn prev-button d-none d-sm-block">
        <svg v-if="$route.name === 'home' || '' " xmlns="http://www.w3.org/2000/svg" width="47" height="66" viewBox="0 0 47 66" fill="none">
          <path d="M36.3622 1.99355C36.7338 1.6622 37.113 1.33101 37.5 1L36.3622 1.99355C10.3479 25.1943 22.0435 49.14 33.7649 61.0805L37.5 64.5C36.2859 63.5095 35.0252 62.3644 33.7649 61.0805L2 32L36.3622 1.99355Z" fill="#8E8E8E"/>
          <path d="M37.5 1C7.1 27 24.8333 54.1667 37.5 64.5L2 32L37.5 1Z" stroke="#FCFCFC" stroke-width="2"/>
        </svg>
        <svg v-else @click="goBack" id="arrow-prev"  :class="
        { 'arrow-light' : theme.isDarkMode == false, 'arrow-dark' : theme.isDarkMode == true }" xmlns="http://www.w3.org/2000/svg" width="47" height="66" viewBox="0 0 47 66" fill="none">
          <path d="M36.3622 1.99355C36.7338 1.6622 37.113 1.33101 37.5 1L36.3622 1.99355C10.3479 25.1943 22.0435 49.14 33.7649 61.0805L37.5 64.5C36.2859 63.5095 35.0252 62.3644 33.7649 61.0805L2 32L36.3622 1.99355Z" fill="black"/>
          <path d="M37.5 1C7.1 27 24.8333 54.1667 37.5 64.5L2 32L37.5 1Z" stroke="#5D11FF" stroke-width="2"/>
        </svg>
      </button>

      <router-view :theme="theme" :changeSection="changeSection" v-slot="{ Component }">
        <transition :name="isNext ? 'slide' : 'slide-reverse'" mode="out-in">
          <keep-alive>
            <component :is="Component" />
          </keep-alive>
        </transition>
      </router-view>

      <button class="btn next-button d-none d-sm-block" >
    <svg v-if="$route.name === 'contact'" xmlns="http://www.w3.org/2000/svg" width="39" height="66" viewBox="0 0 39 66" fill="none">
    <path d="M2.13777 63.5065C1.76624 63.8378 1.38702 64.169 1 64.5L2.13777 63.5065C28.1521 40.3057 16.4565 16.36 4.73512 4.41948L1 1C2.21411 1.99046 3.47476 3.13556 4.73512 4.41948L36.5 33.5L2.13777 63.5065Z" fill="#8E8E8E"/>
    <path d="M1 64.5C31.4 38.5 13.6667 11.3333 1 1L36.5 33.5L1 64.5Z" stroke="#FCFCFC" stroke-width="2" />
  </svg>
    <svg v-else @click="goNext" id="arrow-next" :class="
       { 'arrow-light' : theme.isDarkMode == false, 'arrow-dark' : theme.isDarkMode == true }" xmlns="http://www.w3.org/2000/svg" width="39" height="66" viewBox="0 0 39 66" fill="none">
        <path d="M2.13777 63.5065C1.76624 63.8378 1.38702 64.169 1 64.5L2.13777 63.5065C28.1521 40.3057 16.4565 16.36 4.73512 4.41948L1 1C2.21411 1.99046 3.47476 3.13556 4.73512 4.41948L36.5 33.5L2.13777 63.5065Z" fill="black"/>
        <path d="M1 64.5C31.4 38.5 13.6667 11.3333 1 1L36.5 33.5L1 64.5Z" stroke="#5D11FF" stroke-width="2" />
    </svg>

  </button>

    </div>

    <Footer :theme="theme" />





  </div>
</template>



<script setup>

import NavBar from './components/navBar.vue';
import Footer from './components/footer.vue';
import { ref, readonly } from 'vue';

// Homepage

const pageTitle = ref('Portfolio Florent VIEVILLE'); 
const selectedSection = ref('A propos'); // Par défaut, afficher la section "Accueil"


const isDarkMode = ref(false);



const theme = readonly({
  isDarkMode,
  toggleTheme() {
    isDarkMode.value = !isDarkMode.value;

  },
});

function changeSection(newSectionName) {
  selectedSection.value = newSectionName; // Mettez à jour la section sélectionnée
  const baseTitle = 'Portfolio Florent VIEVILLE - A propos de moi';
  const newTitle = newSectionName === 'A propos' ? baseTitle : `${baseTitle} - ${newSectionName}`;
  document.title = newTitle; // Mettez à jour le titre de la page
}

</script>

<script>

export default {
  data() {
    return {
      isNext: true,
      theme: {
        isDarkMode: window.matchMedia('(prefers-color-scheme: dark)').matches, // Détecte le thème préféré
      },
      routesOrder: ['home', 'aboutMe', 'service', 'projet', 'contact'],
    };
  },

  mounted() {
    // Ajoutez un écouteur pour détecter les changements de préférences de thème
    window.matchMedia('(prefers-color-scheme: dark)').addListener(this.handleThemeChange);
  },
  methods: {
    toggleTheme() {
      this.theme.isDarkMode = !this.theme.isDarkMode;
    },
    handleThemeChange(e) {
      this.theme.isDarkMode = e.matches;
    },
    goNext() {
      this.isNext = true;
      const currentRouteName = this.$route.name;
      const currentIndex = this.routesOrder.indexOf(currentRouteName);
      const nextIndex = (currentIndex + 1) % this.routesOrder.length;
      const nextRouteName = this.routesOrder[nextIndex];
      this.$router.push({ name: nextRouteName });
    },
    goBack() {
      this.isNext = false;
      const currentRouteName = this.$route.name;
      const currentIndex = this.routesOrder.indexOf(currentRouteName);
      const prevIndex = (currentIndex - 1 + this.routesOrder.length) % this.routesOrder.length;
      const prevRouteName = this.routesOrder[prevIndex];
      this.$router.push({ name: prevRouteName });
    },
  },
};



</script>


<style>

/* arrow btn */

/* arrow css */

.arrow-light {
  fill: rgb(255, 255, 255); 
  stroke:rgb(39, 51, 52);
}

.arrow-dark:hover path {
  fill: rgb(5, 15, 198); 
  stroke:rgb(231, 232, 255);
  transform: fill 2s;
}


.arrow-light:hover path {
  fill: rgb(27, 177, 223);
  stroke:rgb(206, 206, 207);
  transform: fill 2s;
}

.slide-enter-from, .slide-reverse-leave-to {
  transform: translateX(100%);
}
.slide-enter-to, .slide-leave-from, .slide-reverse-enter-to, .slide-reverse-leave-from {
  transform: translateX(0);
}
.slide-leave-to, .slide-reverse-enter-from {
  transform: translateX(-100%);
}
.slide-enter-active, .slide-leave-active, .slide-reverse-enter-active, .slide-reverse-leave-active {
  transition: transform 0.75s;
}

</style>
