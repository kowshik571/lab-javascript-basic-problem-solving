// Important Note - No Built-in functions to be used
// Progression 1: Names and Input

// 1.1 Create a variable `ProGrad-1` with the driver's name.
              var string1="saketh"
		// 1.2 Print `"The driver's name is XXXX"`.
        console.log(string1);
// 1.3 Create a variable `ProGrad-2` with the navigator's name.
           var string2="kowshik"
// 1.4 Print `"The navigator's name is YYYY"`.
          console.log(string2);

// Progression 2: Control Statements - 1
// 2.1. Depending on which name is longer, print:
// - The driver has the longest name, it has XX characters. or
// - It seems that the navigator has the longest name, it has XX characters. or
// - Wow, you both have equally long names, XX characters!.
         let number1=string1.length,
		    number2=string2.length;
			 if(number1=>number2)
			 {
				 console.log(number1)
			 }
			 else
			 {
				 console.log(number2)
			 }

// 2.2. Check if the string contains vowels or not.
// - If it contains vowels, print the number of name, and also print the vowel letters along with the vowel characters. or
// - print no vowels
n
    var line[10]={'k','o','w','s','h','i','k'}
    let vowels, consonant, digit, space;
    vowels = consonant = digit = space = 0;
    for (int i = 0; line[i] != '\0'; ++i) {
        if (line[i] == 'a' || line[i] == 'e' || line[i] == 'i' ||
            line[i] == 'o' || line[i] == 'u' || line[i] == 'A' ||
            line[i] == 'E' || line[i] == 'I' || line[i] == 'O' ||
            line[i] == 'U') {
            ++vowels;
        } else if ((line[i] >= 'a' && line[i] <= 'z') || (line[i] >= 'A' && line[i] <= 'Z')) {
            ++consonant;
        } else if (line[i] >= '0' && line[i] <= '9') {
            ++digit;
        } else if (line[i] == ' ') {
            ++space;
        }
    }
  console.log(vowels)
   console.log(consonant)
   console.log(digit)

// 2.3. Check if the string contains uppercase and lowercase characters Xx
// - Print the number of upper case characters
// - Print the number of lower case characters

   var str="kowshik";
    let countL,countU;
    let counter;
        countL=countU=0;
      for(counter=0;str[counter]!='\0';counter++){
         if(str[counter]>='A' && str[counter]<='Z')
            countU++;
        else if(str[counter]>='a' && str[counter]<='z')
            countL++;   
    }
    console.log(countL)
   console.log(countU)

// Progression 3: Control Statements - 2
// 3.1 Print all the characters of the driver's name, separated by a space and in capitals i.e. "ProGrad"


// 3.2 Print all the characters of the navigator's name, in reverse order. i.e. "darGorP"
var str="kowshik";
console.log(reverse.str)
// 3.3 Merge both the characters such that driver is followed by Navigator like "ProGrad FACEPrep"
var str1="kowshik"
var str2="saketh"
str1+str2;
// - Now bring the FACEPrep to the start and send ProGrad to the back like "FACEPrep ProGrad"

// 3.3 Depending on the lexicographic order of the strings, print:
// - The driver's name goes first.
// - Yo, the navigator goes first definitely.
// - What?! You both have the same name?

let number1=string1.length,
		    number2=string2.length;
			 if(number1>number2)
			 {
				 console.log(string1)
			 }
			 else
			 {
				 console.log(string2)
			 }
			 else
			 {
				 console.log(samename)
			 }
			 
// Bonus Time!
// Bonus 1:
// Go to lorem ipsum generator and:
// Generate 3 paragraphs. Store the text in a variable type of string.
// Make your program count the number of words in the string.
// Make your program count the number of times the Latin word et appears.
// Bonus 2:
// Create a new variable phraseToCheck and have it contain some string value. Write a code that will check if the value we assigned to this variable is a Palindrome. Here are some examples of palindromes:
var str1,str2,str3;
str1="lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum"
str2="lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum"
str3="lorem ipsum lorem ipsum lorem ipsum lorem ipsum loerm ipsum lorem ipsum lorem ipsum"
var number1=str1.count;
var number2=str2.count;
var number3=str3.count;
console.log(number1)
console.log(number2)
console.log(number3)

// "A man, a plan, a canal, Panama!"
// "Amor, Roma"
// "race car"
// "stack cats"
// "step on no pets"
// "taco cat"
// "put it up"
// "Was it a car or a cat I saw?" and "No 'x' in Nixon".
// Write a JavaScript function that checks whether a passed string is palindrome or not? 

function check_Palindrome(str_entry){
   var cstr = str_entry.toLowerCase().replace(/[^a-zA-Z0-9]+/g,'');
	var ccount = 0;
	if(cstr==="") {
		console.log("Nothing found!");
		return false;
	}
	if ((cstr.length) % 2 === 0) {
		ccount = (cstr.length) / 2;
	} else {
		if (cstr.length === 1) {
			console.log("Entry is a palindrome.");
			return true;
		} else {
			ccount = (cstr.length - 1) / 2;
		}
	}
	for (var x = 0; x < ccount; x++) {
		if (cstr[x] != cstr.slice(-1-x)[0]) {
			console.log("Entry is not a palindrome.");
			return false;
		}
	}
	console.log("The entry is a palindrome.");
	return true;
}
check_Palindrome('Was it a car or a cat I saw?" and "No 'x' in Nixon')
check_Palindrome('put it up')
check_Palindrome('taco cat')
check_Palindrome('step on no pets')
check_Palindrome('stack cats')
check_Palindrome('step on no pets')
check_Palindrome('stack cats')
check_Palindrome('race car');
check_Palindrome('Amor, Roma');
check_Palindrome('A man, a plan, a canal, Panama!');

// Hint: If you use Google to help you to find solution to this iteration, you might run into some solutions that use advanced string or array methods (such as join(), reverse(), etc.). However, try to apply the knowledge you currently have since you can build pretty nice solution with just using for loop, if-else statements with some break and continue... Just sayin' 
