const moves = document.getElementById("moves-count");
const timeValue = document.getElementById("time");
const startButton =document.getElementById("start");
const stopButton = document.getElementById("stop");
const gameContainer = document.querySelector(".game-container");
const result = document.getElementById("result");
const controls = document.querySelector(".controls-container");

let cards = 0;
let interval = "";
let firstCard = false;
let secondCard = false;

//Items Array
const items = [
    {name:"chucky", image:"./images/chunky.png"}, 
    {name:"susie", image:"./images/susie.png"},
    {name:"raptar", image:"./images/raptar.png"},
    {name:"phillip", image:"./images/phillip.png"},
    {name:"lillian", image:"./images/lillian.png"},
    {name:"spike", image:"./images/spike.png"},
    {name:"dil", image:"./images/dil.png"},
    {name:"didi", image:"./images/didi.png"},
    {name:"stu", image:"./images/stu.png"},
    {name:"angelica", image:"./images/angelica.png"},
];