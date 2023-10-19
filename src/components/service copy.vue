

<template>
  <section id="service" key="service">

    <h1 class="text-center">Mon savoir faire</h1>

<div id="slider" class="container carousel d-flex justify-content-center">

  <button class="btn prev-button" @click="prevSlide">
    <svg v-if="currentIndex === 0" xmlns="http://www.w3.org/2000/svg" width="47" height="66" viewBox="0 0 47 66" fill="none">
      <path d="M36.3622 1.99355C36.7338 1.6622 37.113 1.33101 37.5 1L36.3622 1.99355C10.3479 25.1943 22.0435 49.14 33.7649 61.0805L37.5 64.5C36.2859 63.5095 35.0252 62.3644 33.7649 61.0805L2 32L36.3622 1.99355Z" fill="#8E8E8E"/>
      <path d="M37.5 1C7.1 27 24.8333 54.1667 37.5 64.5L2 32L37.5 1Z" stroke="#FCFCFC" stroke-width="2"/>
    </svg>
    <svg v-if="currentIndex > 0 " xmlns="http://www.w3.org/2000/svg" width="47" height="66" viewBox="0 0 47 66" fill="none">
      <path d="M36.3622 1.99355C36.7338 1.6622 37.113 1.33101 37.5 1L36.3622 1.99355C10.3479 25.1943 22.0435 49.14 33.7649 61.0805L37.5 64.5C36.2859 63.5095 35.0252 62.3644 33.7649 61.0805L2 32L36.3622 1.99355Z" fill="black"/>
      <path d="M37.5 1C7.1 27 24.8333 54.1667 37.5 64.5L2 32L37.5 1Z" stroke="#5D11FF" stroke-width="2"/>
    </svg>
  </button>

      <div v-if="currentIndex === 0"  class="slide col-sm col-5 mx-1 d-block text-center slide-transition" id="slide1">
        <h2 :class="theme.isDarkMode ? 'h2-dark' : 'navTextLight '">Liste de services</h2>
        <h3 :class="theme.isDarkMode ? 'text-style-light ' : 'navTextLight '">Site vitrine</h3>
        <p :class="theme.isDarkMode ? 'text-style-light' : 'navTextLight '">Creation de site vitrine dynamique et interative permettant de mettre en avant vos produits, savoir faire ou votre entreprise.</p>
        <h3 :class="theme.isDarkMode ? 'text-style-light' : 'navTextLight '">Maquettage web</h3>
        <p :class="theme.isDarkMode ? 'text-style-light ' : 'navTextLight '">Création de maquette interactive et dynamique pour votre site internet</p>
        <h3 :class="theme.isDarkMode ? 'text-style-light' : 'navTextLight '">Base de données</h3>
        <p :class="theme.isDarkMode ? 'text-style-light' : 'navTextLight '">Conception de base de données , utilisation d’outils SQL et gestion de données.</p>
        <h3 :class="theme.isDarkMode ? 'text-style-light' : 'navTextLight '">Fonctionnalité web</h3>
        <p :class="theme.isDarkMode ? 'text-style-light' : 'navTextLight '">Ajout de fonctionnalité comme espace contact, espace connexion, espace administrateur. Création de fichier pdf.
        </p>
      </div>
    
    <div v-if="currentIndex === 1 || currentIndex === 0"  class="slide col-sm col-5" id="slide2">
    <h3 class="text-center">Langages et outils</h3>
    <h3 class="text-center">Site vitrine</h3>
    <div class="d-flex align-items-center">
      <svg width="79" height="69">
        <image xlink:href="@/assets/HTML-5-logo.svg" width="79" height="69" />
      </svg>
      <p class="m-auto">HTML</p>
    </div>
    <div class="d-flex align-items-center">
      <svg width="79" height="69">
        <image xlink:href="@/assets/css-logo.svg" width="79" height="69" />
      </svg>
      <p class="m-auto">CSS</p>
    </div>
    <div class="d-flex align-items-center">
      <svg width="69" height="69">
        <image xlink:href="@/assets/Bootstrap_logo.svg" width="69" height="69" />
      </svg>
      <p class="m-auto">Bootstrap</p>
    </div>
    <div class="d-flex align-items-center">
      <svg width="69" height="69">
        <image xlink:href="@/assets/javascript-logo.svg" width="69" height="69" />
      </svg>
      <p class="m-auto">Javascript / Jquery</p>
    </div>
    <div class="d-flex align-items-center">
      <svg width="69" height="69">
        <image xlink:href="@/assets/logo.svg" width="69" height="69" />
      </svg>
      <p class="m-auto">Vue.js</p>
    </div>
  </div>
  
  <div v-if="currentIndex === 1 || currentIndex === 2" class="col-sm slide col-5" id="slide3">
    <h3>Langages et outils</h3>
    <h3>Site vitrine</h3>
    <div>
      <svg width="79" height="69">
        <image xlink:href="@/assets/HTML-5-logo.svg" width="79" height="69" />
      </svg>
      <span>HTML</span>
    </div>
    <div>
      <svg width="79" height="69">
        <image xlink:href="@/assets/css-logo.svg" width="79" height="69" />
      </svg>
      <span>CSS</span>
    </div>
    <div>
      <svg width="69" height="69">
        <image xlink:href="@/assets/Bootstrap_logo.svg" width="69" height="69" />
      </svg>
      <span>Bootstrap</span>
    </div>
    <div>
      <svg width="69" height="69">
        <image xlink:href="@/assets/javascript-logo.svg" width="69" height="69" />
      </svg>
      <span>Javascript / Jquery</span>
    </div>
    <div>
      <svg width="69" height="69">
        <image xlink:href="@/assets/logo.svg" width="69" height="69" />
      </svg>
      <span>Vue.js</span>
    </div>
  </div>
  <div v-if="currentIndex === 2 || currentIndex === 3"  class="slide col-5 " id="slide4">
    <h3>Langages et outils</h3>
    <h3>Site vitrine</h3>
    <div>
      <svg width="79" height="69">
        <image xlink:href="@/assets/HTML-5-logo.svg" width="79" height="69" />
      </svg>
      <span>HTML</span>
    </div>
    <div>
      <svg width="79" height="69">
        <image xlink:href="@/assets/css-logo.svg" width="79" height="69" />
      </svg>
      <span>CSS</span>
    </div>
    <div>
      <svg width="69" height="69">
        <image xlink:href="@/assets/Bootstrap_logo.svg" width="69" height="69" />
      </svg>
      <span>Bootstrap</span>
    </div>
    <div>
      <svg width="69" height="69">
        <image xlink:href="@/assets/javascript-logo.svg" width="69" height="69" />
      </svg>
      <span>Javascript / Jquery</span>
    </div>
    <div>
      <svg width="69" height="69">
        <image xlink:href="@/assets/logo.svg" width="69" height="69" />
      </svg>
      <span>Vue.js</span>
    </div>
  </div>


 

  <button class="btn next-button" @click="nextSlide" >
    <svg v-if="currentIndex >= 0 && currentIndex < 2" xmlns="http://www.w3.org/2000/svg" width="39" height="66" viewBox="0 0 39 66" fill="none">
        <path d="M2.13777 63.5065C1.76624 63.8378 1.38702 64.169 1 64.5L2.13777 63.5065C28.1521 40.3057 16.4565 16.36 4.73512 4.41948L1 1C2.21411 1.99046 3.47476 3.13556 4.73512 4.41948L36.5 33.5L2.13777 63.5065Z" fill="black"/>
        <path d="M1 64.5C31.4 38.5 13.6667 11.3333 1 1L36.5 33.5L1 64.5Z" stroke="#5D11FF" stroke-width="2"/>
    </svg>
    <svg v-if="currentIndex === 2 || currentIndex === 3" xmlns="http://www.w3.org/2000/svg" width="39" height="66" viewBox="0 0 39 66" fill="none">
    <path d="M2.13777 63.5065C1.76624 63.8378 1.38702 64.169 1 64.5L2.13777 63.5065C28.1521 40.3057 16.4565 16.36 4.73512 4.41948L1 1C2.21411 1.99046 3.47476 3.13556 4.73512 4.41948L36.5 33.5L2.13777 63.5065Z" fill="#8E8E8E"/>
    <path d="M1 64.5C31.4 38.5 13.6667 11.3333 1 1L36.5 33.5L1 64.5Z" stroke="#FCFCFC" stroke-width="2"/>
  </svg>
  </button>
</div>

<div class="m-auto">
  <ul class="d-flex list-unstyled m-1">
  <li class="mx-2">
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
      <circle cx="10" cy="10" r="10" :class="{ 'active-circle': currentIndex === 0 }" fill="#15151A30"/>
    </svg>
  </li>
  <li class="mx-2">
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
      <circle cx="10" cy="10" r="10" :class="{ 'active-circle': currentIndex === 1 }" fill="#15151A30"/>
    </svg>
  </li>
  <li class="mx-2">
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
      <circle cx="10" cy="10" r="10" :class="{ 'active-circle': currentIndex === 2 }" fill="#15151A30"/>
    </svg>
  </li>
</ul>
</div>


  </section>







</template>

<script>

export default {

  props: ['theme', 'changeSection'],


  data() {
  return {
    currentIndex: 0,
    slides: [
      
    ]
  };
},

  methods: {
  prevSlide() {



      if(this.currentIndex >=1){
        this.currentIndex -= 1;

        console.log(this.currentIndex);

      }


    },
  nextSlide() {



      if(this.currentIndex <2) {

        this.currentIndex += 1;




      }



    },

    toggleThemeAndEmit() {
      this.theme.toggleTheme(); // Appel de la fonction pour basculer le thème
      this.$emit('toggleTheme'); // Émettez l'événement pour demander le changement de thème
    },


},

};
</script>

<style scoped>

/************************************************* Service css ***************************************************/

body {
    overflow-x: hidden;
}

#slider {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: center;

}

.slide {
    background: #80787834;
    padding: 5px;
    min-height: max-content;
    height: 490px;
    transition: transform 0.5s ease-in; /* Ajoutez une transition */
}


.slide div {
    padding-top: 5px;
    padding-bottom: 5px;
}

/* animation slide */

/* Transition */


.slide-transition-enter, .slide-transition-leave-to {
  transform: translateX(100%); /* Déplacez la diapositive depuis la droite (en dehors de l'écran) */
}

.slide-transition-enter-reverse, .slide-transition-leave-to-reverse {
  transform: translateX(-100%); /* Déplacez la diapositive depuis la gauche (en dehors de l'écran) */
}


/* Définissez vos keyframes d'animation */
@keyframes my-keyframes-animation {
  from {
    transform: translateX(-0%);
  }
  to {
    transform: translateX(100%);
  }
}



/* circle active  */

.active-circle {
  fill: #15151A; 
}


</style>