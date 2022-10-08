// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyCaTherXGG51MVkbapA-FVMQoYdhLXxu-k",
  authDomain: "kwitter2-af468.firebaseapp.com",
  databaseURL: "https://kwitter2-af468-default-rtdb.firebaseio.com",
  projectId: "kwitter2-af468",
  storageBucket: "kwitter2-af468.appspot.com",
  messagingSenderId: "712839152362",
  appId: "1:712839152362:web:65011a6ef876a34e0b0d93"
};

firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");

document.getElementById("user_name").innerHTML = "¡Hola " + user_name + "!";

function addRoom() {
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose: "adding room name"
  });

  localStorage.setItem("room_name", room_name);
  window.location.replace("kwitter_page.html");

}
//database(): significa que queremos añadir datos a la base de datos
//ref(): es la referencia donde queremos añadir el nombre del usuario en la base de datos
//“/”: significa que queremos añadir el nombre del usuario en la raíz como la carpeta principal.
//child() se utiliza para darle nombre a la carpeta principal. 
//update: es la función de firebase para actualizar los valores de la base de datos.
//La carpeta principal, user_name, no puede añadirse por sí sola, sino que se deben añadir algunos valores más.
//purpose: es la palabra clave para el valor “adding user”.



//AÑADE TUS ENLACES DE FIREBASE

function getRoom() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
  Room_names = childKey;
 //Inicio del código
console.log("Room Name - " + Room_names);
row = "<div class= 'room_name' id="+ Room_names + " onclick='redirectToRoomName(this.id)' >#"+ Room_names + "</div><hr>";
document.getElementById("output").innerHTML += row;
 //Final del código
 });});}
getRoom();


function logout() {
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location.replace("index.html");
}


function redirectToRoomName(Room_names) {
  console.log(Room_names);
  localStorage.setItem("room_name", Room_names);
  window.location = "kwitter_page.html";
}