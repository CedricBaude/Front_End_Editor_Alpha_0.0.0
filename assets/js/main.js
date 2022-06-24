
const strong = document.getElementById("strong");
const em = document.getElementById("em");
const span = document.getElementById("span");
const cite = document.getElementById("cite");

const html = document.getElementById("html");
const css = document.getElementById("css");

const max = 200; 
const progress_bar = document.getElementById("progress_bar"); 

const load = document.getElementById("img"); 

html.addEventListener("input", () => {
    load.style.visibility = "visible";
});

document.addEventListener("mouseover", () => {
    load.style.visibility = "hidden";
});

strong.addEventListener('click', () => {
    html.value +="<strong></strong>";
});

em.addEventListener('click', () => {
    html.value +="<em></em>";
});

span.addEventListener('click', () => {
    html.value +="<span></span>";
});

cite.addEventListener('click', () => {
    html.value +="<cite></cite>";
});

html.onkeyup = html.onkeydown = function(){
    document.getElementById("live").innerHTML = this.value;

    let counting = html.value.length; 
    let count = max-live.textContent.length;
    document.getElementById("char_count").innerHTML = count; 
        if (count == 0) {
            html.setAttribute('maxlength', counting)
        } else {
            html.setAttribute('maxlength', '')
        }

        const percent = 100*live.textContent.length/max;

        progress_bar.style.setProperty('width', percent+'%');
            if (percent >= 0 && percent < 50) {
                progress_bar.style.backgroundColor = "forestgreen"; 
            }
            if (percent >= 50 && percent < 80) {
                progress_bar.style.backgroundColor = "lightsalmon"; 
            }
            if (percent >= 80 && percent < 100) {
                progress_bar.style.backgroundColor = "Red"; 
            }
}

/* css.onkeyup = css.onkeydown = function(){
    document.getElementById("live").innerHTML = this.value;
} */


