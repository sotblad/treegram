var ClickCounter = {

    clickCounter: function () {
        const delay = 300;
        let clicks = 0;

        let timeout;
        return function (e) {
            clicks++;

            clearTimeout(timeout);
            timeout = setTimeout(function () {
                if (clicks == 1) {
                    CommentsPopup.getPhotoInfo($(e.target))
                }else if(clicks == 2){
                    delPhoto.delRequest($(e.target))
                }
                clicks = 0;
            }, delay);
        };
    }

}