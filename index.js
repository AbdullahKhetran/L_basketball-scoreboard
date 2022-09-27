let hp1 = document.getElementById("h-p1");
let hp2 = document.getElementById("h-p2");
let hp3 = document.getElementById("h-p3");

let gp1 = document.getElementById("g-p1");
let gp2 = document.getElementById("g-p2");
let gp3 = document.getElementById("g-p3");

let homeScore = document.getElementById("home-score");
let guestScore = document.getElementById("guest-score");

homePoints = 0;
guestPoints = 0;

/* console.log(homePoints);
console.log(guestPoints);
console.log(typeof homePoints);
console.log(typeof guestPoints);
 */
function homeScore1() {
    homePoints += 1;
    // console.log("homeScore +1 is clicked");
    homeScore.textContent = homePoints;
};

function homeScore2() {
    homePoints += 2;
    // console.log("homeScore +2 is clicked");
    homeScore.textContent = homePoints;
};

function homeScore3() {
    homePoints += 3;
    // console.log("homeScore +3 is clicked");
    homeScore.textContent = homePoints;
};


function guestScore1() {
    guestPoints += 1;
    // console.log("guestScore +1 is clicked");
    guestScore.textContent = guestPoints;
};

function guestScore2() {
    guestPoints += 2;
    // console.log("guestScore +2 is clicked");
    guestScore.textContent = guestPoints;
};

function guestScore3() {
    guestPoints += 3;
    // console.log("guestScore +3 is clicked");
    guestScore.textContent = guestPoints;
};

