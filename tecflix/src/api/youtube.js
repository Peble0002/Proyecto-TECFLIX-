import axios from 'axios' 
//se tiene que isntalar desde la consola axios con "npm install axios" esto en la carptea del proyecto

const KEY = "AIzaSyAT0s35mNKCsIEfKkE18YJR-4ofsTUKb-I"
 
//Para este caso se  conecta por medio del url al api de google
//Donde se idndica que muestre en 30 resultados de acuerdo a la palabra ingresada
export default axios.create({
    baseURL : 'https://www.googleapis.com/youtube/v3',
    params:{
        part: 'snippet',
        maxResults: 30,
        key: KEY
    },
    headers:{}
})