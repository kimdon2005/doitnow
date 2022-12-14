import axios from "axios";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

function findClassId(idSchool, grade, class_){
    axios.post('/api/user/class?idSchool=' + idSchool + '&grade='+grade+'&class='+class_).then( reponse => {
        // return new Promise(
        //     (resolve)=>{
        //         resolve(reponse.data);
        //     })\
        console.log(reponse.data)
        return reponse.data
        
      })
      .catch(error => {
        console.error(error);
      })
}
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
        let obj = {
            "school_id":idSchool,
            "grade":grade,
            "class":class_
        }
        axios.post('/api/page/class', JSON.stringify(obj),{
            withCredentials: true
    
        }).then(response =>{
            resolve(response.data)
        }).catch(error=>{
            console.error(error);
            reject();
        })
    });
}

const makeSignUp = (email, password, idClass, num)=>{
    return new Promise(function (resolve, reject){
        const auth = getAuth();
        console.log(email);
        console.log(password);
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                let obj = {
                    "uid" : user.uid,
                    "idClass": idClass,
                    "idStudent": num,
                    "nickname": "행복한 나우"
                }
                console.log(JSON.stringify(obj))
                axios.post('/api/auth/signup', JSON.stringify(obj),{
                    withCredentials: true
                })
                .then(
                    ()=>{
                        resolve();
                    }
                ).catch((error)=>{
                    reject(error);
                })
            })
            .catch((error) => {
                // const errorCode = error.code;
                const errorMessage = error.message;
                reject(errorMessage)
            });

    })
}

export {findClassId, createClass, findclassid,makeSignUp};