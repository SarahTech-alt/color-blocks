console.log('ready');
/**
 * 
 * 
Add 4 buttons that read 'Red', 'Yellow', 'Green', and 'Blue'. When you click on those buttons, it should add a Color Block of that associated color to the DOM. Above the buttons, should be total counts for each colors relative to the number of times the button has been clicked, thus the total number of color blocks of that color.

 * 
 */

$(document).ready(readyNow);

function readyNow() {
    $("#red-button").on('click', addRedBlock)
    $("#green-button").on('click', addGreenBlock)
}

function addRedBlock() {
    console.log('Adding Red Block');
    $(".content").append(`<div class = "red block"></div>`)

}

function addGreenBlock() {
    console.log('Adding Green Block');
    $(".content").append(`<div class = "green block"></div>`)
}

function addYellowBlock() {
    console.log('Adding Yellow Block');
    $(".content").append(`<div class = "yellow block"></div>`)
}

function addBlueBlock() {
    console.log('Adding Blue Block');
    $(".content").append(`<div class = "blue block"></div>`)
}