class IfrahElement extends HTMLElement{
    connectedCallback(){
    this.innerHTML = "Ifrah was here";
    
   }
}
customElements.define("x-ifrah", IfrahElement);

class CenterElement extends HTMLElement{
    connectedCallback(){
        this.innerHTML =`<div style="text-align:center">${this.innerHTML}</div>`;
   }
}

customElements.define("x-center", CenterElement);

//year
class YearElement extends HTMLElement{
    connectedCallback(){
        this.innerHTML = new Date().getFullYear();
   }
}

customElements.define("x-fullyear", YearElement);

//custom element
class VioletElement extends HTMLElement{
    connectedCallback(){
        this.innerHTML =`<div style="color:violet;">${this.innerHTML}</div>`;
   }
}

customElements.define("x-violet", VioletElement);