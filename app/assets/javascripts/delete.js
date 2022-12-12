var delPhoto = {

    setup: function() {
        $(document).on('dblclick', 'img#slide', delPhoto.delRequest);
    }
    ,delRequest: function(e) {
        e.preventDefault();
        e.stopPropagation();
        if($(this).attr("delhref") && confirm("Are you sure?")) {
            $.ajax({
                type: 'DELETE',
                url: $(this).attr('delhref'),
                timeout: 5000,
                success: delPhoto.deleteSuccess,
                error: function (xhrObj, textStatus, exception) {
                    alert('Error!');
                }
// 'success' and 'error' functions will be passed 3 args
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