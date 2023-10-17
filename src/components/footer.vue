<template class=" ">

    <footer id="footerBar" :class="theme.isDarkMode ? 'nav-dark' : 'nav-Light'" class="footer mt-auto py-3 text-center">
    <div class="container" :class="theme.isDarkMode ? 'textDark' : 'textLight'">
      <p class="mb-0">
        &copy; Portfolio produit sans template avec Vue.js, CSS et Bootstrap
      </p>
    </div>

  </footer>

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
  

  #footerBar  {
    width: 100% ;
    height: auto;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    bottom: 0;
    background-size: 100vw;

}




#navBar .navItem    {
  text-align: center!important;
  font-family: 'Montserrat', sans-serif!important;
  font-size: 24px!important;
  font-style: normal!important;
  font-weight: 400!important;
  line-height: normal!important;
  text-decoration: none;
 
}

  </style>
  