import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
  
const firebaseConfig = {
"apiKey": "AIzaSyDgoJOyoeFbGPQEpjDUaauVTgyvFLDSRJs",
"authDomain": "this-is-working.firebaseapp.com",
"projectId": "this-is-working",
"storageBucket": "this-is-working.appspot.com",
"messagingSenderId": "933417181714",
"appId": "1:933417181714:web:7c8e21e60907b70411eecb",
"measurementId": "G-1CFR6J0RPP"
};
  // Initialize Firebase  
const firebaseApp = firebase.initializeApp(firebaseConfig);

export const auth=firebaseApp.auth();

const provider = new firebase.auth.GoogleAuthProvider();
// GoogleAuthProvider 클래스를 authentication 라이브러리에서 사용할 수 있도록 불러오는 코드.

provider.setCustomParameters({prompt: 'select_account'});
// signIn이랑 authentication을 위해서 GoogleAuthProvider를 사용할 때마다 구글 팝업을 항상 띄우기를 원한다는 의미이다.

export const signInWithGoogle = () => auth.signInWithPopup(provider);
// signInWithPopup 메소드는 여러 파라미터를 받을 수 있다. 트위터, 페이스북, 깃허브 등으로도 로그인이 필요할 수도 있으므로.
// 여기에서는 google로 signIn할 것이기 때문에, 파라미터로 위에서 정의한 provider를 넣어준다.

