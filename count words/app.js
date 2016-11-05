var array = ['a', 'a', 'b', 'b', 'c'];


function wordCount(words) {
  var wordCount = {};
  words.forEach(function checkWords(val, index){
    if(wordCount [val]) {
      wordCount [val] ++;
    } else {
      wordCount [val] = 1;
    }
  });
  return wordCount;
}

function findMax(obj) {
  var max = 0;
  var word = 0;
  for (x in obj) {
    if (max < obj[x]){
      max = obj[x];
      word = x;
    } else if (max === obj[x]){
      if (word > x) {
        word = x;
      }
    }
  }
  console.log ("word:"+word+" "+"count:"+max);
  return word;
}

var words = wordCount(array);
var maxWord = findMax(words);

/*

function mostFrequentWord(words) {



  function findMax(obj) {
    var max;
    var word;
    for (var x in obj) {
      if (max < obj[x]){
        max = obj[x];
        word = max;
      } if else (max === obj[x]){
        if (word > x) {
          word = x;
        }
      }
    }
    console.log ("word:"+word+" "+"count:"+mac)
    return word;
  }

}
*/

/*


function mostFrequentWord(words) {
  // your code here
  // `words` is an array of strings.
  
  //create empty object
  var wordInfo = {};
  
  //check every word and count
  words.forEach( function checkWords (val , index) {
  	if (wordInfo [val]){
  		wordInfo [val] ++;
  	}
  	else {
  		wordInfo [val] = 1;
  	}
  });
  console.log(wordInfo);


  // Brute force
  for(o in wordInfo){
    console.log(wordInfo[o])
  }

  // object () (function (a, b) {
  // 	return b - a;
  // });

  // return wordInfo.keys [1];
  
}

*/


/* From here down, you are not expected to 
   understand.... for now :)  
   
   
   Nothing to see here!
   
*/

/*

function getTokens(rawString) {
  // returns an alphabetically sorted list of words, removing punctuation
  // characters
  return rawString.toLowerCase().split(/[ ,!.";:-]+/).filter(Boolean).sort();
}


// `getTokens` returns an alphabetically sorted list of words

(function testMostFrequentWord() {
 var spaceOddityText = 'Ground Control to Major Tom\n \
Ground Control to Major Tom\n \
Take your protein pills and put your helmet on\n \
Ground Control to Major Tom (ten, nine, eight, seven, six)\n \
Commencing countdown, engines on (five, four, three)\n \
Check ignition and may God\'s love be with you (two, one, liftoff)\n \
\n \
This is Ground Control to Major Tom\n \
You\'ve really made the grade\n \
And the papers want to know whose shirts you wear\n \
Now it\'s time to leave the capsule if you dare\n \
"This is Major Tom to Ground Control\n \
I\'m stepping through the door\n \
And I\'m floating in a most peculiar way\n \
And the stars look very different today\n \
For here\n \
Am I sitting in a tin can\n \
Far above the world\n \
Planet Earth is blue\n \
And there\'s nothing I can do\n \
\n \
Though I\'m past one hundred thousand miles\n \
I\'m feeling very still\n \
And I think my spaceship knows which way to go\n \
Tell my wife I love her very much she knows\n \
Ground Control to Major Tom\n \
Your circuit\'s dead, there\'s something wrong\n \
Can you hear me, Major Tom?\n \
Can you hear me, Major Tom?\n \
Can you hear me, Major Tom?\n \
Can you \"Here am I floating \'round my tin can\n \
Far above the moon\n \
Planet Earth is blue\n \
And there\'s nothing I can do\"';
  
 var expected = 'major';
 var actual = mostFrequentWord(getTokens(spaceOddityText));
 if (expected === actual) {
   console.log('SUCCESS: `mostFrequentWord` is working');
 }
 else {
   console.log('FAILURE: `mostFrequentWord` is not working');
 }
})();
*/