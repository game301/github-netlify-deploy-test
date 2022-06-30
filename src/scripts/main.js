const funButton = document.querySelector("[data-fun]");

funButton.addEventListener("click", () => {
    console.log("Fun!");

    // create paragraph onclick
    const para = document.createElement("p");
    para.innerText = "This is a paragraph";

    const divTest = document.querySelector("#div-test");
    divTest.appendChild(para);

    // fetch data and display with DOM
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

async function getData() {
    try {
        const response = await fetch("https://reqres.in/api/users/23");
        console.log("SUCCESS, Response received", response);
        if (response.ok) {
            const resJson = await response.json();
            console.log("Succesfuly converted into json", resJson);
        }
    } catch (err) {
        console.log("Not Succesful", err);
    }
}

getData();
