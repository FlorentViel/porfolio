

<template>
  <section id="service" key="service" class="container mt-5">


    <!-- Title-->

    <div class="py-2">
      <h1 :class="theme.isDarkMode ? 'h1-dark' : 'h1-light'" class=" text-center title font-size-40 h1">Mes services</h1>
    </div>

    <div :class="theme.isDarkMode ? 'bloc-presentation-dark' : 'bloc-presentation-light'" class="blocPresentation p-5 my-5" >
      <p :class="theme.isDarkMode ? 'text-color-dark' : 'text-color-light'">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque interdum dui ac nisl congue vestibulum. Aliquam metus diam, ullamcorper sodales dui a, tincidunt ornare felis. Curabitur laoreet ut metus et vehicula. Pellentesque at orci iaculis, tincidunt odio non, ullamcorper erat. Phasellus eleifend non urna at tincidunt. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed ut leo vitae orci consequat venenatis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Quisque congue odio quis orci ullamcorper, sit amet dapibus dui eleifend. Nulla gravida hendrerit tortor. Nullam blandit pharetra ex id cursus. Duis in purus odio. Etiam tempus justo ligula, non lacinia erat imperdiet id. Phasellus at porta nunc, feugiat tristique diam. Duis porttitor velit lacus, a luctus felis dignissim nec.

          Praesent faucibus fermentum semper. Donec eget lacinia turpis. Quisque fringilla turpis lacus. Pellentesque risus orci, facilisis vitae placerat eget, pharetra ac nisi. Curabitur id porta ex. Donec ultrices pellentesque felis, quis dignissim dolor consequat in. Ut sed est eget enim imperdiet dapibus a vitae nibh. Integer elementum sapien eu dolor rhoncus viverra in et arcu. Nunc ut luctus eros, in pulvinar urna. Quisque ultrices turpis suscipit magna gravida posuere. Vivamus scelerisque mattis nunc, eu malesuada tellus aliquet in. Nunc consequat tortor maximus dapibus sagittis. Morbi fringilla odio congue, egestas quam a, euismod magna.</p>
    </div>

    <div></div>
        

  </section>







</template>

<script>

export default {

  props: ['theme', 'changeSection'],


  data() {
  return {

  };
},

mounted() {
    // Listen to window resize events to detect screen size changes
    window.addEventListener('resize', this.handleResize);
  },

  methods: {

    
   
      
    },

    toggleThemeAndEmit() {
      this.theme.toggleTheme(); // Appel de la fonction pour basculer le thème
      this.$emit('toggleTheme'); // Émettez l'événement pour demander le changement de thème
    },

    
};
</script>

<style scoped>

/************************************************* Service css ***************************************************/



</style>