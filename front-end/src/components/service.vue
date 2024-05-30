<template>
  <section id="service" key="service" class="container py-5">

    <!-- Title-->

    <h1 :class="theme.isDarkMode ? 'h1-dark' : 'h1-light'" class=" text-center pb-5 h1">Mes services</h1>


    <div class="py-2"  :class="theme.isDarkMode ? 'main-bloc-dark' : 'main-bloc-light'">

      <p :class="theme.isDarkMode ? 'text-color-dark' : 'text-color-light'">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Quisque interdum dui ac nisl congue vestibulum. Aliquam metus diam, 
      </p>


      <!-- Card container -->

      <div class="container">

        <!-- card-group -->

        <div class="card-group">

          <!-- Card -->
          <div class="card" 
            :class="theme.isDarkMode ? 'card-style-dark' : 'card-style-light'">
            <!--<TwicImg class="card-img-top" 
              src="avocado.jpg"
              ratio="3/4"
              placeholder="preview"
              focus="auto"
              alt="Avocado"
            />
            -->
            <img src="./../assets/images/pictures/site_vitrine_icon.jpg" class="card-img-top img-size" alt="Site internet">
              <div class="card-body">
                <h3 :class="theme.isDarkMode ? 'h2-dark' : 'h2-light'" class="card-title">Création de site internet</h3>
                <p :class="theme.isDarkMode ? 'text-color-dark' : 'text-color-light '" class="card-text">Conception complète de site vitrine, boutique en ligne.</p>
              </div>                
          </div>

          <div class="card" 
            :class="theme.isDarkMode ? 'card-style-dark' : 'card-style-light'">
            <!--<TwicImg class="card-img-top" 
              src="avocado.jpg"
              ratio="3/4"
              placeholder="preview"
              focus="auto"
              alt="Avocado"
            />
            -->
            <img src="./../assets/images/logos/logo-site/technologie.png" class="card-img-top img-size" alt="...">
              <div class="card-body">
                <h3 class="card-title">Site E-commerce</h3>
                <p :class="theme.isDarkMode ? 'text-color-dark' : 'text-color-light '" class="card-text">Lorem ipsumue interdum dui acam metus diam,</p>
              </div>                
          </div>

          <div class="card" 
            :class="theme.isDarkMode ? 'card-style-dark' : 'card-style-light'">
            <!--<TwicImg class="card-img-top" 
              src="avocado.jpg"
              ratio="3/4"
              placeholder="preview"
              focus="auto"
              alt="Avocado"
            />
            -->
            <img src="./../assets/images/logos/logo-site/technologie.png" class="card-img-top img-size" alt="...">
              <div class="card-body">
                <h3 :class="theme.isDarkMode ? 'h2-dark' : 'h2-light'" class="card-title">Site vitrine</h3>
                <p :class="theme.isDarkMode ? 'text-color-dark' : 'text-color-light '" class="card-text">Lorem ipsumue interdum dui acam metus diam,</p>
              </div>                
          </div>



          
        </div>
      </div>
    </div>
  </section>







</template>

<script>


export default {

    components: {
    
  },

  props: ['theme', 'changeSection'],




mounted() {
    // Listen to window resize events to detect screen size changes
    window.addEventListener('resize', this.handleResize);
  },

  methods: {
   
    toggleThemeAndEmit() {
      this.theme.toggleTheme(); // Appel de la fonction pour basculer le thème
      this.$emit('toggleTheme'); // Émettez l'événement pour demander le changement de thème
    },

      
    },


    
};
</script>

<style scoped>

/************************************************* Service css ***************************************************/


/* card css */


/* card group */

.card-group {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.card {
  border-radius: 0;
  transition: all 0.5s;
  cursor: pointer;
  min-height: 100%;
  margin: 1rem;
  max-width: 588px;

}

.card-title {
  font-size: 2.5rem;
  font-weight: bold;
}

.card-text {
  font-size: 1.5rem;
} 

.img-size {
  width: 100%;
  height: 100%;
  max-width: 288px;
  max-height: 224px;
  margin: auto;

}

.card-body {
  padding: 10px;
  text-align: center;
}

.card:hover {
  transform: scale(1.1);
}

.card-style-dark {
  background: var(--StartDarkGradient);
  color: #c8eef3;

}

.card-style-light {
  background: var(--EndLightGradient  );
  color: var(--bg-light-2);
}
 
.card-style-light .card-title {
  color: var(--bg-light-2);
}

/* slide css */

.slide {
    padding: 5px;
    min-height: max-content;
    transition: transform 0.5s ease-in, background-color 0.5s;
    cursor: default!important;
    height: 100%;

}

.slide p {
  cursor: default;

}

.slide-enter-active, .slide-leave-active {
  transition: all 0.5s;
  transform: translate(-100%);
  opacity: 0;
}

.slide-enter, .slide-leave-to {
  opacity: 1;
  transform: translate(0);
}

.slide-enter-active, .slide-leave-active {
  transition: opacity 0.5s, transform 0.5s;
}

.slide-enter-from, .slide-leave-to {
  opacity: 0;
  transform: translateX(100%);
}

.slide div {
    padding-top: 5px;
    padding-bottom: 5px;
    position: relative;
}

/* slide dark mode */

.slide-dark {
  background: #80787834;
}


.slide-dark:hover {
    background: #1e1b1b83;
   
}

/* slide light mode */

.slide-light {
  background: #0099ff34;
}

.slide-light:hover {
  background: #0099ff83;
}

/* animation slide */

/* Transition */

.hide-slide {
  display: none;
}




/* circle active  */
.circle-light {
  fill : #c8eef330; ;
}

.active-circle-dark {
  fill: #15151A; 
  
}


.active-circle-light {
  fill: #c8eef3; 
}


/* arrow css */

.arrow-light {
  fill: rgb(255, 255, 255); 
  stroke:rgb(39, 51, 52);
}

.arrow-dark:hover path {
  fill: rgb(5, 15, 198); 
  stroke:rgb(231, 232, 255);
  transform: fill 2s;
}


.arrow-light:hover path {
  fill: rgb(27, 177, 223);
  stroke:rgb(206, 206, 207);
  transform: fill 2s;
}


/* tablet format*/
@media (min-width: 577px) and (max-width: 991px) {
  .card-group {
    display: flex!important;
    align-items: center;
    flex-direction: column;
    margin: 2rem;
    gap: 2rem;
  }

  .card-title {
    font-size: 1.5rem;
  }

  .card {
    width: 100%;
    max-width: 100%!important;
    margin: auto;


  }
}

/* Media screen */

@media screen and (max-width: 600px) {

  .card-group {
    display: block;
  }

  .card {
    width: 100%;
    max-width: 100%!important;


  }
}

</style>