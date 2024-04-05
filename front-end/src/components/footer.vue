<template class=" ">

    <footer id="footerBar" :class="theme.isDarkMode ? 'nav-dark' : 'nav-Light'" class="footer d-flex flex-wrap justify-content-between text-center m-auto px-5 align-items-center navBarStyle mt-auto py-3 text-center">
    <div class="align-self-center" style="text-align: center;">
      <small class="style-text" >
        <router-link :class="theme.isDarkMode ? 'footerTextDark' : 'footerTextLight'" to="/privacyPolicy">Politique de confidentialité</router-link>
      </small> 
    </div> 
    <div class="text-end align-self-center">
      <small class="style-text" :class="theme.isDarkMode ? 'text-color-dark' : 'text-color-light'">
        &copy; Florent Vieville 
      </small>
      <small class="style-text" :class="theme.isDarkMode ? 'text-color-dark' : 'text-color-light'">2023</small>
      <br>
      <small class="style-text" :class="theme.isDarkMode ? 'text-color-dark' : 'text-color-light'">Tous droits réservés</small>
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
  
  </script>
  
  <style scoped>
  

  #footerBar  {
    width: 100% ;
    height: auto;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    bottom: 0;
    background-size: 100vw;
    position: static;

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
  