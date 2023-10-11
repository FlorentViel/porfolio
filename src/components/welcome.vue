<template>
  <section id="welcome" class="d-flex align-items-center align-content-center container my-auto position-relative justify-content-evenly flex-wrap">
    <div class="col-md-3 ">
      <!-- Image à gauche -->
      <img id="profil_picture" class="img-fluid" src="src/assets/photo_profil.png" alt="Photo de profil" />
    </div>

    <div class="col-md-7">
      <!-- Bloc de texte à droite -->
      <article id="spitch" :class="theme.isDarkMode ? 'welcome-dark' : 'welcome-light'" class="text-center">
        <h1 :class="theme.isDarkMode ? 'h1-dark' : 'h1-light'" class="title font-size-40 h1 py-3">Florent Vieville</h1>
        <h1 :class="theme.isDarkMode ? 'h2-dark' : 'h2-light'" class="py-3 h2">Développeur web et web mobile</h1>
        <p :class="theme.isDarkMode ? 'h2-dark' : 'h2-light'" class="text-style py-3 h5">
          Passionné par le web avec une expértise en <strong class="h5 text-style">front-end</strong> et <strong class="h5 text-style">back-end</strong>. 
        </p>

        <div class="d-flex justify-content-evenly py-4">

          <div :class="theme.isDarkMode ? 'navTextDark' : 'navTextLight'">
            <router-link :to="{ name: 'service' }" :class="theme.isDarkMode ? '' : ''"><button type="button" :class="theme.isDarkMode ? 'btn-dark' : 'btn-light'" class="btn" >Mes services</button></router-link>
        </div>

        <div :class="theme.isDarkMode ? 'navTextDark' : 'navTextLight'">
          <router-link :to="{ name: 'service' }" :class="theme.isDarkMode ? '' : ''"><button type="button" :class="theme.isDarkMode ? 'btn-dark' : 'btn-light'" class="btn" >Mes projets</button></router-link>
        </div>


        </div>


      </article>
    </div>
  </section>
</template>





<script>

import photo_profil from '@/assets/logo.svg';



export default {
  props: ['theme', 'selectedSection'],
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

/* welcom bloc css */

#welcome {
    margin-top: auto;
    margin-bottom: auto;
    position: relative;


}

#spitch {
    border-radius: 60px;
    position: relative;
    padding: 15px;
    height: max-content;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));

}

/* profil picture */

#profil_picture {
    border-radius: 233.847px;
    position: relative;
}



/* dark-mode-light-mod bloc */

.welcome-light{
    background-color: rgba(255, 255, 255, 33%);
}

.welcome-dark {
    background: rgba(128, 120, 120, 0.34)!important;
}


/* welcome.css */
.dark-theme-button {
    /* Styles pour le bouton en mode sombre */
    background-color: #333!important;
  }
  
  .light-theme-button {
    /* Styles pour le bouton en mode clair */
    background-color: #fff!important;
  }

#icon {
    border-radius: 233.847px;
    background: url(./photo_profil.svg), lightgray 50% / cover no-repeat;

}

.photo-Light {
    box-shadow: 0px 4px 4px 0px rgba(255, 255, 255, 0.25);
    transition: .5s ease;

}

.photo-dark {
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    transition: .5s ease;

}



.light-mode {
  background-color: #fff!important; /* Fond clair */
  color: #333!important; /* Texte sombre */
}

.dark-theme-button {
  /* Styles pour le bouton en mode sombre */
  background-color: #333!important;
}

.light-theme-button {
  /* Styles pour le bouton en mode clair */
  background-color: #fff!important;
}

.btn-dark {
  background-color: #4d6ae9;
  color: #1b172c!important;
  border: 1px solid #000000;
  transition: .5s ease;
  border-radius: 8px;
  padding: 10px 20px;
} 

.btn-light {
  background-color: #37a2ee85;
  color: #0e18da!important;
  border: 1px solid #91ebf9;
  transition: .5s ease;
  border-radius: 8px;
  padding: 10px 20px;
} 

.btn-dark:hover {
  background-color: #291fe2;
  color: #3609ff!important;
  border: 1px solid #ffffff;
  text-shadow: 0 0 5px #ffffff,
               0 0 10px #ffffff,
               0 0 15px #ffffff,
               0 0 20px #ffffff;
  box-shadow: 0 0 5px #0a41bf,
              0 0 10px #0a41bf,
              0 0 15px #0a41bf,
              0 0 20px #0a41bf;
  
} 

.btn-light:hover {
  background-color: #37A1EE ;
  border: 1px solid #1a1a1a;
  text-shadow: 0 0 5px #c5d9fa,
               0 0 10px #c5d9fa,
               0 0 15px #c5d9fa,
               0 0 20px #c5d9fa;
  box-shadow: 0 0 5px #8C8FDB ,
              0 0 10px #8C8FDB ,
              0 0 15px #8C8FDB ,
              0 0 20px #8C8FDB ;
  
} 
</style>


