const funButton = document.querySelector("[data-fun]");

funButton.addEventListener("click", () => {
    console.log("Fun!");

    // create a new div element
    const newDiv = document.createElement("div");

    // and give it some content
    const newContent = document.createTextNode("Hi there and greetings!");

    // add the text node to the newly created div
    newDiv.appendChild(newContent);

    // add the newly created element and its content into the DOM
    const currentDiv = document.querySelector("#div-test");
    funButton.insertBefore(newDiv, currentDiv);
});
