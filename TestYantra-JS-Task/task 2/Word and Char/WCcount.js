function wordCounter(){
    var texto = document.getElementById('text').value;
    numChar = texto.length;
    
    startWhite = /^[]+/;
    endWhite = /$/;
    variusWhite = /[]+/g;
    texto = texto.replace(startWhite, '');
    texto = texto.replace(endWhite, '');
    texto = texto.replace(variusWhite, '');
    var textoDivided = texto.split(' ');
    var numOfWords = textoDivided.length;
    typeChar = (numChar ==1)? 'character': 'characters';
    typeWord = (numOfWords == 1)? 'word' : 'words';
    
   maxchar = 5000;
    if (numChar < maxchar){
        document.getElementById('totalChar').value=numChar;
        document.getElementById('totalWord').value=numOfWords;
    }
    else{
        alert('Only '+maxchar+ ' characters are allowed');
    }

}