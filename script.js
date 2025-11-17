// Sélection du formulaire
const form = document.getElementById('contact-form');

form.addEventListener('submit', function(event) {
  event.preventDefault(); // Empêche le rechargement de la page

  // Récupère les valeurs
  const name = form.querySelector('input[type="text"]').value;
  const email = form.querySelector('input[type="email"]').value;
  const message = form.querySelector('textarea').value;

  // Vérifie que tout est rempli
  if(name && email && message){
    alert(`Merci ${name} ! Votre message a été reçu.`);
    form.reset(); // Vide le formulaire
  } else {
    alert('Veuillez remplir tous les champs.');
  }
});

