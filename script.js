var btn = document.querySelector('.btn-translate');
var inputText;
var outputWindow = document.querySelector('.outputArea');
var url = 'https://api.funtranslations.com/translate/ferb-latin.json';
// var url = 'https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json';

function translateURL(text) {
    return url + '?' + 'text=' + text
}

function getinput() {
    inputText = document.querySelector('.inp-text').value;

}

function translateHandler() {
    getinput();
    fetch(translateURL(inputText))
        .then(response => response.json())
        .then(json => {
            var translatedText = json.contents.translated;
            outputWindow.innerText = translatedText;
            console.log(json.contents.text);
        })
        .catch(errorHandler)
}

btn.addEventListener('click', translateHandler);

function errorHandler(error) {
    alert("Looks like there's an issue, visit us back again after an hour");
}