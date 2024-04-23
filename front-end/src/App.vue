<template>
  <div :class="[theme.isDarkMode ? 'backgroundImageDark' : 'backgroundImageLight', $route.name === 'privacyPolicy' ? (theme.isDarkMode ? 'privacyPolicyBackgroundDark' : 'privacyPolicyBackgroundLight') : 'backgroundDefault']" class="d-flex flex-column" @toggle-theme-request="toggleTheme">
        
    <div id="#main-page" class="d-flex content justify-content-center mx-md-5 mx-0">
      <div :class="theme.isDarkMode ? 'computer-dark' : 'computer-light'" class="computer">
        <div :class="theme.isDarkMode ? 'screen-dark' : 'screen-light'" class="screen">
          <NavBar :theme="theme" :selectedSection="selectedSection" @toggle-theme-request="toggleTheme" />

          <router-view :theme="theme" :changeSection="changeSection" v-slot="{ Component }">
            <transition :name="fade" mode="out-in" appear>
                <component :is="Component" />
            </transition>
          </router-view>
          <Footer :theme="theme" />
        </div>
      </div>
    </div>

  </div>
</template>



<script setup>

import NavBar from './components/navBar.vue';
import Footer from './components/footer.vue';
import { ref, readonly } from 'vue';

// Homepage

const pageTitle = ref('Portfolio Florent VIEVILLE'); 
const selectedSection = ref('A propos'); // Par défaut, afficher la section "Accueil"
const fade = 'fade';



const isDarkMode = ref(false);



const theme = readonly({
  isDarkMode,
  toggleTheme() {
    isDarkMode.value = !isDarkMode.value;

  },
});

function changeSection(newSectionName) {
  selectedSection.value = newSectionName; // Mettez à jour la section sélectionnée
  const baseTitle = 'Florent VIEVILLE - A propos de moi';
  const newTitle = newSectionName === 'A propos' ? baseTitle : `${baseTitle} - ${newSectionName}`;
  document.title = newTitle; // Mettez à jour le titre de la page
}

</script>

<script>

export default {
  data() {
    return {
      activeTab: 0,
      tabs: [
        { title: 'Florent VIEVILLE', route: 'home', },
        { title: 'Section 2', route: 'aboutMe'},
        { title: 'Mes service', route: 'service'},
        { title: 'Mes projets', route: 'projet'},
        { title: 'Contact', route: 'contact'},
        // Ajoutez autant d'onglets que vous le souhaitez
      ],
      theme: {
        isDarkMode: window.matchMedia('(prefers-color-scheme: dark)').matches, // Détecte le thème préféré
      },

    };
  },
  watch: {
    activeTab(newActiveTab) {
      this.changeSection(this.tabs[newActiveTab].title);
    },
  },
  mounted() {
    // Ajoutez un écouteur pour détecter les changements de préférences de thème
    window.matchMedia('(prefers-color-scheme: dark)').addListener(this.handleThemeChange);
  },
  methods: {
    changeTitle(title) {
      document.title = title;
},
    toggleTheme() {
      this.theme.isDarkMode = !this.theme.isDarkMode;
    },
    handleThemeChange(e) {
      this.theme.isDarkMode = e.matches;
    },

  },
};



</script>

<style scoped>


.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>

<style>

/* main */

/* computer css */

.computer {
  width: 80%;
  margin: 5% auto;
  border-radius: 15px;
  padding: 20px;
  position: relative;
}

.computer-light {
  background: var(--bluelight);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  transition: background-color 0.5s ease-in-out;
}

.computer-dark {
  background: var(--blue);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  transition: background-color 0.5s ease-in-out;
}

.computer::before {
  content: "";
  position: absolute;
  top: -30px;
  left: 50%;
  transform: translateX(-50%);
  width: 0;
  height: 0;
  border-left: 20px solid transparent;
  border-right: 20px solid transparent;
}

.computer-dark::before {
  border-bottom: 30px solid #131829;

}

.computer-light::before {
  border-bottom: 30px solid #fff;

}

.screen {
  min-height: 500px; /* change 'height' to 'min-height' */
  border-radius: 10px;
  padding: 20px;
  /* autres styles de l'écran */
}

.screen-light {
  background: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  transition: background-color 0.5s ease-in-out;

}

.screen-dark {
  background: rgba(0,36,41);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  transition: background-color 0.5s ease-in-out;
}

body {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.content {
  flex: 1 0 auto;
}


footer {
  flex-shrink: 0;
}

/* background css */

/* background sptich text */

.blocPresentation {
  border-radius: 1.5rem;
  position: relative;
  height: max-content;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));

}  

  /*aboutme blocbackground */

.bloc-presentation-light{
  background-color: rgb(255, 255, 255);
  border: 1px solid rgba(69, 144, 255, 0.833);

}

.bloc-presentation-dark {
  background: rgb(40, 38, 38);
  border: 1px solid rgba(29, 29, 30, 0.833);
}




@media screen and (max-width: 600px) {
  #main-page {
    margin-left: 0 !important;
    margin-right: 0 !important;
    width: 100vw!important;

  }
  .computer {
  width: 100%;
  margin: 0 auto;
}

.computer-light::before {
  border-bottom: none
}

.backgroundImageLight {
  background-color: #fff;
}
.backgroundImageDark {
  background-color: #121212;
}
}


</style>
