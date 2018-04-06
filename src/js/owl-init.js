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
        this.el.owlCarousel(this.sittings);
    }

}
