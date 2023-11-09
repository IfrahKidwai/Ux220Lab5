class IfrahElement extends HTMLElement{
    connectedCallback(){
    this.innerHTML = "Ifrah was here";
   }
}

customElements.define("x-ifrah", IfrahElement);