<template>
  <section id="welcome" class="section container py-5">
   <div class="d-flex row align-content-center position-relative justify-content-evenly flex-wrap my-auto position-relative">
    <div class="col-6 col-md-3 align-self-center">
      <!-- Profil-picture -->
      <img id="profil_picture" :class="theme.isDarkMode ? 'photo-dark' : 'photo-light'" class="img-fluid m-3" src="/front-end/src/assets/images/pictures/photo_profil.png" alt="Photo de profil" />    </div>




      <!-- main-bloc -->

    <div id="card" class="my-3 col-12 col-md-6 text-center card-body p-4" @mousemove="handleCardEffect" @mouseleave="resetCardEffect">
      <h1 :class="theme.isDarkMode ? 'h1-dark' : 'h1-light'" class="card-title py-3 title h1">Florent Vieville</h1>
      <h1 :class="theme.isDarkMode ? 'h2-dark' : 'h2-light'" class="card-title py-3 ">Développeur web et web mobile</h1>
      <p :class="theme.isDarkMode ? 'text-color-dark' : 'text-color-light'" class="text-warpcard-text text-style py-3 " >
        Passionné par le web avec une expértise en <strong class="text-style ">front-end</strong> et <strong class="text-style">back-end</strong>. 
      </p>
      <div class="d-flex justify-content-evenly py-4">
        <div>
          <router-link :to="{ name: 'aboutMe' }" :class="theme.isDarkMode ? '' : ''"><button type="button" :class="theme.isDarkMode ? 'btn-dark-mode navTextDark' : 'btn-light-mode navTextLight'" class="btn" >À propos de moi</button></router-link>
        </div>
        <div>
          <router-link :to="{ name: 'service' }" :class="theme.isDarkMode ? '' : ''"><button type="button" :class="theme.isDarkMode ? 'btn-dark-mode navTextDark' : 'btn-light-mode navTextLight'" class="btn" >Mes services</button></router-link>
        </div>
      </div>
    </div>
  </div>
  
  </section>
</template>





<script>


export default {
  props: ['theme', 'selectedSection'],
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



/* profil picture */

#profil_picture {
    border-radius: 233.847px;
    position: relative;


}

.photo-light {
    filter: drop-shadow(5px 10px 5px rgb(255, 255, 255));
    transition: .5s ease;

}

.photo-dark {
  filter: drop-shadow(5px 10px 5px rgba(0, 0, 0, 0.25));
    transition: .5s ease;

}

#card {
  transition: 0.5s;
}

</style>


