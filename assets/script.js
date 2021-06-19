$(document).ready(function() {

    var DateTime = luxon.DateTime; // This tells the script DateTime to reference the luxon.min.js
    var dt = DateTime.local();
    var now = dt.toLocaleString(DateTime.DATE_HUGE); // Pulls a full date with the day of the week leading 
    var timeCurrent = dt.toLocaleString(DateTime.TIME_24_SIMPLE) // Calls a 24 hour clock with current time
    var time = parseInt(timeCurrent.substr(0, 2)) // selects the hour of the day
    var mon = now.substr(0, 6); // Each of these selects out the day of the week
    var tues = now.substr(0, 7);
    var weds = now.substr(0, 9);
    var thurs = now.substr(0, 8);
    var fri = now.substr(0, 6);
    var past = {"background-color": "#A4a6a3"};
    var current = {"background-color": "#C70404"};
    var future = {"background-color": "#13d10c"};
    
    console.log(time)
    $("#present").text(now)
    //Checks if its a weekday
    if(mon === 'Monday' || tues === 'Tuesday' || weds === 'Wednesday' || thurs === 'Thursday' || fri === 'Friday')
    {timeHighlight();
    timePast();
    timeFuture();}
    else {}
    
    
    function timeHighlight(){
        // current time
        if(time == 9){$("#nine").css(current);
            $("#9text").css(current);}
        else if(time === 10){$("#ten").css(current);
            $("#10text").css(current)}
        else if(time === 11){$("#eleven").css(current);
            $("#11text").css(current)}
        else if(time === 12){$("#twelve").css(current);
            $("#12text").css(current)}
        else if(time === 13){$("#one").css(current);
            $("#1text").css(current)}
        else if(time === 14){$("#two").css(current);
            $("#2text").css(current)}
        else if(time === 15){$("#three").css(current);
            $("#3text").css(current)}
        else if(time === 16){$("#four").css(current);
            $("#4text").css(current)}
        else if(time === 17){$("#five").css(current);
            $("#5text").css(current)}
    }
    function timePast(){
        //past time
        if(time > 9){$("#nine").css(past);
            $("#9text").css(past);}
        if(time > 10){$("#ten").css(past);
            $("#10text").css(past)}
        if(time > 11){$("#eleven").css(past);
            $("#11text").css(past)}
        if(time > 12){$("#twelve").css(past);
            $("#12text").css(past)}
        if(time > 13){$("#one").css(past);
            $("#1text").css(past)}
        if(time > 14){$("#two").css(past);
            $("#2text").css(past)}
        if(time > 15){$("#three").css(past);
            $("#3text").css(past)}
        if(time > 16){$("#four").css(past);
            $("#4text").css(past)}
        if(time > 17){$("#five").css(past);
            $("#5text").css(past)}
    }
    function timeFuture(){
        //past time
        if(time < 9){$("#nine").css(future);
            $("#9text").css(future);}
        if(time < 10){$("#ten").css(future);
            $("#10text").css(future)}
        if(time < 11){$("#eleven").css(future);
            $("#11text").css(future)}
        if(time < 12){$("#twelve").css(future);
            $("#12text").css(future)}
        if(time < 13){$("#one").css(future);
            $("#1text").css(future)}
        if(time < 14){$("#two").css(future);
            $("#2text").css(future)}
        if(time < 15){$("#three").css(future);
            $("#3text").css(future)}
        if(time < 16){$("#four").css(future);
            $("#4text").css(future)}
        if(time < 17){$("#five").css(future);
            $("#5text").css(future)}
    }
    
    var nineAM = localStorage.getItem("nineAM", function() {
        if("nineAM" === null){nineAM = ""}
    });
    var tenAM = localStorage.getItem("tenAM", function() {
        if("tenAM" === null){tenAM = ""}
    });
    var elevenAM = localStorage.getItem("elevenAM", function() {
        if("elevenAM" === null){elevenAM = ""}
    });
    var twelveAM = localStorage.getItem("twelveAM", function() {
        if("twelveAM" === null){twelveAM = ""}
    });
    var onePM = localStorage.getItem("onePM", function() {
        if("onePM" === null){onePM = ""}
    });
    var twoPM = localStorage.getItem("twoPM", function() {
        if("twoPM" === null){twoPM = ""}
    });
    var threePM = localStorage.getItem("threePM", function() {
        if("threePM" === null){threePM = ""}
    });
    var fourPM = localStorage.getItem("fourPM", function() {
        if("fourPM" === null){fourPM = ""}
    });
    var fivePM = localStorage.getItem("fivePM", function() {
        if("fivePM" === null){fivePM = ""}
    });
    
    
    $("#9text").val(nineAM)
    $("#10text").val(tenAM)
    $("#11text").val(elevenAM)
    $("#12text").val(twelveAM)
    $("#1text").val(onePM)
    $("#2text").val(twoPM)
    $("#3text").val(threePM)
    $("#4text").val(fourPM)
    $("#5text").val(fivePM)
    
    
    $("#9save").on("click", function() {
        var nineAM = $("#9text").val();
        localStorage.setItem("nineAM", nineAM);
    });
    $("#10save").on("click", function() {
        var tenAM = $("#10text").val();
        localStorage.setItem("tenAM", tenAM);
    });
    $("#11save").on("click", function() {
        var elevenAM = $("#11text").val();
        localStorage.setItem("elevenAM", elevenAM);
    });
    $("#12save").on("click", function() {
        var twelveAM = $("#12text").val();
        localStorage.setItem("twelveAM", twelveAM);
    });
    $("#1save").on("click", function() {
        var onePM = $("#1text").val();
        localStorage.setItem("onePM", onePM);
    });
    $("#2save").on("click", function() {
        var twoPM = $("#2text").val();
        localStorage.setItem("twoPM", twoPM);
    });
    $("#3save").on("click", function() {
        var threePM = $("#3text").val();
        localStorage.setItem("threePM", threePM);
    });
    $("#4save").on("click", function() {
        var fourPM = $("#4text").val();
        localStorage.setItem("fourPM", fourPM);
    });
    $("#5save").on("click", function() {
        var fivePM = $("#5text").val();
        localStorage.setItem("fivePM", fivePM);
    });
    
    })