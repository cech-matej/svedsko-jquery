$(function(){

    $(".btn-light").on("click", ()=>{
        $("*").css({"transform": "rotate(180deg)", "filter": "invert(1)",
            /*"background-image": "linear-gradient(to left, #f00,#ff0,#0ff,#0f0,#00f)",
            "-webkit-background-clip": "text",
            "animation": "text-color 20s linear infinite",
            "background-size": "1000%"*/
        })

        $("p, a, h3, h1, td, b").css({
            "background-image": "linear-gradient(to right, #f00,#ff0,#0ff,#0f0,#00f)",
            "animation": "text-color 1s linear infinite",
            "background-size": "50%",
            "-webkit-text-fill-color": "transparent",
            "-webkit-background-clip": "text"
        })

        $('.bg-text').css({"transform": "rotate(360deg)", "left": "10%"})
        $('h1, h2, h3, p, input, .btn-light').css({"transform": "rotate(360deg)", "filter": "invert(0)"})

        $("img").css({
            "-webkit-animation": "rotation 2s infinite linear"
        })
    });
})