var pinyinVowelsArray = {
  a: ["ā", "á", "ǎ", "à"],
  e: ["ē", "é", "ě", "è"],
  i: ["ī", "í", "ǐ", "ì"],
  o: ["ō", "ó", "ǒ", "ò"],
  u: ["ū", "ú", "ǔ", "ù"],
  v: ["ǖ", "ǘ", "ǚ", "ǜ"]
}

//break string into an array and reverse
function toPinyin(word){
  let wordArray = word.split("")
  selectVowel(wordArray)
}

//Determine which letter should have the tone according to pinyin rules
function selectVowel(wordArray){

  for (i=0; i< wordArray.length; i++){
    //  a and e trump all other vowels and always take the tone mark.
    if (wordArray[i] == "a" || wordArray[i] == "e"){
      let targetVowel = wordArray[i]
      getPinyin(targetVowel, wordArray)
      break
    }
    // look to see if the following vowel is an a or an e
    else if (wordArray[i+1] == "a" || wordArray[i+1] == "e"){
      let targetVowel = wordArray[i+1]
      getPinyin(targetVowel, wordArray)
      break
    }
    // In the combination ou, o takes the mark.
    else if(wordArray[i]=="o" && wordArray[i+1] == "u"){
      let targetVowel = wordArray[i]
      getPinyin(targetVowel, wordArray)
      break
    }
    // In all other cases, the final vowel takes the mark.
    else if(wordArray[i] == "o" || wordArray[i] == "i" || wordArray[i] == "u"){
      let targetVowel = wordArray[i]
      getPinyin(targetVowel, wordArray)
    }
  }
}

function getPinyin(targetVowel, wordArray){
  //determine the tone of the word
  let toneNumber = wordArray[wordArray.length-1]
  let pinyinVowel = pinyinVowelsArray[targetVowel][toneNumber -1]
  wordArray.splice(wordArray.indexOf(targetVowel),1,pinyinVowel)
  wordArray.splice((wordArray.length-1),1)
  let newWord = wordArray.join("")
  console.log(newWord)
}

function chop(words){
  wordsNew = words.split(/(?=[\s=\d])/);
  console.log(wordsNew)
}


// A and e trump all other vowels and always take the tone mark. There are no Mandarin syllables in Hanyu Pinyin that contain both a and e.
// In the combination ou, o takes the mark.
// In all other cases, the final vowel takes the mark.
