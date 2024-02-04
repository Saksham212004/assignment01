// Assignment 1 | COMP1073 Client-Side JavaScript

/* Variables
-------------------------------------------------- */
// Constants for main button query selectors
const noun1Button = document.getElementById('noun1');
const verbButton = document.getElementById('verb');
const adjectiveButton = document.getElementById('adjective');
const noun2Button = document.getElementById('noun2');
const settingButton = document.getElementById('setting');

// Constants for p tag to display query selectors
const choosenNoun1Para = document.getElementById('choosenNoun1');
const choosenVerbPara = document.getElementById('choosenVerb');
const choosenAdjectivePara = document.getElementById('choosenAdjective');
const choosenNoun2Para = document.getElementById('choosenNoun2');
const choosenSettingPara = document.getElementById('choosenSetting');

// Constants for final buttons and p tags
const playbackButton = document.getElementById('playback');
const randomButton = document.getElementById('random');
const storyPara = document.getElementById('story');
const studentIdPara = document.getElementById('studentId');
const studentId = "200551810";

// Declaring Variables for arrays
const nouns1 = ['The Turkey', 'Mom', 'Dad', 'The Dog','My Teacher', 'The Elephant ','The Cat'];
const verbs = ["sat on", "ate", "danced with", "saw","doesnt like","Kissed"];
const adjectives = ['a funny', 'a scary', 'a goofy', 'a slimy','a barking','a fat'];
const nouns2 = ['goat', 'monkey', 'fish', 'cow','frog','bug','worm'];
const settings = ['on the moon', 'on the chair', 'in my spaghetti', 'in my soup','on the grass','in my shoes'];

// Variables for count to grab array elements
let noun1Count = 0;
let verbCount = 0;
let adjectiveCount = 0;
let noun2Count = 0;
let settingCount = 0;

/* Functions
*/
function displayStudentId() {
    studentIdPara.textContent = "Student ID: " + studentId;
}
function noun1_on_click() {
    choosenNoun1Para.textContent = nouns1[noun1Count];
    noun1Count = (noun1Count + 1) % nouns1.length;
}

function verb_on_click() {
    choosenVerbPara.textContent = verbs[verbCount];
    verbCount = (verbCount + 1) % verbs.length;
}

function adjective_on_click() {
    choosenAdjectivePara.textContent = adjectives[adjectiveCount];
    adjectiveCount = (adjectiveCount + 1) % adjectives.length;
}

function noun2_on_click() {
    choosenNoun2Para.textContent = nouns2[noun2Count];
    noun2Count = (noun2Count + 1) % nouns2.length;
}

function setting_on_click() {
    choosenSettingPara.textContent = settings[settingCount];
    settingCount = (settingCount + 1) % settings.length;
}
function displayStudentId() {
    studentIdPara.textContent = "Student ID: " + studentId;
}
// concatenate the user story and display
function playback_on_click() {
    storyPara.textContent = `${choosenNoun1Para.textContent}  ${choosenVerbPara.textContent} ${choosenAdjectivePara.textContent} ${choosenNoun2Para.textContent} ${choosenSettingPara.textContent}.`;
}

// grabbing random element from arrays, concatenate and display
function random_on_click() {
    choosenNoun1Para.textContent = nouns1[Math.floor(Math.random() * nouns1.length)];
    choosenVerbPara.textContent = verbs[Math.floor(Math.random() * verbs.length)];
    choosenAdjectivePara.textContent = adjectives[Math.floor(Math.random() * adjectives.length)];
    choosenNoun2Para.textContent = nouns2[Math.floor(Math.random() * nouns2.length)];
    choosenSettingPara.textContent = settings[Math.floor(Math.random() * settings.length)];

    playback_on_click(); // Display the story after choosing random elements
}

/* Event Listeners
-------------------------------------------------- */
noun1Button.addEventListener('click', noun1_on_click);
verbButton.addEventListener('click', verb_on_click);
adjectiveButton.addEventListener('click', adjective_on_click);
noun2Button.addEventListener('click', noun2_on_click);
settingButton.addEventListener('click', setting_on_click);
playbackButton.addEventListener('click', playback_on_click);
randomButton.addEventListener('click', random_on_click);
document.addEventListener('DOMContentLoaded', displayStudentId);
