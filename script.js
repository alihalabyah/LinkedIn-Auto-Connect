jQuery('.bt-request-buffed').each(function(index, value) {
    setTimeout(function() {
        jQuery(value).trigger('click');
    }, index * 1000);
});
