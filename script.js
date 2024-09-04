// Fonction pour valider les données du formulaire
function validateForm() {
    const nom = document.getElementById('nom').value;
    const prenom = document.getElementById('prenom').value;
    const email = document.getElementById('email').value;
    const referentiel = document.getElementById('referentiel').value;
    const quartier = document.getElementById('quartier').value;
    const numeros = document.getElementById('numeros').value;
    const sex = document.getElementById('sex').value;

    // Vérifier que tous les champs sont remplis
    if (!nom || !prenom || !email || !referentiel || !quartier || !numeros || !sex) {
        alert("Tous les champs doivent être remplis !");
        return false;
    }

    // Valider l'adresse e-mail
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert("Veuillez entrer une adresse e-mail valide !");
        return false;
    }

    // Valider le numéro de téléphone (format international)
    const phonePattern = /^\+\d{1,4} \d{1,15}$/;
    if (!phonePattern.test(numeros)) {
        alert('Veuillez entrer un numéro de téléphone valide avec l\'indicatif du pays.');
        return false;
    }

    // Si toutes les validations passent
    alert("Formulaire soumis avec succès !");
    return true;
}

// Fonction pour soumettre le formulaire
async function submitForm(event) {
    event.preventDefault(); // Empêche le rechargement de la page

    const formData = new FormData(document.getElementById('formApprenant'));
    const response = await fetch('https://formulaire-backend.onrender.com/informations', {
        method: 'POST',
        body: formData
    });

    const result = await response.text();
    alert(result); // Affiche le message de retour du serveur
}
