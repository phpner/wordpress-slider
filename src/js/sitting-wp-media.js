import OwlInit from './owl-init.js';

export  default class AddImg extends OwlInit{
    constructor()
    {
        super();
        var element = document.querySelector('.add-media');
        element.addEventListener('click',this.onClick,false);
        element.el = this;
        element.el.media = wp.media({
            frame: 'select',
            title: 'Добавить фото в слайдер',
            button: {
                text: 'добавить в слайдер'
            }, multiple: true,
        });
    }
    say(){

    }
    onClick(e)
    {
        var _this = e.target.el;
        console.log(this);
        _this.media.on('select',function (e){
                var selection = _this.media.state().get('selection');

                console.log(selection);

                selection.map(function (img){
                    var image = img.toJSON();
                    _this.el.trigger('add.owl.carousel', ["<div class='item'><img src='"+image.url+"'></div><input class='form-control' type='text'>"])
                        .trigger('refresh.owl.carousel');
                    console.log(image.url);
                    _this.media.state().reset();
                });
            });
        _this.media.open();


    }
}
/*
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
                /!*  $(".owl-item").append(" <div class='item'><img src='"+image.url+"'></div>");*!/
                console.log(image.url);
            });
        });
        mediaSider.open();
    })
});*/
