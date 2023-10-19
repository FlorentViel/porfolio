<template>
  <div :class="theme.isDarkMode ? 'backgroundDark ' : 'backgroundLight'" class="backgroundDefault d-flex flex-column" @toggle-theme-request="toggleTheme">

    <NavBar :theme="theme" />

    <!--<Welcome v-if="selectedSection === 'home'" :theme="theme" />  -->


    <router-view :theme="theme" :changeSection="changeSection" v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>

    <Footer :theme="theme" />





  </div>
</template>



<script setup>

import NavBar from '@/components/NavBar.vue';
import Footer from '@/components/footer.vue';
import { ref, readonly } from 'vue';

// Homepage

const pageTitle = ref('Portfolio Florent VIEVILLE'); 
const selectedSection = ref('A propos'); // Par défaut, afficher la section "Accueil"


const isDarkMode = ref(true);



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
  },
};
</script>


<style>

#app{
  font-family: 'Montserrat', sans-serif;
  box-sizing: border-box;
  overflow-x: hidden;
  perspective: 1000px;

}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s; /* Durée de la transition en secondes */
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}



</style>
