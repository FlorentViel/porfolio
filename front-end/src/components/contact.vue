<template>
    <section class="container" :class="theme.isDarkMode ? 'text-color-dark' : 'text-color-light'">


      <!-- Title contact -->

      <div class="my-5">
          <h1 :class="theme.isDarkMode ? 'h1-dark' : 'h1-light'" class="text-center title font-size-40 h1">Contact</h1>
      </div>

      <!-- Bloc contact-->

      <div id="formbg" :class="theme.isDarkMode ? 'formbgdark' : 'formbglight'" class="d-flex justify-content-lg-around my-5 flex-column flex-md-row">

        <!-- social bloc : Left bloc -->
        
        <div id="social" class=" d-flex flex-column justify-content-around h-auto my-5 mx-auto">
          <div class=" d-flex justify-content-around align-items-center flex-column gap-3">
            <div class="d-flex flex-column justify-content-center align-content-center gap-2">
              <div class="my-2 text-center">
                <p class="h6">Adresse e-mail</p>
              </div>
              <div class="my-2 text-center">
                <p class="h6"> florent.vieville03@gmail.com</p>
              </div>
            </div>
            
            <div class="d-flex justify-content-around align-items-center gap-2">
              <div class="my-2">
                <p class="h6">Téléphone</p>
              </div>
              <div class="mx-2">
                <p class="h6"> 06 48 74 42 30</p>
              </div>
            </div>
          </div>


          <div class="d-flex justify-content-center gap-1 gap-lg-4 gap-sm-4 flex-wrap">
            <div class="d-flex flex-column justify-content-around align-items-center">
            <div class="mx-4 mx-md-2 mx-lg-4 position-relative">
              <div class="test position-absolute top-0 z-0"></div>          
              <svg class="z-1 position-relative" width="60" height="60">
                <a href="https://github.com/FlorentViel" target="_blank">
                  <image xlink:href="@/assets/images/logos/logo-reseau/github-logox32.svg" width="60" height="60" />
                </a>
              </svg>  
            </div>
            <div class="">
              <p class="h6">FlorentViel</p>
            </div>
          </div>
          <div class="d-flex flex-column justify-content-around align-items-center">
            <div class="">
              <svg class="" width="60" height="60">
                <image xlink:href="@/assets/images/logos/logo-reseau/LinkedIn_icon_circle.svg" width="60" height="60" />
              </svg>        
            </div>
            <div class="">
              <p class="h6 text-center">in/florent-vieville-38908728a</p>
            </div>
          </div>
          <div class="d-flex flex-column justify-content-around align-items-center gap-2">
            <div class="">
              <div class="test"></div>
            </div>
            <div class="">
              <p class="h6">Nom</p>
            </div>
        </div>
          </div>


        </div>

        <!-- Form bloc : Right bloc -->
        <form  @submit="validateAndSubmit" id="contact" class="py-5 mx-auto col-10 row gy-3">
  <div class="form-row d-flex justify-content-lg-around flex-wrap">
    <div class="col-lg-5 col-12">
      <label for="lastName">Nom*</label>
      <input type="text" class="form-control" id="lastName" name="lastName" placeholder="Nom" required>
    </div>
    <div class="col-lg-5 col-12">
      <label for="firstName">Prénom</label>
      <input type="text" class="form-control" name="firstName" placeholder="Prénom">
    </div>
  </div>
  <div class="form-row d-flex justify-content-lg-around flex-wrap">
    <div class="col-lg-5 col-12 ">
      <label for="validationTooltipUsername">Adresse e-mail*</label>
      <div class="input-group">
        <div class="input-group-prepend">
          <span class="input-group-text" id="validationTooltipUsernamePrepend">@</span>
        </div>
        <input type="text" class="form-control" name="email" placeholder="Saisissez une adresse e-mail" required >
      </div>
    </div>
    <div class="col-lg-5 col-12 ">
      <label for="first-name">Téléphone</label>
      <input type="text" class="form-control" name="phone" placeholder="Sélectionnez votre numéro de téléphone">
    </div>
  </div>
  <div class="form-row">
    <div class="col-lg-11 col-12 mx-auto">
      <label for="object-input">Objet*</label>
      <input type="text" class="form-control" id="object-input"  name="object" placeholder="Objet" required>
    </div>
  </div>
  <div class="form-row">
    <div class="col-lg-11 col-12 mx-auto">
      <label for="MessageArea">Message</label>
      <textarea class="form-control" id="MessageArea" name="message" rows="6" required></textarea>
      <p class="text-contact">Champs obligatoires *</p>
    </div>
  </div>

  <div class="form-check form-row col mx-auto">
  <input class="form-check-input" type="checkbox" name="agree" value="yes" id="flexCheckDefault" required>
  <p class="form-check-label text-contact">En soumettant ce formulaire, j'accepte que mes données personnelles soient utilisées pour me recontacter.
    Aucun autre traitement ne sera effectué avec mes informations. Pour connaître et exercer vos droits, veuillez consultez la
    <router-link to="/privacyPolicy">Politique de confidentialité.</router-link>
  </p>
  </div>

  <div class="form-row d-flex justify-content-center align-items-center">
    <button class="btn btn-primary" type="submit">Envoyez</button>
  </div>

</form>

          


      </div>
  


    </section>
  </template>
  
  <script>

  import axios from 'axios';


export default {

  data() {
    return {
      // Initialisez messages comme un tableau vide
      messages: [],
    };
  },


  props: ['theme'],
  methods: {
    toggleThemeAndEmit() {
      this.theme.toggleTheme(); // Appel de la fonction pour basculer le thème
      this.$emit('toggleTheme'); // Émettez l'événement pour demander le changement de thème
    },



    validateAndSubmit(event) {
      event.preventDefault(); // Empêche la soumission par défaut du formulaire

      // Récupérez les données du formulaire en créant une nouvelle instance de FormData
      const formData = new FormData(event.target);

      console.log(formData.get('email'));

        // Ajoutez le message envoyé au tableau
        this.messages.push({
        sender: formData.get('email'), // Expéditeur
        subject: formData.get('object'), // Objet
        message: formData.get('message'), // Message
      });

      // Affichez les messages dans la console
      console.log('Messages envoyés :', this.messages);

      axios.post('http://localhost:3000', formData, {
        headers: { 'Content-Type': 'application/json' }
      })

      // Validez les champs du formulaire en utilisant la fonction validateForm
      if (this.validateForm(formData)) {
        // Si la validation réussit, envoyez les données au serveur

        axios.post('http://localhost:3000', formData)
          .then(response => {
            // Gérez la réponse du serveur ici
            console.log('Formulaire envoyé');
          })
          .catch(error => {
            console.log('Erreur');
          });
      }
    },

    validateForm(formData) {
      // Implémentez la logique de validation ici
      // Vérifiez les champs requis
      const requiredFields = ['lastName', 'email', 'phone', 'object', 'message', 'agree']; // Ajoutez tous les champs requis ici

      for (const field of requiredFields) {
        const value = formData.get(field);
        if (!value || value.trim() === '') {
          // Champ obligatoire manquant, affichez un message d'erreur ou effectuez d'autres actions
          console.log(`Le champ "${field}" est requis.`);
          return false; // Validation échouée
        }
      }

      // Toutes les validations passées, le formulaire est valide

      return true;
    }

  },
};
  </script>
  
  <style scoped>

  .test {
    display: flex;
    border: rgb(2, 25, 57) solid 3px;
    justify-content: center;
    align-items: center;
    border-radius: 360px;
    margin: auto;
    width: 60px;
    height: 60px;
    background: lightgray 50% / cover no-repeat;
  }


  /* background bloc Contact*/

  #formbg {
    border-radius: 60px;
  }

  .formbglight{
    background: #0099ff65;
  }

  .formbgdark {
    background: rgba(0, 0, 0, 0.65); 
  }

  #social {
    width: auto;
  }

  #contact {
    width: 60%;
  }  

  </style>
  