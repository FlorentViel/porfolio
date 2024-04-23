<template>
  <nav id="navBar"  :class="theme.isDarkMode ? 'dark-mode' : 'light-mode'"  class="navBar position-relative flex-wrap d-flex align-items-end">
            <div class="d-flex align-items-end flex-wrap flex-grow-1">
              <router-link class="navBar-item text-center" 
              v-for="(navItem, index) in navBar" 
              :key="index" 
              :to="{ name: navItem.route }"
              :class="{ 'navItem-active': $route.name === navItem.route }">
              {{ navItem.title }}
              <span class="close-navItem">x</span>
            </router-link>

            </div>


            <div class="d-flex text-center flex-column align-items-center m-auto">
                <span class="" :class="theme.isDarkMode ? 'text-white' : 'text-dark'">Mode sombre</span>
                <input type="checkbox" class="checkbox" :class="theme.isDarkMode ? '' : ''" id="checkbox" @click="toggleThemeAndEmit">
                <label for="checkbox" class="checkbox-label" :class="theme.isDarkMode ? 'checkbox-label-dark' : 'checkbox-label-light'">
                  <i class="fas fa-moon"></i>
                  <i class="fas fa-sun"></i>
                  <span class="ball"></span>
                </label>
              </div>


  </nav>
</template>



<script>

export default {

  data() {
    return {
      activenavItem: 0,
      navBar: [
        { title: 'Florent VIEVILLE', route: 'home', },
        { title: '\u00C0 propos', route: 'aboutMe'},
        { title: 'Mes service', route: 'service'},
        { title: 'Mes projets', route: 'projet'},
        { title: 'Contact', route: 'contact'},
        // Ajoutez autant d'onglets que vous le souhaitez
      ],
    };
  },
  
  props: ['theme'],
   
  methods: {
    toggleThemeAndEmit() {
      this.theme.toggleTheme(); // Appel de la fonction pour basculer le thème
      this.$emit('toggleTheme'); // Émettez l'événement pour demander le changement de thème
    },
    changeTitle(title, toRoute) {
  const fromRoute = this.$route.name;
  this.transitionName = this.getTransitionName(fromRoute, toRoute);

  this.$store.commit('setTitle', title);
},
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

#navBar.dark-mode a {
  box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
  backdrop-filter: blur( 4px );
  -webkit-backdrop-filter: blur( 4px );
}

#navBar.light-mode a {
  box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
backdrop-filter: blur( 4px );
-webkit-backdrop-filter: blur( 4px );
}

/* navBar link */


#navBar a{
 width: auto;
}



#navBar a {
  padding: 10px;
  cursor: pointer; 
  border-bottom: none;
  text-decoration: none; /* Ajouté pour supprimer le soulignement des liens */
}



#navBar.dark-mode a {
  padding: 10px;
  color: #fff;
  background-color: #001214;
}

#navBar.light-mode a {
  background-color: rgba(230,238,239,255);
  color: #000;
  
}

:is(#navBar.dark-mode .navBar-item:hover, .btn-dark-mode) {
  background-color: #11164a;
}

#navBar.dark-mode a{
  border-bottom: 1px solid var(--blue);
  transition: border-bottom 0.5s ease-in-out;
  opacity: 1;
}


#navBar.dark-mode .navItem-active {
  background: rgba(0,36,41);
  border: 1px solid var(--blue);
  border-bottom: none;
  border-radius: 5px 5px 0 0;
  transition: border-bottom 0.5s ease-in-out;

}

#navBar.light-mode a{
  border-bottom: 1px solid var(--bluelight);
  transition: border-bottom 0.5s ease-in-out;
}

#navBar.light-mode .navBar-item:hover {
  background-color: rgb(173,226,238);
}

#navBar.light-mode .navItem-active {
  background-color: #fff;
  border: 1px solid var(--bluelight);
  border-radius: 5px 5px 0 0;
  border-bottom: none;
  
}

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
  background-color: #dcfffc;
  transition: background-color 0.5s ease-in-out;


}

.checkbox-label-dark {
  background-color: #1f1f23 ;
  transition: background-color 0.5s ease-in-out;
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

@media(max-width: 984px) {

  #navBar a{
    width: 100%; 
  }

}

</style>
