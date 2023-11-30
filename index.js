const keys = document.querySelectorAll(".key");

const soundMap = {
    "c": new Audio("./sounds/C.wav"),
    "d": new Audio("./sounds/D.wav"),
    "e": new Audio("./sounds/E.wav"),
    "f": new Audio("./sounds/F.wav"),
    "g": new Audio("./sounds/G.wav"),
    "a": new Audio("./sounds/A.wav"),
    "b": new Audio("./sounds/B.wav"),
    "c1": new Audio("./sounds/C1.wav")
}

const noteArray = Object.keys(soundMap);
const soundArray = Object.values(soundMap);
let currentSound;

for (const key of keys){
    key.addEventListener("mousedown", function () {
        key.classList.add("clicked");
    });
    key.addEventListener("mouseup", function () {
       setTimeout(function() {
        keys.forEach(keyElement => {
            keyElement.classList.remove("clicked");
            });
            }, 100);
    });
    const keyLetter = Array.from(key.classList).find(className => soundMap.hasOwnProperty(className));
    if (key.classList.contains(keyLetter)) {
        key.addEventListener("click", function() {
            if (currentSound) {
            currentSound.pause();
            currentSound.currentTime = 0;
            };
            soundMap[keyLetter].play();
            currentSound = soundMap[keyLetter];
            });
    };
};

document.addEventListener("keydown", function(event) {
    pressed = event.key;
    if (/^[1-8]$/.test(event.key)) {
        if (currentSound) {
        currentSound.pause();
        currentSound.currentTime = 0;
        };
        soundArray[pressed - 1].play();
        currentSound = soundArray[pressed - 1];
        document.querySelector(`.${noteArray[pressed - 1]}`).classList.add("clicked");
       
       setTimeout(function() {
        keys.forEach(keyElement => {
            keyElement.classList.remove("clicked");
            });
            }, 100);
       
    };
});