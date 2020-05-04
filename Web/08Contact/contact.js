
let submitForm = () => {
    let lastName = document.getElementById("lastname").value;
    let firstName = document.getElementById("firstname").value;
    let userMail = document.getElementById("email").value;
    let mailObject = document.getElementById("object").value;
    let message = document.getElementById("message").value

    Email.send({
        SecureToken : "65efad16-5ae2-421a-8c5c-9cd98d9926b7",
        To : 'juravote@gmail.com',
        From : "juravote@gmail.com",
        Subject : mailObject + " - " + userMail,
        Body : "Formulaire : \n \n Nom :" + lastname + "\n Prénom : " + firstname + "\n Adresse mail : " + userMail + "\n \n Objet : " + mailObject + "\n" + message;
    }).then(
      message => alert("votre mail à bien été envoyé")
    );
}