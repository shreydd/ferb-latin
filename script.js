var btn = document.querySelector('.btn-translate');
var inputText = document.querySelector('.inp-text');
var outputWindow = document.querySelector('.outputArea');
// var url = 'https://api.funtranslations.com/translate/ferb-latin.json';
var url = 'https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json';

function translateURL(text) {
    return url + '?' + 'text=' + text;
}


function translateHandler() {
    // console.log("heere");
    // outputWindow.innerHTML = inputText.value;

    fetch(translateURL(inputText))
        .then(response => response.json())
        .then(jsonData => {
            outputWindow.innerHTML = jsonData.contents.translated;
            // console.log(jsonData)
        })
}

btn.addEventListener('click', translateHandler);