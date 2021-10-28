let users = {
    Alan: {
        age: 27,
        online: true
    },
    Jeff: {
        age: 32,
        online: true
    },
    Sarah: {
        age: 48,
        online: true
    },
    Ryan: {
        age: 19,
        online: true
    }
};

function isEveryoneHere(userObj) {
    // Only change code below this line

    const names = ["Alan", "Jeff", "Sarah", "Ryan"];

    for (const name of names) {
        if (!userObj.hasOwnProperty(name)) {
            return false;
        }
    }
    
    return true;

    // Only change code above this line
}

console.log(isEveryoneHere(users));