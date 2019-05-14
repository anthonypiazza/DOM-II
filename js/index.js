// Your code goes here

//  Using the 10 unique events, find ways to update the DOM in creative ways. 
//  For example you could change colors, animate objects, remove objects, etc.
//  Nest two similar events somewhere in the site and prevent the event propagation properly
//  Stop the navigation from items from refreshing the page by using preventDefault()
const entireSite = document.querySelector('html');


const imgMap = document.querySelector('.img-content');
imgMap.addEventListener('mouseover', function(eventObject){
    console.log(`${eventObject} was moused over!`);
    entireSite.style.background = 'gray';
    header.style.background = 'gray';
    entireSite.style.color = 'white';
    header.style.color = 'white';
});


const btn = document.querySelector('.btn');
btn.addEventListener('dblclick', function(eventObject){
    console.log(`${eventObject} was dblclicked!`)
    btn.style.border = '5px solid red';
});


const funBusPic = document.querySelector('.intro img');
funBusPic.addEventListener('drag', function(eventObject){
    console.log(`${eventObject} was dragged!`);
    funBusPic.style.height = "150px";
    funBusPic.style.padding = '0px 20%';
});


const boatPic = document.querySelector('.inverse-content > .img-content');
boatPic.addEventListener('wheel', function(eventObject){
    console.log(`${eventObject} was wheeled over!`)
    boatPic.style.width = '100%';
});

const copyrightText = document.querySelector('footer p');

const copyright = document.querySelector('footer');
copyright.addEventListener('copy', function(eventObject){
    console.log(`${eventObject} was copied!`)
    copyright.style.background = 'black';
    copyrightText.style.color = 'white';
});


const header = document.querySelector('header');
header.addEventListener('mouseleave', function(eventObject){
    console.log(`${eventObject} was moused off of!`)
    header.style.width = '80%';
    header.style.padding = '0px 20%';
});


const bottomContent = document.querySelector('.content-destination');
bottomContent.addEventListener('mousedown', function(eventObject){
    console.log(`${eventObject} was moused down!`)
    bottomContent.style.background = 'beige';
    bottomContent.style.color = 'black';
    bottomContent.style.padding = '10px 5%';
});


const buttonSection = document.querySelector('.content-pick');
buttonSection.addEventListener('contextmenu', function(eventObject){
    console.log(`${eventObject}'s context menu was opened!`)
    btn.style.background = 'black';
});


const middleText = document.querySelector('.inverse-content > .text-content');
middleText.addEventListener('auxclick', function(eventObject){
    console.log(`${eventObject} was auxclicked!`)
    boatPic.style.width = '50%';
});


const gondolaPic = document.querySelector('.content-destination > img');
gondolaPic.addEventListener('dragstart', function(eventObject){
    console.log(`${eventObject} began being dragged!`)
    gondolaPic.style.height = "auto";
});