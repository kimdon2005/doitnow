import Cookies from 'universal-cookie';

const cookies = new Cookies();

const getcookie = (namecookie)=>{
   return cookies.get(namecookie);

}
export default getcookie;