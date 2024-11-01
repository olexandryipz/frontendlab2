let text = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt ea earum incidunt minima nihil. Blanditiis consectetur cumque debitis delectus dolor dolorem dolorum, eos laboriosam, modi nemo, quasi quos sint voluptatibus!";

let task1 = text[12] + text[6] + text[18] + text[25];
console.log(task1);

let task2LowerCase = text.toLowerCase();
console.log(task2LowerCase);

let positions = [];
let position = text.indexOf('in');
while (position !== -1) {
    positions.push(position);
    position = text.indexOf('in', position + 1);
}
console.log(positions);

let separatedWordsArray = text.split(' ');
console.log(separatedWordsArray);

let reversedText = text.split('').reverse().join('');
console.log(reversedText);

function ucFirst(txt) {
    let newTxt = txt.charAt(0).toUpperCase() + txt.slice(1);
    return newTxt;
}
console.log(ucFirst('some text'));