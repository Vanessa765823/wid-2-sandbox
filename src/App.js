export default function App() {   
  /*
   *

   *    
   *
   */

  //Parameter

  console.log("Test");

  const a = "Test"; // var - alt // let --> mit all dem kann man Variabeln definieren


  // If statement

  if( a === "Test") { // in () ist Bedingung, Vergleich immer mit ===
    console.log("a ist gleich Test");
  } else {
    console.log(" a ist nicht gleich Test ");
  }




const user = "admin";



//Funktion

function logger(x,y = "_3", z) {    // wenn für y nichts eingegeben wird ist _3 default wert
  const result = "Funktion!" + x +y+z; //Nebeneffekt
  console.log(result);
  return result;
}

 logger("_1");  // man muss Funktion immer aufrufen damit ausgibt , jetzt komma da wir später nochmal sgeschrieben haben


// Übung 1

  const u = 77;

if (typeof u === "string") {
  console.log("u ist Type String");
} else if (typeof u === "number") {
  console.log("u ist Type Number");
} else if (typeof u === "boolean") {
  console.log("u ist Type Boolean");
} else {
  console.log("Unknown");
}



// Übung 2

const isTheTruth = false



// Übung 3

function multiply (s, t = 2){
  if (typeof s !== "number" || typeof t !== "number"){
  console.log("Der Parameter muss eine Zahl sein")
  }else {
  const resultat = s*t
  console.log(resultat);
  return ;
}
}

multiply(5);     // 10
multiply(5, 3);  // 15
multiply("5"); 


// Übung 4.1

const string_verbinden = (wordOne, wordTwo) => {
    return `${wordOne} ${wordTwo}`;
};
console.log(string_verbinden("hallo", "welt"))


//Übung 4.2

const prüfen =(parameter1) =>{
  if (parameter1 === 0){
  return `Die Zahl ist Null`}
  else if (parameter1 > 0){
    return `Die Zahl ist grösser als Null`
  } else {return `Die Zahl ist kleiner als Null`}
};

console.log(prüfen(4))

//Übung 4.3

const grössere_wert = (wert1, wert2) => { 
  return wert1 < wert2 ? wert2 : wert1
}

console.log(grössere_wert(30,3))

//Übung 5.1

const array_zahlen = [1, 7, 66, 45, 123]

const array_multi = array_zahlen.map(zahl => zahl * 3)
console.log(array_multi)

const array_index = array_zahlen.map((zahl, index) => zahl * index)
console.log(array_index)


//Übung 5.2

const array_username = ["Livia", "Vanessa", "Sophia", "Loris", "Melanie"]

const name_filtered = array_username.filter((username) => username.includes("a"))
console.log(name_filtered)


// array

const array = [1,2,3, "vier", false, [], undefined, "letztes Element"]; //Elemente in array können divers sein, sogar nochmals ein array
const element = array[array.length - 1]; // so kann man letztes Element anzeigen
console.log(array.length);


// iterieren

const users = ["Tim", "Anna", "Admin"];
const usersTransformed = users.map(user => user + "_user"); //hier drauf achten das user einzahl ist
console.log(users)
console.log(usersTransformed);




const filteredUsers = users.filter((users) => user !== "Admin");
console.log(filteredUsers);


 //Array ist eine Liste von Elementen / Werten
 //Array sind geordnet
 //Array werden Element über ihren Index gefunden

const object = {
  meinString: "User",
  meineNumber: 1,
  meinArray: [],
  meinObjekt: {},
};

//Objekt = Liste von Schlüssel-Wert-Paar
//Objekt: ungeordnet
//Objekt: Werte werden über Schlüssel identifiziert

return (
  <div>
     {/*HTML hier + JavaScript in {} möglich*/}

    {/*<div>Hallo Welt {a}</div>
    <div> {element} </div>
    <div>{object.meinString}</div>

    {users.map((user) => (
      <li>{user}</li>
    ))}

    <div>{logger("_1")}</div>

    {/* Variable a wird hier eingefügt */}

    <div>
      {user === "admin" ? "isAdmin" : "isNotAdmin"}
    </div>

    <div style={{ backgroundColor: user === "admin" ? "blue" : "red"}}> usergroup
    </div>

    <p style={{color: isTheTruth ? "green" : "red"}}>ist dieser random Text korrekt geschrieben</p>



  </div>
);
};
