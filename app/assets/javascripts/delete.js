var delPhoto = {

    delRequest: function(e) {
        if(e.attr("delhref") && confirm("Are you sure?")) {
            $.ajax({
                type: 'DELETE',
                url: e.attr('delhref'),
                timeout: 5000,
                success: delPhoto.deleteSuccess,
                error: function (xhrObj, textStatus, exception) {
                    alert('Error!');
                }
            });
        }
        return(false);
    }
    ,deleteSuccess: function(data, requestStatus, xhrObject) {
        alert("photo deleted successfully")
        return(false); // prevent default link action
    }
};
$(delPhoto.setup);