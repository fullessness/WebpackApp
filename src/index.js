function component() {
  document.body.appendChild(component()); function component() {
    var element = document.createElement('div');

    element.innerHTML = "Hello world!";

    return element;
  }
}

document.body.appendChild(component());