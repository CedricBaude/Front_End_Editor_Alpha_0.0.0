
const strong = document.getElementById("strong");
const em = document.getElementById("em");
const span = document.getElementById("span");

const text = document.getElementById("text");

strong.addEventListener('click', () => {
    text.value +="<strong></strong>";
});

em.addEventListener('click', () => {
    text.value +="<em></em>";
});

span.addEventListener('click', () => {
    text.value +="<span></span>";
});

text.onkeyup = text.onkeydown = function(){
    document.getElementById("live").innerHTML = this.value;

}

