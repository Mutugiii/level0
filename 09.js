function printVowels(word) {
    var vowels = ["a", "e", "i", "o", "u"];
    var word = word.toLowerCase();
    var vowelsInWord = "";
    for(var i = 0; i < word.length; i ++) {
        if( vowels.includes(word[i]) ) {
            vowelsInWord += word[i];
        }
    }
    console.log(vowelsInWord);
}


printVowels("TOMATO");
printVowels("tomato");
printVowels("eleven");
printVowels("price");
printVowels("lEAves");
