function userCreator (name, score) {
    let newUser = Object.create(userFunctionStore);
    newUser.name = name;
    newUser.score = score;
    return newUser;
  };

let userFunctionStore = {
    increment: function(){this.score++;},
    login: function(){console.log("You're loggedin");}
};

let user1 = userCreator("Will", 3);
let user2 = userCreator("Tim", 5);
user1.increment();

// Use the 'new' keyword

let user1 = new UserCreator('Will', 3);

// 

