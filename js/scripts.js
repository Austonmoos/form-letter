window.onload = function() {
  let form = document.querySelector("form");
  form.onsubmit = function(event) {  // there's a new parameter
    // in this section we get the value for each form input
    const person1Input = document.getElementById("person1Input").value;
    // then we set the story variables to the values we got from the form
    document.querySelector("span#person1a").innerText = person1Input;

    document.querySelector("div#story").removeAttribute("class");

    event.preventDefault();
  };
};