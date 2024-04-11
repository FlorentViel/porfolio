<template>
    <section id="projet" key="projet" class="container mt-5">
      <h1 :class="theme.isDarkMode ? 'h1-dark' : 'h1-light'" class="text-center title font-size-40 h1">Projet</h1>
  
      <div class="carousel">
        <div class="card my-5" v-for="(card, index) in cards" :key="index" :class="theme.isDarkMode ? 'cardDark' : 'cardLight'" :style="{transform: `translateX(${currentIndex * -200}%)`}">
          <img :src="card.image" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">{{ card.title }}</h5>
            <p class="card-text" :class="theme.isDarkMode ? 'text-color-dark' : 'text-color-light'">{{ card.text }}</p>
            <a href="#" class="btn"  :class="theme.isDarkMode ? 'btn-dark-mode navTextDark' : 'btn-light-mode navTextLight'">Go somewhere</a>
          </div>
        </div>
      </div>
  
      <div class="carousel-controls">
        <button :disabled="isPrevDisabled" @click="prevSlide">Précédent</button>
        <button :disabled="isNextDisabled" @click="nextSlide">Suivant</button>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    props: ['theme'],
    data() {
      return {
        currentIndex: 0,
        cards: [
          {
            image: 'front-end/src/assets/images/pictures/image-Page-Accueil.webp',
            title: 'Page d\'accueil personnalisé?',
            text: 'Projet personnel de création d\'une page d\'accueil personnalisé avec heure intégré.'
          },
          {
          image: 'front-end/src/assets/images/pictures/image-Page-Accueil.webp',
          title: 'Wesh alors',
          text: 'Projet personnel de création d\'une page d\'accueil personnalisé avec heure intégré.'
        },
        // Ajoutez d'autres cartes ici...
        {
          image: 'front-end/src/assets/images/pictures/image-Page-Accueil.webp',
          title: 'Titre de la nouvelle carte',
          text: 'Texte de la nouvelle carte.'
        },
        {
          image: 'front-end/src/assets/images/pictures/image-Page-Accueil.webp',
          title: 'Titre d\'une autre nouvelle carte',
          text: 'Texte d\'une autre nouvelle carte.'
        },       
        ]
      }
    },
    computed: {
    isNextDisabled() {
      return this.currentIndex === 1;
    },
    isPrevDisabled() {
      return this.currentIndex === 0;
    }
    },
    methods: {
      toggleThemeAndEmit() {
        this.theme.toggleTheme();
        this.$emit('toggleTheme');
      },
      nextSlide() {
      if (this.currentIndex < 1) {
        this.currentIndex++;
      } else {
        this.currentIndex = 0;
      }
    },
    prevSlide() {
      if (this.currentIndex > 0) {
        this.currentIndex--;
      } else {
        this.currentIndex = 1;
      }
    }
  },
  };
  </script>
  
  <style scoped>
  .carousel {
    display: flex;
    overflow: hidden;
    width: 100%;
  }
  
  .card {
    flex: 0 0 50%;
    max-width: 100%;
    transition: transform 0.5s ease-in-out;
  }
  
  .carousel-controls {
    display: flex;
    justify-content: center;
    gap: 1rem;
  }
  </style>
  