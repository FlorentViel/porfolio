<template>
    <section id="about" class="container d-grid py-2">
     <div class="row align-self-center justify-content-center">
  
      <div id="card" class="col-12 col-md-10 gy-4 mb-5" @mousemove="handleCardEffect" @mouseleave="resetCardEffect">
        <!-- main-bloc -->
        <div>
          <h1 :class="theme.isDarkMode ? 'h1-dark' : 'h1-light'" class="m-4 pb-5 h1 text-center">&Agrave; propos de moi</h1>
        </div>
        <div :class="theme.isDarkMode ? 'main-bloc-dark' : 'main-bloc-light'" class="blocPresentation d-flex flex-column flex-md-row justify-content-evenly flex-wrap gap-5 col-12 text-center card-body py-5 text-style">
          <div class="col-lg-5 col-12 ">
            <h1 :class="theme.isDarkMode ? 'h1-dark' : 'h1-light'" class="card-title py-5 animate-text title h1 font-weight-bold" >Florent Vieville</h1>
            <div class="d-flex justify-content-center align-items-center">
              <img src="./../assets/images/pictures/photo-profil-removebg.png" class="img-fluid" alt="Photo de profil"/>
            </div>
          </div>

          <p :class="theme.isDarkMode ? 'text-color-dark' : 'text-color-light'" class="d-block d-lg-none px-5 lh-lg lh-sm  textIndent text-justify ">
            Bonjour ! Je m'appelle Florent, développeur web et webmobile freelance qui commence son activité. 
            J'étais été formé auprès de différent centre de formation comme Webforce 3 et AFCI 
            j'ai développé les outils nécessaires pour évoluer à mon compte et de continuer à développer mes compétences. 
            Je suis d'un naturel calme, à l'écoute et curieux et je m'oriente vers le développement de site pour les entreprises , 
            entrepreneurs ou indépendants qui aurait besoins de mettre en avant ses activités , produits et/ou services.
          </p>

          <p :class="theme.isDarkMode ? 'text-color-dark' : 'text-color-light'" class="col-5 	d-none d-lg-block  lh-lg lh-sm  textIndent text-justify " >
            Bonjour ! Je m'appelle Florent, développeur web et webmobile freelance qui commence son activité. 
            J'étais été formé auprès de différent centre de formation comme Webforce 3 et AFCI 
            j'ai développé les outils nécessaires pour évoluer à mon compte et de continuer à développer mes compétences. 
          </p>
          <p :class="theme.isDarkMode ? 'text-color-dark' : 'text-color-light'" class="lh-lg	d-none d-lg-block lh-lg  lh-sm px-5 textIndent text-justify ">Je suis d'un naturel calme, à l'écoute et curieux et je m'oriente vers le développement de site pour les entreprises , 
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

  
  
  #card {
    transition: 0.5s;
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
    background-color: #01ABD63E;
    border: 1px solid #91ebf9;
    transition: .5s ease;
    border-radius: 8px;
    padding: 10px 20px;
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
  
  
  