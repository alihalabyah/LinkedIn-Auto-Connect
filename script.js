jQuery('.button-secondary-medium').each(function(index, value) {
    setTimeout(function() {
        jQuery(value).trigger('click');
    }, index * 1000);
});
