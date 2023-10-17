<template>
  <div :class="theme.isDarkMode ? 'backgroundDark ' : 'backgroundLight'" class="backgroundDefault d-flex flex-column">

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


<style>

#app{
  font-family: 'Montserrat', sans-serif;
  display: grid;
  place-items: center;
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
