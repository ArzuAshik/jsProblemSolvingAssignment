function feetToMile(feet){
    if(feet >= 0){
        const mile = feet / 5280;
        return parseFloat(mile).toFixed(5);
    }
    return "Please Enter a valid Value of Foot";
}

function woodCalculator(chair, table, bed){
    if(chair >= 0 && table >= 0 && bed >= 0){
        const totalWood = chair + (table * 3) + (bed * 5);
        return totalWood;
    }
    return "Please Enter values equale or higher then zero";
}

function brickCalculator(floor){
    let brick = 0;
    if(floor > 0 && floor <= 10){
        brick = floor * 15000;
    }
    else if(floor > 10 && floor <= 20){
        floor = floor - 10;
        brick = (floor * 12000) + 150000;
    }
    else if(floor > 20){
        floor = floor - 20;
        brick = (floor * 10000) + 270000;
    }else{
        return "Could not be a negative value."
    }
    return brick;
}

function tinyFriend(friends){
    if(friends.length > 0){
        for(var i = 0; i < friends.length; i++){
            if(friends[i].length != 0){
                var check = 1;
                break;
            }
        }

        if(check == 1){            
            let tinyFriend = friends[0];
            for(i = 0; i < friends.length; i++){
                if(tinyFriend.length > friends[i].length){
                    tinyFriend = friends[i];
                }
            }
            return tinyFriend;
        }
    }
    return "No Friend Found";
}


// inputs
const 
foot = 45,
chair = 5, table = 2, bed = 2,
floor = 41;
arrayOfFriends = ["Md. Ashikur Rahman Arzu", "xyz", "seess", "AR", "Arzu", "Ashik", "Anando"];

// Call Functions
const mile = feetToMile(foot);
const wood = woodCalculator(chair, table, bed);
const brick = brickCalculator(floor);
const littleFriend = tinyFriend(arrayOfFriends);

// outputs
console.log(mile);
console.log(wood);
console.log(brick);
console.log(littleFriend);