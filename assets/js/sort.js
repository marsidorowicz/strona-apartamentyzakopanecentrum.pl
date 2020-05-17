$(document).ready(function () {
    $('.category_item').click(function () {
        var category = $(this).attr('id');

        if (category == 'all') {
            $('.article_item').addClass('hide');
            setTimeout(function () {
                $('.article_item').removeClass('hide');
            }, 300);
        } else {
            $('.article_item').addClass('hide');
            setTimeout(function () {
                $('.' + category).removeClass('hide');
            }, 300);
        }
    });
});