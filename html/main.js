var box;
var text;

$(document).ready(function() {
    box = $("#lockContainer");
    text = $("#text");

    window.addEventListener('message', function(event){
		var data = event.data;
        switch (data.action) {
            case "show":
                box.show();
                break;
            case "hide":
                box.hide();
                break;
            case "unlock":
                unlock();
                break;
            case "lock":
                lock();
                break;
            default:
                console.log("An unknown nui message was received: " + data.Action);
                break;
        }
    });
});

function lock(){
    box.removeClass("unlocked");
    box.addClass("locked");
    text.text("Locked");
}

function unlock(){
    box.removeClass("locked");
    box.addClass("unlocked");
    text.text("Unlocked");
}