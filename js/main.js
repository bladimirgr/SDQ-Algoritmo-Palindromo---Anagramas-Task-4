const text = document.getElementById("text")

function checkPalindrome() {

    const StringValue = text.value.split('').reverse().join('')

    text.value = '';

    if(text.value === StringValue) {

        alert("Es Palindrome")

    } else {

        let text2 = prompt("No es Palindrome:  Coloque otra palabra");
    
        checkAnagrama(text.value, text2)

    }
}

function checkAnagrama(word, word2) {

    const value = word.toLowerCase().split("").sort().join("") === word2.toLowerCase().split("").sort().join("");

    if( value === true ) {

        alert("Es un Anagrama");

    } else {

        alert("No es un Anagrama");

    }

}

