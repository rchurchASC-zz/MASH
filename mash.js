const process = require('process');
function getHome(){
    const homes = ["Mansion", "Apartment", "Shack", "House", "Box"];
    homes.push(process.argv[2])
    if (typeof process.argv[2] == 'undefined'){
        return "(we need input)"
    }else{
        return homes[Math.floor(Math.random() * homes.length)];
    }
}
function getChildrenCount(){
    const rand = Math.random()
    if (rand > 0.5){
        return process.argv[3]
    }else if(typeof process.argv[3] == 'undefined'){
        return "(we need input)"
    }else{
        return Math.floor(Math.random() * 69);
    }
}
function getCar(){
    const cars = ["Lambo", "Bugatti", "Tesla", "Dodge Challenger"];
    cars.push(process.argv[4])
    if (typeof process.argv[4] == 'undefined'){
        return "(we need input)"
    }else{
        return cars[Math.floor(Math.random() * cars.length)];
    }
}
function career(){
    const options = ["Game Developer", "Web Developer", "Professional Athlete", "Music Artist"]
    options.push(process.argv[5])
    if (typeof process.argv[5] == 'undefined'){
        return "(we need input)"
    }else{
        return options[Math.floor(Math.random() * options.length)];
    }
}
function mash(){
    return "You will live in a " + getHome() + ", you will have " + getChildrenCount() + " kids, you'll drive a " + getCar() + ", and you'll be a " + career() + "!"
}
console.log(mash()); 
