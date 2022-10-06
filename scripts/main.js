const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/eevee.png") {
    myImage.setAttribute("src", "images/eevee1.png");
  } else {
    myImage.setAttribute("src", "images/eevee.png");
  }
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");
function setUserName() {
    const myName = prompt("Please enter your name.");
    if (!myName) {
      setUserName();
    } else {
      localStorage.setItem("name", myName);
      myHeading.textContent = `Eevee is cool, ${myName}`;
    }
  }
  if (!localStorage.getItem("name")) {
    setUserName();
  } else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `Eevee is cool, ${storedName}`;
  }

  myButton.onclick = () => {
    setUserName();
  };