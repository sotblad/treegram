var CommentsPopup = {

    setup: function() {
        // add hidden 'div' to end of page to display popup:
        var popupDiv = $('<div id="photoInfo"></div>');
        popupDiv.hide().appendTo($('body'));

        $(document).on('click', 'img#slide', ClickCounter.clickCounter());
    }
    ,getPhotoInfo: function(e) {
        $.ajax({type: 'GET',
            url: e.attr('href'),
            timeout: 5000,
            success: CommentsPopup.showPhotoInfo,
            error: function(xhrObj, textStatus, exception) { alert('Error!'); }
        });
        return(false);
    }
    ,showPhotoInfo: function(data, requestStatus, xhrObject) {
        // center a floater 1/2 as wide and 1/4 as tall as screen
        var oneFourth = Math.ceil($(window).width() / 4);
        $('#photoInfo').css({'left': oneFourth, 'width': 2*oneFourth, 'top': 250}).html(data).show();

        // make the Close link in the hidden element work
        $('#closeLink').click(CommentsPopup.hideMovieInfo);
        return(false); // prevent default link action
    }
    ,hideMovieInfo: function() {
        $('#photoInfo').hide();
        return(false);
    }
};
$(CommentsPopup.setup);