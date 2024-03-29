let isStyle = true;


document.getElementById("boldBtn").addEventListener('click', function(){
    let areaText = document.getElementById("textArea");
    if (isStyle) {
        areaText.style.fontWeight = "normal";
    }
    else{
        areaText.style.fontWeight = "bold";
    }
    isStyle = !isStyle;
})

document.getElementById("italicBtn").addEventListener('click', function(){
    let areaText = document.getElementById("textArea");
    if (isStyle) {
        areaText.style.fontStyle = "normal";
    } else {
        areaText.style.fontStyle = "italic";
    }
    isStyle = !isStyle;
})
document.getElementById("underLineBtn").addEventListener('click', function(){
    let areaText = document.getElementById("textArea");
    if (isStyle) {
        areaText.style.textDecoration = "none";
    } else {
        areaText.style.textDecoration = "underline";
    }
    isStyle = !isStyle;
})

document.getElementById("leftBtn").addEventListener('click', function(){
    let areaText = document.getElementById("textArea");
    areaText.style.textAlign = 'left';
})
document.getElementById("centerBtn").addEventListener('click', function(){
    let areaText = document.getElementById("textArea");
    areaText.style.textAlign = 'center';
})
document.getElementById("rightBtn").addEventListener('click', function(){
    let areaText = document.getElementById("textArea");
    areaText.style.textAlign = 'right';
})

document.getElementById("sizeInputField").addEventListener('input', function(){
    let areaText = document.getElementById("textArea");
    const inputField = document.getElementById("sizeInputField");
    const fontSize = inputField.value +'px';
    areaText.style.fontSize = fontSize;

})


document.getElementById("colorInputField").addEventListener('input', function(){
    let areaText = document.getElementById("textArea");
    const colorPicker = document.getElementById("colorInputField").value;
    areaText.style.color = colorPicker;
})