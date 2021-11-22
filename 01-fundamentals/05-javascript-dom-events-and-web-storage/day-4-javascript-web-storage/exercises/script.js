window.onload = function() {
    
    let backgroundColourSelect = document.querySelector('.backgroundColour');
    let paragraphColourSelect = document.querySelector('.textColour');
    let fontSizeInput = document.querySelector('input[name="font-size"]');

    //1
    function changeBackgroundColour() {
        let mainContent = document.querySelector('#content');
        let selectedColour = backgroundColourSelect.selectedOptions[0];
        mainContent.style.backgroundColor = selectedColour.value;
        localStorage.setItem('5.4-background-color', selectedColour.value);
    }

    backgroundColourSelect.addEventListener('change', changeBackgroundColour);

    //2
    function changeParagraphColour() {
        let paragraphs = document.getElementsByTagName('p');
        let selectedColour = paragraphColourSelect.selectedOptions[0];

        for (let paragraph of paragraphs) {
            paragraph.style.color = selectedColour.value;
        }

        localStorage.setItem('5.4-font-colour', selectedColour.value);
    }

    paragraphColourSelect.addEventListener('change', changeParagraphColour);

    //3
    function changeFontSize() {
        let paragraphs = document.getElementsByTagName('p');
        let selectedSize = fontSizeInput.value;

        for (let paragraph of paragraphs) {
            paragraph.style.fontSize = selectedSize + 'px';
        }

        localStorage.setItem('5.4-font-size', selectedSize + 'px');
    }

    fontSizeInput.addEventListener('change', changeFontSize);

    let savedBackgroundColour = localStorage.getItem('5.4-background-color');
    let mainContent = document.querySelector('#content');
    mainContent.style.backgroundColor = savedBackgroundColour;

    let paragraphs = document.getElementsByTagName('p');

    let savedFontColour = localStorage.getItem('5.4-font-colour');
    for (let paragraph of paragraphs) {
        paragraph.style.color = savedFontColour;
    }

    let savedFontSize = localStorage.getItem('5.4-font-size');
    for (let paragraph of paragraphs) {
        paragraph.style.fontSize = savedFontSize;
    }
}
