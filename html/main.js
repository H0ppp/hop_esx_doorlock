var box;
var text;

$(document).ready(function() {
    box = $("#lockContainer");
    text = $("#text");
    box.hide();

    window.addEventListener('message', function(event){
		var item = event.data;
		if (item.type === "show") {
            box.fadeIn(400);
            if (item.text.includes("Un")){
                unlock(item.text);
            } else {
                lock(item.text);
            }
        } else if (item.type === "hide") {
            box.fadeOut(400);
        }
    });
});

function lock(content){
    box.removeClass("unlocked");
    box.addClass("locked");
    text.text(content);
}

function unlock(content){
    box.removeClass("locked");
    box.addClass("unlocked");
    text.text(content);
}