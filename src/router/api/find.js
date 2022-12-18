import axios from "axios";
import {createUserWithEmailAndPassword } from "firebase/auth";
import {auth} from '../config/firebase_config'

var findclassid = function (idSchool, grade, class_) {
    return new Promise(function (resolve, reject) {

        axios.post('/api/user/class?idSchool=' + idSchool + '&grade='+grade+'&class='+class_).then( reponse => {
            // return new Promise(
            //     (resolve)=>{
            //         resolve(reponse.data);
            //     })\
            console.log(reponse.data);
            resolve(reponse.data.idClass);
            
          })
          .catch(error => {
            console.error(error);
            reject();
          })
    });
  };

const createClass = (idSchool, grade, class_) =>{
    return new Promise(function (resolve, reject) {
        axios.post('/api/page/class?school_id=' +idSchool+'&grade='+grade+'&class='+class_).then(response =>{
            resolve(response.data)
        }).catch(error=>{
            console.error(error);
            reject();
        })
    });
}

const makeSignUp = (uid, idClass, num)=>{
    return new Promise(function (resolve, reject){
    let obj = {
        "uid" : uid,
        "idClass": idClass,
        "idStudent": num,
        "nickname": "행복한 나우"
    }
    console.log(JSON.stringify(obj))
    axios.post('/api/auth/signup?uid=' + uid + '&idClass='+ idClass+'&idStudent='+num+'&nickname=행복한나우')
    .then(
        ()=>{
            resolve();
        }
    ).catch((error)=>{
        reject(error);
    })
           
    })
}

const firebaseSignup = (email, password) =>{
    return new Promise(
        function (resolve, reject){
            createUserWithEmailAndPassword(auth, email, password).then(
                (userCredential)=>{
                    const user = userCredential.user;
                    resolve(user.uid);
                }
            ).catch((error)=>{
                reject(error.message)
            })

        }
    )
}

const findClassInfo =(idClass) =>{
    return new Promise(
        function(resolve,reject){
            axios.get('/api/page/classinfo?id=' + idClass).then(
                (result)=>{
                    resolve(result)
                }
            )

        }
    )
}



export { createClass, findclassid,makeSignUp , firebaseSignup, findClassInfo};