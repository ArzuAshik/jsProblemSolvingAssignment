function feetToMile(feet){
    if(feet >= 0){
        const mile = feet / 5280;
        return mile;
    }else{
        return "Please Enter a valid Value of Foot";
    }
}

function woodCalculator(chair, table, bed){
    if(chair >= 0 && table >= 0 && bed >= 0){
        const totalWood = chair + (table * 3) + (bed * 5);
        return totalWood;
    }else{
        return "Please Enter values equale or higher then zero";
    }
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

}

console.log(feetToMile(65));

console.log(woodCalculator(1, 3, 5));

console.log(brickCalculator(25));