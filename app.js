var pinyinVowelsArray = {
  a: ["ā", "á", "ǎ", "à"],
  e: ["ē", "é", "ě", "è"],
  i: ["ī", "í", "ǐ", "ì"],
  o: ["ō", "ó", "ǒ", "ò"],
  u: ["ū", "ú", "ǔ", "ù"],
  v: ["ǖ", "ǘ", "ǚ", "ǜ"]
}


function makeArray(word){
  //break string into an array and reverse
 let wordArray = word.split("").reverse()
 //determine the tone of the word
 toneNumber = wordArray[0]

//Determine which letter should have the tone according to pinyin rules
 for (i=0; i< wordArray.length; i++){
  //  A and e trump all other vowels and always take the tone mark.
   if (wordArray[i] == "a" || wordArray[i] == "e"){
     targetVowel = wordArray[i]
     break
   }
   // In the combination ou, o takes the mark.
    else if(wordArray[i]=="o" && wordArray[i+1] == "u"){
      targetVowel = wordArray[i]
      break
    }
    // In all other cases, the final vowel takes the mark.
    else if (wordArray[i] == "o" || wordArray[i] == "i" || wordArray[i] == "u"){
     targetVowel = wordArray[i]
   }
 }
 console.log(wordArray)
 console.log(targetVowel)
 console.log(toneNumber)
 getPinyin(targetVowel, toneNumber, wordArray)
 }

function getPinyin(targetVowel, toneNumber, wordArray){
  console.log(wordArray)
  pinyinVowel = pinyinVowelsArray[targetVowel][toneNumber -1]
  console.log(wordArray.indexOf(targetVowel))
  wordArray.splice(wordArray.indexOf(targetVowel),1,pinyinVowel)
  console.log(wordArray)
  wordArray.splice(0,1)
  let newWord = wordArray.reverse().join("")
  console.log(newWord)
}

 //find the proper tone in the object

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
