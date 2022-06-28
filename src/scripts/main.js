const funButton = document.querySelector("[data-fun]");

funButton.addEventListener("click", () => {
    console.log("Fun!");
    const testHeader = document.createElement("h2");
    const newContent = document.createTextNode("Hi there and greetings!");
    testHeader.appendChild(newContent);

    testHeader.append();
});
