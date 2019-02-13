$(function() {
    //search_popup..
    var $searchPopupBtn = $('.search-popup_btn');
    var $searchPopup = $('.search_popup');
    var $closeBtn = $('.close_btn');
    var isPopupClosed;

    $searchPopupBtn.click(function() {
        $searchPopup.css('display','flex');
        if($('body').width() < 769) {
            $menu.removeClass('showing');       
        }
    });

    $closeBtn.click(function() {
        $searchPopup.css('display','none');
    });

    //responsive menu...
    var $toggleBtn  = $('.menuToggleBtn');
    var $menu = $('.menu-list');

    $toggleBtn.click(function() {
        $menu.toggleClass('showing');   
        $(this).toggleClass('menuToggleBtnClick');
    });
});