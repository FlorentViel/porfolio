const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors'); // Importez le package cors




const app = express();



// Middleware pour analyser les données du formulaire
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


const corsOptions = {
  origin: 'http://localhost:5173', // Remplacez par l'URL de votre application front-end
  optionsSuccessStatus: 200, // Optionnel
};

// Utilisez les options CORS pour activer l'origine spécifique
app.use(cors(corsOptions));


// Configurations pour nodemailer (vous devrez remplacer ces valeurs par les vôtres)

const userMail = 'florent.vieville03@gmail.com'
const mdpMail = 'kjwg spwl elqy oyqu'

const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: userMail,
    pass: mdpMail
  }
});

app.get('/', (req, res) => {
  res.send('Serveur en cours d\'exécution.'); // Réponse par défaut pour les requêtes GET

});

// Route pour gérer les requêtes POST du formulaire de contact
app.post('/', (req, res) => {
  const formData = req.body;
  console.log('Données du formulaire reçues :', formData);

  try {
    // Traitement des données du formulaire
    const mailOptions = {
      from: formData['last-name'],
      to: 'florent.vieville03@gmail.com',
      subject: `Nouveau message de ${formData['last-name']} ${formData['first-name']}`,
      text: `Message: ${formData['message']}`
    };

    res.status(200).send('Formulaire envoyé avec succès');
  } catch (error) {
    console.log('Erreur côté serveur :', error);
    res.status(500).send('Erreur côté serveur');
  }


  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log('Erreur d\'envoi de courriel : ' + error);
      res.status(500).send('Erreur d\'envoi de courriel');
    } else {
      console.log('Courriel envoyé : ' + info.response);
      res.status(200).send('Courriel envoyé avec succès');
    }
  });
});

// Démarrage du serveur sur le port 3000 (ou choisissez le port de votre choix)
app.listen(3000, () => {
  console.log('Serveur en cours d\'exécution sur le port 3000');
});
