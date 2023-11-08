let myImage = document.querySelector("img");

myImage.onclick = function () {
    let mySrc = myImage.getAttribute("src");
    if (mySrc === "C:/Users/86189/Desktop/web-project/images/grassland.jpg") {
        myImage.setAttribute("src", "C:/Users/86189/Desktop/web-project/images/flat,800x800,075,f.jpg");
    } else {
        myImage.setAttribute("src", "C:/Users/86189/Desktop/web-project/images/grassland.jpg");
    }
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
    let myName = prompt("Please enter your name.");
    if (!myName || myName === null) {
        setUserName();
    } else {
        localStorage.setItem("name", myName);
        myHeading.textContent = "Mozilla is cool, " + myName;
    }
}
if (!localStorage.getItem("name")) {
    setUserName();
  } else {
    let storedName = localStorage.getItem("name");
    myHeading.textContent = "Mozilla 酷毙了，" + storedName;
  }
    myButton.onclick = function() {
        setUserName();
    }
      