function commonCharacters(string1, string2) {
    var charactersDict = {};
    var commonArray = [];
    for(var i=0; i < string1.length; i++) {
        charactersDict[string1[i]] = string1[i];
    }

    for(var j=0; j < string2.length; j++) {
        if( charactersDict.hasOwnProperty(string2[j]) ) {
            commonArray.push(string2[j]);
        }
    }

    console.log(`Common Letters: ${commonArray}`);
}


commonCharacters("house", "computers");
commonCharacters("", "");
commonCharacters("", "kim");
commonCharacters("tom", "come");
commonCharacters("tomato", "potato");

