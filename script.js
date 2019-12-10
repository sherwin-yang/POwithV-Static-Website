// $(document).ready(function () {
//     $("#slideshow > div:gt(0)").hide();

//     setInterval(function () {
//         $("#slideshow > div:first").fadeOut().next().fadeIn().end().appendTo("#slideshow")
//     }, 1000);
// });

var rex = /^[a-zA-Z\-0-9]+$/;

function validation() {
    if (!checkNameIsFilled()) {
        alert('Name must be filled!');
        event.preventDefault();
    }
    else if (checkNameIsNumber()) {
        alert("Name can't contain numbers!");
        event.preventDefault();
    }
    else if (!checkRateIsFilled()) {
        alert("Rate must be filled!");
        event.preventDefault();
    }
    else if (!checkCommentsWordsMoreThanFive()) {
        alert("Comments must be contained more than 5 words!");
        event.preventDefault();
    }
    else if (!checkFeedbacksCharactersMoreThanTwenty()) {
        alert("Feedbacks must be contained with more than 20 characters!");
        event.preventDefault();
    }
    else if (!publishConfirmation()) {
        event.preventDefault();
    }
    else {
        alert("Your response have been saved");
    }
}

function checkNameIsFilled() {
    var name = document.getElementById('name').value;
    name = name.replace(/\s/g, '');

    if (name == '') {
        return false;
    }
    else {
        return true;
    }
}

function checkNameIsNumber() {
    var name = document.getElementById('name').value;
    name = name.replace(/\s/g, '');
    var nameIsNumber = false;

    for (let i = 0; i < name.length; i++) {
        if (!isNaN(name[i])) {
            nameIsNumber = true;
        }
    }

    if (nameIsNumber == true) {
        return true;
    }
    else {
        return false;
    }
}

function checkRateIsFilled() {
    var rate = document.getElementById('rate').value;

    if (rate == ' ') {
        return false;
    }
    else {
        return true;
    }
}

function checkCommentsWordsMoreThanFive() {
    var comments = document.getElementById('comments').value;
    var words = 0;

    for (let i = 0; i < comments.length; i++) {
        if (comments[i].match(rex) && comments[i + 1] == ' ') {
            words++;
        }
        else if (comments[i].match(rex) && comments[i + 1] == null) {
            words++;
        }
    }

    if (words > 5) {
        return true;
    }
    else {
        console.log(words);
        return false;
    }
}

function checkFeedbacksCharactersMoreThanTwenty() {
    var feedbacks = document.getElementById('feedbacks').value;
    var characters = 0;

    for (let i = 0; i < feedbacks.length; i++) {
        if (feedbacks[i].match(rex)) {
            characters++;
        }
    }

    if (characters > 20) {
        return true;
    }
    else {
        return false;
    }
}

function publishConfirmation() {
    var confirmation = 'No';
    
    if(document.getElementById('yes').checked) {
        confirmation = 'Yes';
    }

    if(confirm('Publish Confirmation : ' + confirmation) == true) {
        return true;
    }
    else {
        return false;
    }
}

// Prevent space input for 'E-mail'
function checkSpace(event) {
    if (event.which == 32) {
        event.preventDefault();
        return false;
    }
}