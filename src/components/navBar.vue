<template>

  <nav id="navBar" :class="theme.isDarkMode ? 'nav-dark' : 'nav-Light'" class="navbar navBarStyle navbar-expand-md  pe-3 py-2">
    <div class="container">
      <router-link :to="{ name: 'home' }" :class="theme.isDarkMode ? 'navHomeDark' : 'navHomeLight'" class="navbar-brand" @click="changeTitle('&Agrave; propos de moi')">
        Portfolio Florent VIEVILLE
      </router-link>

      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav mx-auto">
          <li class="nav-item">
            <router-link :to="{ name: 'aboutMe' }" :class="theme.isDarkMode ? 'navTextDark' : 'navTextLight'" class="nav-link" @click="changeTitle('&Agrave; propos de moi')">&Agrave; propos de moi </router-link>
          </li>
          <li class="nav-item">
            <router-link :to="{ name: 'service' }" :class="theme.isDarkMode ? 'navTextDark' : 'navTextLight'" class="nav-link" @click="changeTitle('Mes services')">Mes services</router-link>
          </li>
          <li class="nav-item">
            <router-link :to="{ name: 'projet' }" :class="theme.isDarkMode ? 'navTextDark' : 'navTextLight'" class="nav-link" @click="changeTitle('Mes projets')">Mes projets</router-link>
          </li>
          <li class="nav-item">
            <router-link :to="{ name: 'contact' }" :class="theme.isDarkMode ? 'navTextDark' : 'navTextLight'" class="nav-link" @click="changeTitle('Me contacter')">Me contacter</router-link>
          </li>
        </ul>
      </div>

      <div class="d-flex align-items-center">
        <input type="checkbox" class="checkbox" :class="theme.isDarkMode ? 'btn-dark' : 'btn-light'" id="checkbox" @click="toggleThemeAndEmit">
        <label for="checkbox" class="checkbox-label" :class="theme.isDarkMode ? 'checkbox-label-dark' : 'checkbox-label-light'">
          <i class="fas fa-moon"></i>
          <i class="fas fa-sun"></i>
          <span class="ball"></span>
        </label>
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
