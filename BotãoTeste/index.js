const oi = "Oi,";
const tudobem = "tudo bem?";
const button = document.getElementById("button");

function fale(){
    return oi + tudobem;
}

button.addEventListener("click", function(){
    document.body.innerHTML += `<p>${fale(oi, tudobem)}</p>`;
});


