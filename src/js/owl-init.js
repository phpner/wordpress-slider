'use strict';
import Addimg from './add-save-img';

export default class OwlInit{

    constructor()
    {
        this.sittings =  {
            items: 1
        }
        this.el = $('.owl-carousel');
        this.start();
    }
    start()
    {
        var init =  this.el.owlCarousel(this.sittings);
        var addimg = new  Addimg(init);
      /*  var saveimg = new SaveImg();*/
    }

}
