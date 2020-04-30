//$('#input-option84321 option').each(function() {
$("select[id^='input-option']").each(function(i, el) {
    $selector = $(this);
    $selector.children('option').each(function() {
        $opt = this;
        if ($opt.value) {
            $selector.val($opt.value).change();
            //alert($opt.value);
            $('#button-cart').click();
        }
    });
});
alert("You have added all sizes to your cart");
