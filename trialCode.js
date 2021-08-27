function readyNow() {
    $(".button").on('click', addBlock)
}

function addBlock (){
    console.log($(this));
    
    if ($("#red-button")) {
        console.log('Adding Red Block');
        $(".content").append(`<div class = "red block"></div>`);
        $("#red-counter").append(`Red counter: ${counter.redBlocks}`)
    } //else if ($("#green-button")) {
        //console.log('Adding Green Block');
        //$(".content").append(`<div class = "green block"></div>`);
        //$("#green-counter").append(`Green counter: ${counter.greenBlocks}`)
   // }
}