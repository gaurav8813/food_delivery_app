
const firebaseConfig = {
    apiKey: "AIzaSyAYRXopywLD550RvmT-z_nghSQY9zETkbs",
    authDomain: "contact-form-fooddelivery.firebaseapp.com",
    databaseURL: "https://contact-form-fooddelivery-default-rtdb.firebaseio.com",
    projectId: "contact-form-fooddelivery",
    storageBucket: "contact-form-fooddelivery.appspot.com",
    messagingSenderId: "415870547900",
    appId: "1:415870547900:web:a05eb5dd4293bbf9591db9"
  };

 firebase.initializeApp(firebaseConfig);

  let contactFormDB = firebase.database().ref('contactForm')

document.getElementById('contactForm').addEventListener('submit', submitForm)

function submitForm(e){
    e.preventDefault();
   let name = getElementVal("name");
   let email = getElementVal("email");
   let phone = getElementVal("phone");
   let message = getElementVal("message");

   saveData(name, email, phone, message);

   document.querySelector(".alert").style.display = "block";
}

const saveData = (name, email, phone, message)=>{
    let newContactForm = contactFormDB.push();

    newContactForm.set({
        name: name,
        email: email,
        phone: phone,
        message: message
    });
    
}
const getElementVal = (id) =>{
    return document.getElementById(id).value;
}
// const submit_btn = document.getElementById("btn");
// const form = document.querySelector("#form");
// const names = document.getElementById("names");
// const email = document.getElementById("email");
// const phone = document.getElementById("phone");
// const message = document.getElementById("message");
// let data ;
// // function getDataForm(e){
// //     e.preventDefault();
// //     const formData = new FormData(form);
// //     console.log(formData.get("namefield"));
// // }

// // console.log(formData.values);
// submit_btn.addEventListener("submit" ,(e)=>{
//     e.preventDefault();
//     const userName = names.value;
//     const userEmail = email.value;
//     const userPhone = phone.value;
//     const userMessage = message.value;
//     console.log(userName,  userEmail,  userPhone, userMessage)
// });