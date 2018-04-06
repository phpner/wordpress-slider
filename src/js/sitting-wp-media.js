$(function(){
    $('.add-media').on('click',function (event){
        event.preventDefault();
        var mediaSider = wp.media({
            frame: 'select',
            title: 'Добавить фото в слайдер',
            button: {
                text: 'добавить в слайдер'
            }, multiple: true,
        });
        mediaSider.on('select',function (e){
            var selection = mediaSider.state().get('selection');
            selection.map(function (img){
                var image = img.toJSON();
                /*  $(".owl-item").append(" <div class='item'><img src='"+image.url+"'></div>");*/

                console.log(image);
            });
        });
        mediaSider.open();
    })
});