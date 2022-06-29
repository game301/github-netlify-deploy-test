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
