<template>
  <nav id="navBar" :class="theme.isDarkMode ? 'nav-dark navbar-dark' : 'nav-Light navbar-light'" class="navbar  navBarStyle navbar-expand-md  pe-3 py-2">
    <div class="container">
      <router-link :to="{ name: 'home' }" :class="['navbar-brand pb-sm-3 mt-sm-3', theme.isDarkMode ? 'navHomeDark' : 'navHomeLight', isNext ? 'next-link' : 'isNextAboutMe']" @click="changeTitle('Présentation' , 'next')">
        Portfolio Florent VIEVILLE
      </router-link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav mx-auto column-gap-3">
          <li class="nav-item text-center">
            <router-link :to="{ name: 'aboutMe' }" :class="['nav-link', theme.isDarkMode ? 'navTextDark' : 'navTextLight', isNext ? 'next-link' : '']" @click="changeTitle('&Agrave; propos de moi', 'next')">&Agrave; propos 
              <span :class="theme.isDarkMode ? 'menu-separator-dark' : 'menu-separator-light'"  class="menu-separator d-md-none d-sm-block mt-3"></span>
            </router-link>
          </li>
          <li class="nav-item text-center">
            <router-link :to="{ name: 'service' }" :class="['nav-link', theme.isDarkMode ? 'navTextDark' : 'navTextLight', isNext ? 'next-link' : '']" @click="changeTitle('Mes services', 'next')">Mes services
              <span :class="theme.isDarkMode ? 'menu-separator-dark' : 'menu-separator-light'"  class="menu-separator d-md-none d-sm-block mt-3"></span>
            </router-link>
          </li>
          <li class="nav-item text-center">
            <router-link :to="{ name: 'projet' }" :class="['nav-link', theme.isDarkMode ? 'navTextDark' : 'navTextLight', isNext ? 'next-link' : '']" @click="changeTitle('Mes projets')">Mes projets
              <span :class="theme.isDarkMode ? 'menu-separator-dark' : 'menu-separator-light'"  class="menu-separator d-md-none d-sm-block mt-3"></span>
            </router-link>
          </li>
          <li class="nav-item text-center">
            <router-link :to="{ name: 'contact' }" :class="['nav-link', theme.isDarkMode ? 'navTextDark' : 'navTextLight', isNext ? 'next-link' : '']" @click="changeTitle('Me contacter')">Me contacter</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>



<script>
import { mapState, mapMutations } from 'vuex';

export default {
  data() {
    return {
      transitionName: 'slide-left',
    };
  },
  
  props: ['theme'],
  computed: {
    ...mapState(['isNext']), // Map isNext state to a computed property
  },
  methods: {
    ...mapMutations(['setIsNext']), // Map setIsNext mutation to a method
    toggleThemeAndEmit() {
      this.theme.toggleTheme(); // Appel de la fonction pour basculer le thème
      this.$emit('toggleTheme'); // Émettez l'événement pour demander le changement de thème
      this.setIsNext(!this.theme.isDarkMode); // Utilisez la mutation pour changer la valeur de isNext
    },
    changeTitle(title, direction) {
      this.$store.commit('setTitle', title);
      this.transitionName = direction === 'next' ? 'slide-left' : 'slide-right';
    },
  },
  checkState() {
    console.log(this.$store.state.isNext);
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

/* toggle bouton */ 

.checkbox {
  opacity: 0;
  position: absolute;
}

.checkbox-label {
  width: 50px;
  height: 26px;
  border-radius: 50px;
  position: relative;
  padding: 5px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.checkbox-label-light {
  background-color: #005eff77;

}

.checkbox-label-dark {
  background-color: #0e236f77 ;

}

.fa-moon {color: #f1c40f;}

.fa-sun {color: #f39c12;}

.checkbox-label .ball {
  background-color: var(--white);
  width: 22px;
  height: 22px;
  position: absolute;
  left: 2px;
  top: 2px;
  border-radius: 50%;
  transition: transform 0.2s linear;
}

.checkbox:checked + .checkbox-label .ball {
  transform: translateX(24px);
}

/* séparator */

.menu-separator {
  height: 1px;
  width: auto;
  margin: 5px 0; /* Espacement vertical de la ligne de séparation */

}

.menu-separator-light {
  background-color: rgba(0, 0, 0, 0.5); /* Couleur de la ligne de séparation */

}

.menu-separator-dark {
  background-color: rgba(255, 255, 255, 0.5); /* Couleur de la ligne de séparation */

}


.slide-left-enter-active, .slide-right-leave-active {
  transition: all 0.3s ease;
}
.slide-left-leave-active, .slide-right-enter-active {
  transition: all 0.3s ease;
}
.slide-left-enter, .slide-left-leave-to /* .slide-left-leave-active below version 2.1.8 */ {
  transform: translateX(100%);
}
.slide-left-leave, .slide-left-enter-to /* .slide-left-enter-active below version 2.1.8 */ {
  transform: translateX(-100%);
}
.slide-right-enter, .slide-right-leave-to /* .slide-right-leave-active below version 2.1.8 */ {
  transform: translateX(-100%);
}
.slide-right-leave, .slide-right-enter-to /* .slide-right-enter-active below version 2.1.8 */ {
  transform: translateX(100%);
}


</style>
