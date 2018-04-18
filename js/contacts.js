// Création d'une classe contact
var contact = {
  // Méthode d'initialisation
  init: function (nom, prenom) {
    this.nom = nom;
    this.prenom = prenom;
  },
  // Méthode affichage informations
  afficher: function () {
    console.log("# Nom: " + this.nom + " Prenom : " + this.prenom);
  }
};

// Initialisation du tableau de stockage des classes
var tableau_contacts = [];

// Création du premier contact Carole Lévisse
var contact1 = Object.create(contact);
contact1.init("Carole", "Lévisse");
tableau_contacts.push(contact1);

// Création du deuxième contact Mélodie Nelsonne
var contact2 = Object.create(contact);
contact2.init("Mélodie", "Nelsonne");
tableau_contacts.push(contact2);

// Message de Bienvenue
console.log("Bienvenue dans le gestionnaire de contact !");

// Boucle
do {
  // Options
  console.log("\n1: Lister les contacts");
  console.log("2: Ajouter un contact");
  console.log("0: Quitter");
  // Demande de l'action
  var action = Number(prompt("Que souhaitez-vous faire?"));

  // Si option = lister les contacts
  if (action === 1) {
    console.log("\n# Voici la liste des contacts :");
    for (var i = 0; i < tableau_contacts.length; i++) {
      tableau_contacts[i].afficher();
    }
  }
  // Si option = Ajouter un contact
  else if (action === 2) {
    var nom = prompt("Nom du nouveau contact?");
    var prenom = prompt("Prenom du nouveau contact?");
    var newcontact = Object.create(contact);
    newcontact.init(nom, prenom);
    tableau_contacts.push(newcontact);
    console.log("\n# Le nouveau contact a été ajouté.");
  }
  // Si option inconnue
  else if (action > 2 || action < 0){
    console.log("\n# Saisie incorrect.");
  }

} while (action !== 0);

// Message de fin
console.log("\nAu revoir !");
