function automaticText() {
    $(document).ready(function() {
        var initialText = "Hello! My name is Phat Tran, welcome to my portfolio.";
        $("#automaticText-container").text(initialText);
        var text = "";
        var i = 0;
        var delay = 100; // delay in milliseconds
        
        function type() {
            if (i < initialText.length) {
                text += initialText[i];
                if(initialText[i] === "!") {
                    text += "<br>";
                }
                if(i === 27) {
                    text += "<br>";
                }
                $("#automaticText-container").html(text);
                i++;
                setTimeout(type, delay);
            }
        }
        type();
    });
}