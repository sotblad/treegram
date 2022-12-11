var theInterval;

window.onload = function() {
    var usrContent = $('div.well.col-sm-4')
    var firstImg;
    var firstCaption;

    usrContent.hover(function () {
        var ele = $(this);

        var image = ele.find("img#slide")
        firstImg = image.attr("src");

        var caption = ele.find("h1#caption");
        firstCaption = caption.text();
        console.log(firstCaption)

        var slides = ele.find("div#slides").find("img");

        var counter = 0;
        theInterval = setInterval(function () {
            image.attr("src", $(slides[counter]).attr("src"));
            caption.text($(slides[counter]).attr("alt"));

            counter += 1;
            if(counter == slides.length) {
                image.attr("src", firstImg);
                caption.text(firstCaption);
                setTimeout(function() {}, 1000);
                counter = 0;
            }
        }, 1000);
    }, function () {
        $(this).find("img#slide").attr("src", firstImg)
        $(this).find("h1#caption").text(firstCaption)
        clearInterval(theInterval);
    })
}