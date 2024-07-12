let inp = document.querySelector("#msj")
let btn = document.querySelector(".send")
let messages = document.querySelector(".messages")
let enter=document.querySelector(".enter")
let ad=document.querySelector("#ad")
let sifre=document.querySelector("#sifre")
let messageArea=document.querySelector(".message-area")
let login=document.querySelector(".login")

const firebaseConfig = {
    apiKey: "AIzaSyBUGD26u0FrDJ7hCe0ptLcJXKT86jEaFaM",
    authDomain: "punuw-bc184.firebaseapp.com",
    databaseURL: "https://punuw-bc184-default-rtdb.firebaseio.com",
    projectId: "punuw-bc184",
    storageBucket: "punuw-bc184.appspot.com",
    messagingSenderId: "21924192113",
    appId: "1:21924192113:web:af7261fbdfa5780deae0d0"
};
let users=[{ad:"punhan",sifre:"punhan123"},{ad:"seide",sifre:"seide123"},{ad:"mehemmed",sifre:"mehemmed123"},{ad:"zeynal",sifre:"777"}]


enter.onclick=function(){
      let name=ad.value
      let password=sifre.value
      for(let i=0;i<users.length;i++){
         if(name==users[i].ad && password==users[i].sifre){

             messageArea.style.display="block"
             login.style.display="none"
             return
         }
         
      }
      alert("Sifreniz ve ya Adiniz dogru deyil")


}


firebase.initializeApp(firebaseConfig);
let db = firebase.database().ref();
btn.onclick = function () {
    let msg = inp.value
    db.set({
        message: msg,
        ad:ad.value
    })
    inp.value = ""

}
db.on("value", function (snapshot) {
    
    let x = snapshot.val()
    let p = document.createElement("p")
   
    p.innerText = `${x.ad} : ${x.message}`
    messages.append(p)
})





