

function authStateListener() {
    // [START auth_state_listener]
    firebase.auth().onAuthStateChanged((user) => {
        if (user) {
            // User is signed in, see docs for a list of available properties
            // https://firebase.google.com/docs/reference/js/v8/firebase.User
            var uid = user.uid;
            // ...
            location.href = 'culturalconnections.html';
        } else {
            // User is signed out
            // ...

        }
    });
    // [END auth_state_listener]
}

window.addEventListener('load', function () {


    // Listen for auth state changes
    authStateListener();



    document.getElementById('sign-in-email').addEventListener('click', function () {

        let emailTxt = document.getElementById('email').value;
        let passtxt = document.getElementById('password').value;

        firebase.auth().signInWithEmailAndPassword(emailTxt, passtxt)
            .then((userCredential) => {
                // Signed in
                let user = userCredential.user;
                // ...
                console.log('Logging sucessfully');
                alert('Logging sucessfully');
                location.href = 'culturalconnections.html';
            })
            .catch((error) => {
                let errorCode = error.code;
                let errorMessage = error.message;
                alert('Logging fail');
                console.log('Logging fail', errorMessage);
            });

    });

    document.getElementById('sign-in-google').addEventListener('click', function () {
        //  alert("aa");

        let provider = new firebase.auth.GoogleAuthProvider();

        provider.addScope('email');
        firebase.auth().signInWithPopup(provider)
            .then(function (result) {
                console.log('Logging sucessfully', result.user);
                location.href = 'culturalconnections.html';
            })
            .catch(function (error) {
                console.log('Logging fail', error);
            });
    });
    // document.getElementById('sign-in-phone').addEventListener('click', function () {

    //     const phoneNumber = +1 + document.getElementById('phone').value;
    //     const appVerifier = window.recaptchaVerifier;
    //     firebase.auth().signInWithPhoneNumber(phoneNumber, appVerifier)
    //         .then((confirmationResult) => {
    //           // SMS sent. Prompt user to type the code from the message, then sign the
    //           // user in with confirmationResult.confirm(code).
    //           window.confirmationResult = confirmationResult;
    //           alert("SMS sent");

    //           // ...
    //         }).catch((error) => {
    //             let errorCode = error.code;
    //             let errorMessage = error.message;
    //             alert('Logging fail');
    //             console.log('Logging fail', errorMessage);
    //         });
    // });
    // function recaptchaRender() {
    //     /** @type {firebase.auth.RecaptchaVerifier} */
    //     const recaptchaVerifier = window.recaptchaVerifier;
      
    //     // [START auth_phone_recaptcha_render]
    //     recaptchaVerifier.render().then((widgetId) => {
    //       window.recaptchaWidgetId = widgetId;
    //     });
    //     // [END auth_phone_recaptcha_render]
    //   }

    // document.getElementById('verifyCode').addEventListener('click', function () {
    //     const code = document.getElementById('passCode').value;
    //     confirmationResult.confirm(code).then((result) => {
    //       // User signed in successfully.
    //       const user = result.user;
    //       console.log('Logging sucessfully');
    //       alert('Logging sucessfully');
    //       location.href = 'culturalconnections.html';
    //     }).catch((error) => {
    //         let errorCode = error.code;
    //         let errorMessage = error.message;
    //         alert('Logging fail');
    //         console.log('Logging fail', errorMessage);
    //     });
    //     // [END auth_phone_verify_code]
    // });
    // function getRecaptchaResponse() {
    //     const recaptchaWidgetId = "...";
    //     const grecaptcha = {};
      
    //     // [START auth_get_recaptcha_response]
    //     const recaptchaResponse = grecaptcha.getResponse(recaptchaWidgetId);
    //     // [END auth_get_recaptcha_response]
    //   }
});
