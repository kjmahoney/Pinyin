var pinyinLetters = {
  a: ["ā", "á", "ǎ", "à"],
  e: ["ē", "é", "ě", "è"],
  i: ["ī", "í", "ǐ", "ì"],
  o: ["ō", "ó", "ǒ", "ò"],
  u: ["ū", "ú", "ǔ", "ù"],
  v: ["ǖ", "ǘ", "ǚ", "ǜ"]
}


function makeArray(word){
 let wordArray = word.split("").reverse()
 toneNumber = wordArray[0]

 for (i=0; i< wordArray.length; i++){
   if (wordArray[i] == "a" || wordArray[i] == "e"){
     targetVowel = wordArray[i]
     break
   }
    else if(wordArray[i]=="o" && wordArray[i+1] == "u"){
      targetVowel = wordArray[i]
      break
    }
    else if (wordArray[i] == "o" || wordArray[i] == "i" || wordArray[i] == "u"){
     targetVowel = wordArray[i]
   }
 }
 console.log(targetVowel)
 console.log(toneNumber)
 }

// function getTone(wordArray){
//   let toneNumber = wordArray[0]
// }
//
// function replaceLetter(wordArray){
//
// }

// x = targetVowel
// pinyinLetters[x][toneNumber -1]

//split arrays by their numbers thus making multiple items, then .map them

// A and e trump all other vowels and always take the tone mark. There are no Mandarin syllables in Hanyu Pinyin that contain both a and e.
// In the combination ou, o takes the mark.
// In all other cases, the final vowel takes the mark.
