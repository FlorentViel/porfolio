<template>
  <div :class="theme.isDarkMode ? 'backgroundImageDark ' : 'backgroundImageLight'" class="backgroundDefault d-flex flex-column" @toggle-theme-request="toggleTheme">

    <NavBar :theme="theme" :isNext="isNext" />
        
    <div class="d-flex justify-content-center mx-5">

      <router-view :theme="theme" :changeSection="changeSection" v-slot="{ Component }">
        <transition :name="transitionName" mode="out-in">
          <keep-alive>
            <component :is="Component" />
          </keep-alive>
        </transition>
      </router-view>

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
      theme: {
        isDarkMode: window.matchMedia('(prefers-color-scheme: dark)').matches, // Détecte le thème préféré
      },
      routesOrder: ['home', 'aboutMe', 'service', 'projet', 'contact'],
      transitionName: 'slide',
    };
  },
  watch: {
    '$route' (to, from) {
      this.transitionName = this.getTransitionName(from.name, to.name);
    }
  },

  mounted() {
    // Ajoutez un écouteur pour détecter les changements de préférences de thème
    window.matchMedia('(prefers-color-scheme: dark)').addListener(this.handleThemeChange);
  },
  methods: {
    getTransitionName(fromRoute, toRoute) {
  const fromIndex = this.routesOrder.indexOf(fromRoute);
  const toIndex = this.routesOrder.indexOf(toRoute);

  return fromIndex < toIndex ? 'slide' : 'slide-reverse';
},
    changeTitle(title, toRoute) {
  const fromRoute = this.$route.name;
  this.transitionName = this.getTransitionName(fromRoute, toRoute);

  this.$store.commit('setTitle', title);
},
    toggleTheme() {
      this.theme.isDarkMode = !this.theme.isDarkMode;
    },
    handleThemeChange(e) {
      this.theme.isDarkMode = e.matches;
    },

  },
};



</script>


<style>

/* background css */

.backgroundImageLight {
  background-image: url('/front-end/src/assets/images/pictures/dev_web_pc_light.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}
.backgroundImageDark {
  background-image: url('/front-end/src/assets/images/pictures/dev_web_pc_dark.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
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
