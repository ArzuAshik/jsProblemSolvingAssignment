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

}

function tinyFriend(friends){

}

console.log(feetToMile(65));

console.log(woodCalculator(1, 3, 5));