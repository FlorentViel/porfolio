<template>
    <section id="about" class="container d-grid py-2 my-5">
     <div class="row align-self-center justify-content-center">
  
      <div id="card" class="col-12 col-md-8 gy-4 mb-5" @mousemove="handleCardEffect" @mouseleave="resetCardEffect">
        <!-- main-bloc -->
        <div>
          <h1 :class="theme.isDarkMode ? 'h1-dark' : 'h1-light'" class="card-title m-4 pb-5 title h1 text-center">A propos de moi</h1>
        </div>
        <div id="spitch"  :class="theme.isDarkMode ? 'welcome-dark' : 'welcome-light'" class="col-12 text-center card-body p-5 text-style">
          <p :class="theme.isDarkMode ? 'text-color-dark' : 'text-color-light'" class=" text-warpcard-text p-3 lh-lg lh-sm textIndent text-justify" >
            Bonjour ! Je m'appelle Florent, développeur web et webmobile freelance qui commence son activité. 
            J'étais été formé auprès de différent centre de formation comme Webforce 3 et AFCI et 
            j'ai développé les outils nécessaires pour évoluer à mon compte et de continuer à développer mes compétences. 
            Je suis d'un naturel calme, à l'écoute et curieux et je m'oriente vers le développement de site pour les entreprises , 
            entrepreneurs ou indépendants qui aurait besoins de mettre en avant ses activités , produits et/ou services.
          </p>
        </div>
      </div>
  
     </div>
    
    </section>
  </template>
  
  
  
  
  
  <script>
  
    

  export default {
    props: ['theme'],
    methods: {
      toggleThemeAndEmit() {
        this.theme.toggleTheme(); // Appel de la fonction pour basculer le thème
        this.$emit('toggleTheme'); // Émettez l'événement pour demander le changement de thème
      },
      // Nouvelle méthode pour gérer l'effet de la carte
      handleCardEffect(event) {
  
        const card = document.getElementById("card");
  
        // Calcul de la largeur en pourcentage en fonction de col-7 (58.333333%)
        const containerWidth = card.parentElement.offsetWidth;
        const cardWidth = (58.333333 / 100) * containerWidth;
        const degIncrement = 4;
  
        const getRotateDeg = (input) => {
          if (input < cardWidth * 0.33) {
            return `-${degIncrement * 3}deg`;
          } else if (input >= cardWidth * 0.33 && input < cardWidth * 0.66) {
            return `-${degIncrement}deg`;
          } else if (input >= cardWidth * 0.66 && input < cardWidth * 0.5) {
            return "0deg";
          } else if (input >= cardWidth * 0.5 && input < cardWidth * 0.33) {
            return `${degIncrement}deg`;
          } else {
            return `${degIncrement * 3}deg`;
          }
        };
  
        const onMouseMove = (event) => {
  
          const rotateX = getRotateDeg(event.clientY - card.getBoundingClientRect().top);
          const rotateY = getRotateDeg(event.clientX - card.getBoundingClientRect().left);
  
          card.style.transform = `rotateX(${rotateX}) rotateY(${rotateY})`;
        };
  
        const onMouseLeave = () => {
          card.style.transform = `none`;
        };
  
        // Écoutez l'événement de la souris
        card.addEventListener("mousemove", onMouseMove);
      },
  
      resetCardEffect() {
        const card = document.getElementById("card");
        card.style.transform = 'none';
      },
    },
    // Utilisez le hook `mounted` pour ajouter l'écouteur d'événement une fois que le composant est monté.
    mounted() {
      const card = document.getElementById("card");
      card.addEventListener("mousemove", this.handleCardEffect);
      card.addEventListener("mouseleave", this.handleCardEffect);
    },
  };
  
  </script>
  
  <script setup>
  </script>
  <style scoped>
  
  /* welcom bloc css */
  
  #about {
      margin-top: auto;
      margin-bottom: auto;
      position: relative;
  
  
  }
  .textIndent {
    text-indent: 20px;
  }

  
  #spitch {
      border-radius: 1.5rem;
      position: relative;
      height: max-content;
      filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  
  }  
  
  /* dark-mode-light-mod bloc */
  
  .welcome-light{
      background-color: rgba(255, 255, 255, 33%);
      box-shadow: 8px 8px 8px var(--white);
  }
  
  .welcome-dark {
      background: rgba(128, 120, 120, 0.34)!important;
      box-shadow: 8px 8px 8px var(--black);
  }
  
  #card {
    transition: 0.5s;
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
    box-shadow: 0 0 5px #172b59,
                0 0 10px #172b59,
                0 0 15px #172b59,
                0 0 20px #172b59;
    
  } 
  
  .btn-light:hover {
    background-color: #37A1EE ;
    border: 1px solid #1a1a1a;
    text-shadow: 0 0 5px #c5d9fa,
                 0 0 10px #c5d9fa,
                 0 0 15px #c5d9fa,
                 0 0 20px #c5d9fa;
    box-shadow: 0 0 5px #e7edff ,
                0 0 10px #e7edff ,
                0 0 15px #e7edff ,
                0 0 20px #e7edff ;
    
  } 
  </style>
  
  
  