'use strict';
import Addimg from './add-save-img';
import AjaxClass from "./ajax-class";

export default class OwlInit{

    constructor()
    {
        this.sittings =  {
            items: 1
        }
        this.el = $('.owl-carousel');
        this.start();
        this.render();
    }
    start()
    {
        var init =  this.el.owlCarousel(this.sittings);
        var addimg = new  Addimg(init);
      /*  var saveimg = new SaveImg();*/
    }
    render()
    {
        var ajax = new AjaxClass();
        var getAjax = ajax.InitSlider();
        getAjax.done(function (request) {
            var jsonGet = JSON.parse(request);
            for(let jsonD of jsonGet)
            {
                $('.owl-carousel').trigger('add.owl.carousel', ["<div  class='item' id='"+ jsonD.id+"'><span class='delete-media btn btn-danger'>X</span><img src='"+jsonD.url+"'><br> <textarea class='form-control' rows='3'>"+jsonD.text+"</textarea></div>"])
                    .trigger('refresh.owl.carousel');
                console.log(jsonD);
            }
        })
    }

}
