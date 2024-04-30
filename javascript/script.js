const menssagemInput = document.getElementById("textInput");

menssagemInput.addEventListener("keydown", function(event){
    if(event.key == "Enter")
    getMenssagem();
})

function getMenssagem(){
    document.getElementById("output").innerHTML = menssagemInput.value;
    menssagemInput = ""
}