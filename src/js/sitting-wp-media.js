$(function(){
    var owl = $('.owl-carousel');
    owl.owlCarousel({
        loop:true,
        items: 1,
        nav:true,
    });

    var mediaSider = wp.media({
        frame: 'select',
        title: 'Добавить фото в слайдер',
        button: {
            text: 'добавить в слайдер'
        }, multiple: true,
    });

    $('.add-media').on('click',function (event){
        event.preventDefault();

        mediaSider.on('select',function (e){
            var selection = mediaSider.state().get('selection');
            selection.map(function (img){
                var image = img.toJSON();
                owl.trigger('add.owl.carousel', ["<div class='item'><img src='"+image.url+"'></div><input class='form-control' type='text'>"])
                    .trigger('refresh.owl.carousel');
                /*  $(".owl-item").append(" <div class='item'><img src='"+image.url+"'></div>");*/
                console.log(image.url);
            });
        });
        mediaSider.open();
    })
});