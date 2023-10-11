<template>
  <nav class="d-flex justify-content-center pe-3 py-2 align-content-center">

    <div class="mb-3 justify-content-between">


      <div id="navBar" :class="theme.isDarkMode ? 'nav-dark' : 'nav-Light'" class=" d-flex align-items-center p-3">
  
        <div class="navItem m-1 mx-3">
          <router-link :to="{ name: 'home' }" ><button :class="theme.isDarkMode ? 'navTextDark' : 'navTextLight'" class="btn" @click="changeTitle('A propos de moi')">A propos de moi</button></router-link>
        </div>
        <div class="navItem m-1 mx-3">
          <router-link :to="{ name: 'service' }" ><button :class="theme.isDarkMode ? 'navTextDark' : 'navTextLight'" class="btn"  @click="changeTitle('Mes services')" >Mes services</button></router-link>
        </div>
        <div class="navItem m-1 mx-3">
          <router-link :to="{ name: 'service' }" ><button :class="theme.isDarkMode ? 'navTextDark ' : 'navTextLight '" class="btn"  @click="changeTitle('Mes services')" >Mes projets</button></router-link>
        </div>
        <div class="navItem m-1 mx-3">
          <router-link :to="{ name: 'service' }" ><button :class="theme.isDarkMode ? 'navTextDark ' : 'navTextLight '" class="btn"  @click="changeTitle('Mes services')" >Me contacter</button></router-link>
        </div>

        <div class="d-flex align-items-center">
        <input type="checkbox" class="checkbox" :class="theme.isDarkMode ? 'btn-dark' : 'btn-light'" id="checkbox"  @click="toggleThemeAndEmit">
        <label for="checkbox" class="checkbox-label" :class="theme.isDarkMode ? 'checkbox-label-dark' : 'checkbox-label-light'" id="checkbox" >
          <i class="fas fa-moon"></i>
          <i class="fas fa-sun"></i>
          <span class="ball"></span>
        </label>
      </div>

      </div>


      
    </div>



  </nav>
</template>


<script>
export default {
  props: ['theme'],
  methods: {
    toggleThemeAndEmit() {
      this.theme.toggleTheme(); // Appel de la fonction pour basculer le thème
      this.$emit('toggleTheme'); // Émettez l'événement pour demander le changement de thème
    },


  },
};
</script>

<script setup>

import { ref } from 'vue';

const selectedSection = ref('Accueil'); // Par défaut, afficher la section "Accueil"

function changeTitle(newSectionName) {
  const baseTitle = 'Portfolio Florent VIEVILLE';
  const newTitle = newSectionName === 'Accueil' ? baseTitle : `${baseTitle} - ${newSectionName}`;
  document.title = newTitle; // Mettez à jour le titre de la page
  selectedSection.value = newSectionName; // Mettez à jour la section sélectionnée
}
</script>

<style scoped>

</style>
