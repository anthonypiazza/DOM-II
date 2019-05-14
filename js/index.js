// Your code goes here
// keydown
// drag / drop
// load
// focus
// resize
// scroll
// select

// Using the 10 unique events, find ways to update the DOM in creative ways. For example you could change colors, animate objects, remove objects, etc.
//  Nest two similar events somewhere in the site and prevent the event propagation properly
//  Stop the navigation from items from refreshing the page by using preventDefault()

const imgMap = document.querySelector('.img-content');
imgMap.addEventListener('mouseover', function(eventObject){
    console.log(`${eventObject} was moused over!`);
});


const btn = document.querySelector('.btn');
btn.addEventListener('dblclick', function(eventObject){
    console.log(`${eventObject} was dblclicked!`)
});


const funBusPic = document.querySelector('.intro img');
funBusPic.addEventListener('drag', function(eventObject){
    console.log(`${eventObject} was dragged!`);
});


const boatPic = document.querySelector('.inverse-content > .img-content');
boatPic.addEventListener('wheel', function(eventObject){
    console.log(`${eventObject} was wheeled over!`)
});


const copyright = document.querySelector('footer');
copyright.addEventListener('copy', function(eventObject){
    console.log(`${eventObject} was copied!`)
});


const header = document.querySelector('header');
header.addEventListener('mouseleave', function(eventObject){
    console.log(`${eventObject} was moused off of!`)
});


const bottomContent = document.querySelector('.content-destination');
bottomContent.addEventListener('mousedown', function(eventObject){
    console.log(`${eventObject} was moused down!`)
});


const buttonSection = document.querySelector('.content-pick');
buttonSection.addEventListener('contextmenu', function(eventObject){
    console.log(`${eventObject}'s context menu was opened!`)
});


const middleText = document.querySelector('.inverse-content > .text-content');
middleText.addEventListener('auxclick', function(eventObject){
    console.log(`${eventObject} was auxclicked!`)
});


const gondolaPic = document.querySelector('.content-destination > img');
gondolaPic.addEventListener('dragstart', function(eventObject){
    console.log(`${eventObject} began being dragged!`)
});