const auth = firebase.auth();



firebase.auth().onAuthStateChanged(firebaseUser => {
    if (firebaseUser) {
        $('#loginModal').modal('hide')
        $('#em').text(firebaseUser.email)
        console.log(firebaseUser);
    }
    else {
        $('#loginModal').modal('show')
    }
});

function login(){
    let email = $('#emailTB').val();
    let pass = $('#passTB').val();
    auth.signInWithEmailAndPassword(email, pass);
}