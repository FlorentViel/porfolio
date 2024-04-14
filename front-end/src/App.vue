<template>
  <div :class="[theme.isDarkMode ? 'backgroundImageDark' : 'backgroundImageLight', $route.name === 'privacyPolicy' ? (theme.isDarkMode ? 'privacyPolicyBackgroundDark' : 'privacyPolicyBackgroundLight') : 'backgroundDefault']" class="d-flex flex-column" @toggle-theme-request="toggleTheme">
    <NavBar :theme="theme"/>
        
    <div class="d-flex content justify-content-center mx-5">
      <div :class="theme.isDarkMode ? 'computer-dark' : 'computer-light'" class="computer">
        <div :class="theme.isDarkMode ? 'screen-dark' : 'screen-light'" class="screen">
          <div :class="theme.isDarkMode ? 'tabs' : 'tabs-light' "  class="tabs">
            <div 
            v-for="(tab, index) in tabs" 
      :key="index" 
      :class="{ 'tab-active': $route.name === tab.route }"
    >
              {{ tab.title }}
              <span class="close-tab">x</span>
            </div>
          </div>
          <router-view :theme="theme" :changeSection="changeSection" v-slot="{ Component }">
            <transition :name="fade" mode="out-in" appear>
                <component :is="Component" />
            </transition>
          </router-view>
        </div>
      </div>
    </div>

    <Footer :theme="theme" />
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
        { title: 'Florent VIEVILLE', route: 'home'},
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

.tabs {
  display: flex;
  border-bottom: 1px solid var(--yellow);
}

.tabs-light {
  border-bottom: 1px solid var(--bluelight);

}

.tabs div {
  padding: 10px;
  cursor: default; 
  color: #fff;
  border-bottom: none;
  background-color: #001214;
  border-radius: 5px 5px 0 0;
}

.tabs-light div {
  background-color: rgba(242,247,247);
  color: #000;
}

.tabs .tab-active {
  background-color: #3f4a11;
  border: 1px solid var(--yellow);
  border-bottom: none!important;

}

.tabs-light .tab-active {
  background-color: rgb(173,226,238);
  border: 1px solid var(--bluelight);
  border-bottom: none!important;

}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>

<style>

/* test css */

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
  background: #ffea00;
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
  border-bottom: 30px solid #555;
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
  background: rgba(0,18,20,255);
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



/* privacy Background*/

.privacyPolicyBackgroundLight {
  background-image: none !important;
  background-color: azure;
  transition: background-color 0.5s ease-in-out;

}

.privacyPolicyBackgroundDark {
  background-image: none !important;
  background-color: rgb(32, 32, 32);
  transition: background-color 0.5s ease-in-out;

}

.backgroundImageLight {
  background-image: url('/front-end/src/assets/images/pictures/dev_web_pc_light.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}
.backgroundImageDark {
  background-image: url('/front-end/src/assets/images/pictures/dev_web_pc.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}


</style>
