var theInterval;

window.onload = function() {
    var usrContent = $('div.well.col-sm-4')
    var firstImg;
    var firstCaption;
    var firstImgHref;
    var uid = -1;

    usrContent.hover(function () {
        var image = $(this).find("img#slide")

        $(this).find("img#slide").click(function() {
            clearInterval(theInterval);
        })

        var counter = $(this).find("h2#counter");
        if(parseInt(counter.attr("counter")) == -1){
            $(this).find("h2#counter").attr("counter", 0)
        }

        if(uid != usrContent.attr("id")){
            uid = -1
            firstImg = null;
            firstCaption = null;
            firstImgHref = null;
        }
        if (!firstImg) {
            firstImg = $(this).find("img#firstimage").attr("src");
        }

        var caption = $(this).find("h1#caption");
        if(!firstCaption) {
            firstCaption = $(this).find("h2#firstcaption").attr("caption");
        }

        if (!firstImgHref) {
            firstImgHref = $(this).find("img#firstimage").attr("href");
        }

        var slides = $(this).find("div#slides").find("img");
        var counterPlace = $(this).find("h2#counter");
        counter = counterPlace.attr("counter");
        theInterval = setInterval(function () {
            image.attr("src", $(slides[counter]).attr("src"));
            image.attr("href", $(slides[counter]).attr("href"));
            caption.text($(slides[counter]).attr("alt"));

            counter = parseInt(counter)+1;
            counterPlace.attr("counter", counter)

            if(counter == slides.length+1) {
                image.attr("src", firstImg);
                image.attr("href", firstImgHref);
                caption.text(firstCaption);

                counter = 0;
                counterPlace.attr("counter", counter)
            }
        }, 2000);
    }, function () {clearInterval(theInterval);})
}