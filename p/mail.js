
< !--Add additional components as needed -->
<script src="https://www.gstatic.com/firebasejs/9.6.6/firebase-auth.js"></script>
<script src="https://www.gstatic.com/firebasejs/9.6.6/firebase-database.js"></script>
<script src="https://www.gstatic.com/firebasejs/9.6.6/firebase-firestore.js"></script>

const firebaseConfig = {
    apiKey: "AIzaSyAbbyCGDT8s_ETI1TW84CLgMLJJM_5tkvw",
    authDomain: "eng-name-418204.firebaseapp.com",
    databaseURL: "https://eng-name-418204-default-rtdb.firebaseio.com",
    projectId: "eng-name-418204",
    storageBucket: "eng-name-418204.appspot.com",
    messagingSenderId: "741776675492",
    appId: "1:741776675492:web:9edd95b4d9e13e5a098c31",
    measurementId: "G-ZW2TRCNSDR"
};
// initialize firebase
firebase.initializeApp(firebaseConfig);

// reference your database
var contactFormDB = firebase.database().ref("contactForm");

document.getElementById("contactForm").addEventListener("submit", submitForm);

function submitForm(e) {
    e.preventDefault();

    var name = getElementVal("name");
    var emailid = getElementVal("emailid");
    var msgContent = getElementVal("msgContent");

    saveMessages(name, emailid, msgContent);

    //   enable alert
    document.querySelector(".alert").style.display = "block";

    //   remove the alert
    setTimeout(() => {
        document.querySelector(".alert").style.display = "none";
    }, 3000);

    //   reset the form
    document.getElementById("contactForm").reset();
}

const saveMessages = (name, emailid, msgContent) => {
    var newContactForm = contactFormDB.push();

    newContactForm.set({
        name: name,
        emailid: emailid,
        msgContent: msgContent,
    });
};

const getElementVal = (id) => {
    return document.getElementById(id).value;
};