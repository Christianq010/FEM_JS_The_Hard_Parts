// Starting excercise during lectures

let user1 = {
    name: 'Will',
    score: 3,
    increment: function() {
        user.score++;
    }
};

user1.increment(); // user1.score => 4

// Create Objects using functions

function userCreator(name, score) {
    let newUser = {};
    newUser.name = name;
    newUser.score = score;
    newUser.increment = function() {
        newUser.score++;
    };
    return newUser;
}

//later

let user1 = userCreator("Will", 3);
let user2 = userCreator("Time", 5);

user1.increment();
user2.increment();