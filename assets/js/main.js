
const strong = document.getElementById("strong");
const em = document.getElementById("em");
const span = document.getElementById("span");
const cite = document.getElementById("cite");

const text = document.getElementById("text");
const max = 200; 
const progress_bar = document.getElementById("progress_bar"); 

strong.addEventListener('click', () => {
    text.value +="<strong></strong>";
});

em.addEventListener('click', () => {
    text.value +="<em></em>";
});

span.addEventListener('click', () => {
    text.value +="<span></span>";
});

cite.addEventListener('click', () => {
    text.value +="<cite></cite>";
});

text.onkeyup = text.onkeydown = function(){
    document.getElementById("live").innerHTML = this.value;

    let counting = text.value.length; 
    let count = max-live.textContent.length;
    document.getElementById("char_count").innerHTML = count; 
        if (count == 0) {
            text.setAttribute('maxlength', counting)
        } else {
            text.setAttribute('maxlength', '')
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




