'use strict';
export  default class AddSaveImg{
    constructor(el)
    {
        this.el = el;
        var  addButton = document.querySelector('.add-media');
        var  saveButton = document.querySelector('.save-media');
        $('body').on('click','.delete-media',{el: this.el },this.onClickDeleteButton);

        addButton.addEventListener('click',this.onClickAddButton,false);
        saveButton.addEventListener('click',this.onClickSaveButton,false);
       /* deleteButton.addEventListener('click',this.onClickDeleteButton,false);*/

         addButton.el = this;
        saveButton.el = this;
        addButton.el.media = wp.media({
            frame: 'select',
            title: 'Добавить фото в слайдер',
            button: {
                text: 'добавить в слайдер'
            }, multiple: true,
        });
    }
    onClickAddButton(e)
    {
        var _this = e.target.el;
        var collec = [];
        _this.media.on('select',function (e){
                var selection = _this.media.state().get('selection');
                selection.map(function (img){
                    var image = img.toJSON();
                    _this.el.trigger('add.owl.carousel', ["<div class='item' id='"+ image.id+"'><span class='delete-media btn btn-danger'>X</span><img src='"+image.url+"'><br> <textarea class='form-control' rows='3'></textarea></div>"])
                        .trigger('refresh.owl.carousel');
                    _this.collect =  collec;
                    _this.media.state().reset();
                    collec.push(image.url);
                });
            });
        _this.media.open();
    }
    onClickSaveButton(event)
    {

        var attr = document.getElementsByClassName('item');
        var res = [];
        for(var obj of attr){
            var id = obj.id;
            var src = $(obj).find('img').attr('src');
            var textarea = $(obj).find('textarea').val();
            res.push({id: id, url : src, text : textarea});
        }
        console.log(res);
    }
    onClickDeleteButton(event)
    {
        var _this =  event.data;
        var div =  $(event.target).parent("div");
        /*_this.el.trigger('remove.owl.carousel', [0]).trigger("refresh.owl.carousel");*/
        console.log(_this.el);
    }
}