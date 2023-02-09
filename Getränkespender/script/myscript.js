$(document).ready(function(){
    var check = 0;
    var animation = 0;

    $("#apfel").click(function(){
        if(animation == 1){     /*Überprüfung ob eine Animation läuft*/
        }else if (check == 1) { /*Überprüfung ob das Glas gefüllt ist*/
            alert("Glas ist voll!")
        }else{
        check = 1;
        animation = 1;
        $(".strahl").css({backgroundColor: "#ffe053", top: 0})
        $(".strahl").animate({width: 6}, {queue: false, duration: 500});
        $(".strahl").animate({height: 210}, 1600);
        $(".füllung").css("backgroundColor", "#ffe053") /*Glas wird befüllt*/
        $(".füllung").delay(1500).animate({height: 160, top: 0}, 3000, "linear")
        $(".strahl").animate({height: 50},3000, "linear")
        $(".strahl").animate({top: 50, height: 0}, 100, function(){
        animation = 0;});
    }});

    $("#cola").click(function(){
        if(animation == 1){
        }else if (check == 1) {
            alert("Glas ist voll!")
        }else{
        check = 1;
        animation = 1;
        $(".strahl").css({backgroundColor: "#19090c", top: 0})
        $(".strahl").animate({width: 6}, {queue: false, duration: 500});
        $(".strahl").animate({height: 210}, 1600);
        $(".füllung").css("backgroundColor", "#19090c")
        $(".füllung").delay(1500).animate({height: 160, top: 0}, 3000, "linear")
        $(".strahl").animate({height: 50},3000, "linear")
        $(".strahl").animate({top: 50, height: 0}, 100, function(){
        animation = 0;});
    }});

    $("#wasser").click(function(){
        if(animation == 1){
        }else if (check == 1) {
            alert("Glas ist voll!")
        }else{
        check = 1;
        animation = 1;
        $(".strahl").css({backgroundColor: "lightskyblue", top: 0, opacity: 0.6})
        $(".strahl").animate({width: 6}, {queue: false, duration: 500});
        $(".strahl").animate({height: 210}, 1600);
        $(".füllung").css({backgroundColor: "lightskyblue", opacity: 0.6})
        $(".füllung").delay(1500).animate({height: 160, top: 0}, 3000, "linear")
        $(".strahl").animate({height: 50},3000, "linear")
        $(".strahl").animate({top: 50, height: 0}, 100, function(){
        animation = 0;});
    }});
    
    $("#mezzo").click(function(){
        if(animation == 1){
        }else if (check == 1) {
            alert("Glas ist voll!")
        }else{
        check = 1;
        animation = 1;
        $(".strahl").css({backgroundColor: "#a13c29", top: 0})
        $(".strahl").animate({width: 6}, {queue: false, duration: 500});
        $(".strahl").animate({height: 210}, 1600);
        $(".füllung").css("backgroundColor", "#a13c29")
        $(".füllung").delay(1500).animate({height: 160, top: 0}, 3000, "linear")
        $(".strahl").animate({height: 50},3000, "linear")
        $(".strahl").animate({top: 50, height: 0}, 100, function(){
        animation = 0;});
    }});

    $("#fanta").click(function(){
        if(animation == 1){
        }else if (check == 1) {
            alert("Glas ist voll!")
        }else{
        check = 1;
        animation = 1;
        $(".strahl").css({backgroundColor: "orange", top: 0})
        $(".strahl").animate({width: 6}, {queue: false, duration: 500});
        $(".strahl").animate({height: 210}, 1600);
        $(".füllung").css("backgroundColor", "orange")
        $(".füllung").delay(1500).animate({height: 160, top: 0}, 3000, "linear")
        $(".strahl").animate({height: 50},3000, "linear")
        $(".strahl").animate({top: 50, height: 0}, 100, function(){
        animation = 0;});
    }});
    
    $("#sprite").click(function(){
        if(animation == 1){
        }else if (check == 1) {
            alert("Glas ist voll!")
        }else{
        check = 1;
        animation = 1;
        $(".strahl").css({backgroundColor: "white", top: 0, opacity: 0.4})
        $(".strahl").animate({width: 6}, {queue: false, duration: 500});
        $(".strahl").animate({height: 210}, 1600);
        $(".füllung").css({backgroundColor: "white", opacity: 0.4})
        $(".füllung").delay(1500).animate({height: 160, top: 0}, 3000, "linear")
        $(".strahl").animate({height: 50},3000, "linear")
        $(".strahl").animate({top: 50, height: 0}, 100, function(){
        animation = 0;});
    }});

    $("#ftea").click(function(){
        if(animation == 1){
        }else if (check == 1) {
            alert("Glas ist voll!")
        }else{
        check = 1;
        animation = 1;
        $(".strahl").css({backgroundColor: "#e8b567", top: 0, opacity: 0.6})
        $(".strahl").animate({width: 6}, {queue: false, duration: 500});
        $(".strahl").animate({height: 210}, 1600);
        $(".füllung").css({backgroundColor: "#e8b567", opacity: 0.6})
        $(".füllung").delay(1500).animate({height: 160, top: 0}, 3000, "linear")
        $(".strahl").animate({height: 50},3000, "linear")
        $(".strahl").animate({top: 50, height: 0}, 100, function(){
        animation = 0;});
    }});

    $("#powerred").click(function(){
        if(animation == 1){
        }else if (check == 1) {
            alert("Glas ist voll!")
        }else{
        check = 1;
        animation = 1;
        $(".strahl").css({backgroundColor: "#b21e49", top: 0})
        $(".strahl").animate({width: 6}, {queue: false, duration: 500});
        $(".strahl").animate({height: 210}, 1600);
        $(".füllung").css("backgroundColor", "#b21e49")
        $(".füllung").delay(1500).animate({height: 160, top: 0}, 3000, "linear")
        $(".strahl").animate({height: 50},3000, "linear")
        $(".strahl").animate({top: 50, height: 0}, 100, function(){
        animation = 0;});
    }});

    $("#powerblue").click(function(){
        if(animation == 1){
        }else if (check == 1) {
            alert("Glas ist voll!")
        }else{
        check = 1;
        animation = 1;
        $(".strahl").css({backgroundColor: "#0091cc", top: 0})
        $(".strahl").animate({width: 6}, {queue: false, duration: 500});
        $(".strahl").animate({height: 210}, 1600);
        $(".füllung").css("backgroundColor", "#0091cc")
        $(".füllung").delay(1500).animate({height: 160, top: 0}, 3000, "linear")
        $(".strahl").animate({height: 50},3000, "linear")
        $(".strahl").animate({top: 50, height: 0}, 100, function(){
        animation = 0;});
    }});


    $("#glass").click(function(){ /*Glass entleert sich, es wird "getrunken"*/
        if(animation == 1){
        }else if (check == 0){
            alert("Glas ist leer!")    
        }else{
        check = 0;
        animation = 1;
        $(".füllung").animate({height: 0, top: 160}, 3000, "linear", function(){
            animation = 0;
        })
    }});
});