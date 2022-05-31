let farbe = document.getElementById("farbeAuswahlen");

let farbwahl = document.querySelectorAll("option");
console.log(farbwahl)

let myFunction = () => {
    console.log(farbe.value)
    document.body.style.backgroundColor = farbe.value;
}


