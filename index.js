$("button").on("click",function(){location.reload();},function(){
    var mus = document.getElementById("my");
    var aus = document.getElementById("aus");
    var num1 = Math.random();
    num1 = num1 * 10;
    num1 = Math.floor(num1)+1;
    console.log(num1);

    var imgsrc1 = "img/img"+num1+".jpg";
    $(".box>img")[0].setAttribute("src", imgsrc1);

    var num2 = Math.random();
    num2 = num2 * 10;
    num2 = Math.floor(num2)+1;
    console.log(num2);

    var imgsrc2 = "img/img"+num2+".jpg";
    $(".box>img")[1].setAttribute("src", imgsrc2);

    if(num1 === num2)
    {
        pause(mus);
        pause(aus);
        document.querySelector("h3").style.visibility="visible";
        if(num1>=6)
        {
            pause(mus);
            $("button").css("margin","1% auto");
            $("h3#sub").css("margin-bottom","5%");
            console.log("Anuj");
            play(aus);
            $("h1").text("THE QUEST FOR THE AUS PR");
            $("h3#sub").text("Refresh for more surprises");
            var med = window.matchMedia("(max-width: 590px)")
            if(med.matches)
            {
                document.querySelector("h1").classList.add("head");
                $("h1").text("QUEST FOR THE AUS PR");
            }
        }
    
        else if(num1<=5)
        {
            pause(aus);
            $("button").css("margin","1% auto");
            $("h3#sub").css("margin-bottom","5%");
            document.querySelector("h1").classList.remove("head");
            console.log("Sid");
            play(mus);
            $("h1").text("SMOKING KILLS");
            $("h3#sub").text("Refresh for more surprises");
        }
        
    }
    else
    {
        document.querySelector("h1").classList.remove("head");
        $("h1").text("Keep Refreshing");
        $("button").css("margin","2% auto");
        $("h3#sub").css("margin-bottom","-2%");
        document.querySelector("h3").style.visibility="hidden";
        pause(aus);
        pause(mus);
    }

    function play(file){
        file.muted = false
        file.currentTime = 0;
        file.play();
    }
    function pause(file){
        file.muted = true;
    }  

});
