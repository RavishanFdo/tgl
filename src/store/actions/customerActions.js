import firebase from 'firebase/app';
import 'firebase/firestore';


export const setPassword = () =>{
 return()=>{
    var auth = firebase.auth();
    var emailAddress = "thilinihk96@gmail.com";
    
    auth.sendPasswordResetEmail(emailAddress).then(function() {
      // Email sent.
    }).catch(function(error) {
      // An error happened.
    });
    
 }   

}