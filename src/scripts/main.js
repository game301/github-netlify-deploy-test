"use strict";
const funButton = document.querySelector("[data-fun]");

funButton.addEventListener("click", () => {
    console.log("Fun button was clicked!");

    // makes the div-test div empty
    let divTestDiv = document.querySelector("#div-test");
    divTestDiv.textContent = "";
    console.log("div-test div tartalma törölve!");

    // create paragraph (on button click)
    const para = document.createElement("p");
    para.innerText = "This is a paragraph";

    const divTest = document.querySelector("#div-test");
    divTest.appendChild(para);

    // fetch data and display with DOM
    const getJsonOnclick = async () => {
        try {
            const response = await fetch("/src/data/test2.json");
            console.log("SUCCESS, Response received! ", response);
            if (response.ok) {
                const responseJson = await response.json();
                console.log("Succesfuly converted into json! ", responseJson);

                // create div with the fetched response inside (onclick)
                const divWithTheResponse = document.createElement("div");
                divWithTheResponse.setAttribute("id", "created-div"); // id beállítás

                divWithTheResponse.innerHTML = responseJson;

                //const divTest = document.querySelector("#div-test");  // Ezt már feljebb létrehoztam
                divTest.appendChild(divWithTheResponse);
            }
        } catch (err) {
            console.error("Not Succesful", err);
        }
    };

    getJsonOnclick();
});
/*
fetch("https://reqres.in/api/users")
    .then((res) => {
        if (res.ok) {
            console.log("SUCCESS");
            res.json();
        } else {
            console.log("Not Succesful");
        }
    })
    .then((data) => console.log(data))
    .catch((error) => console.log("ERROR", error));
*/

/*
async function getDataTest1() {
    try {
        const response = await fetch("https://reqres.in/api/users");
        console.log("SUCCESS, Response received", response);
        if (response.ok) {
            const resJson = await response.json();
            console.log("Succesfuly converted into json", resJson);
        }
    } catch (err) {
        console.log("Not Succesful", err);
    }
}

getDataTest1();
*/

/*
async function getDataTest2() {
    try {
        const response = await fetch("/src/data/test.json");
        console.log("SUCCESS, Response received", response);
        if (response.ok) {
            const resJson = await response.json();
            console.log("Succesfuly converted into json", resJson);
        }
    } catch (err) {
        console.log("Not Succesful", err);
    }
}

getDataTest2();
*/

// Fireship js file
const themeMap = {
    dark: "light",
    light: "solar",
    solar: "dark",
};
let tmp = "";
const theme =
    localStorage.getItem("theme") ||
    ((tmp = Object.keys(themeMap)[0]), localStorage.setItem("theme", tmp), tmp);
const bodyClass = document.body.classList;
bodyClass.add(theme);

function toggleTheme() {
    const current = localStorage.getItem("theme");
    const next = themeMap[current];

    bodyClass.replace(current, next);
    localStorage.setItem("theme", next);
}

document.getElementById("themeButton").onclick = toggleTheme;
