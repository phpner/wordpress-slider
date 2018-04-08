'use strict';
export default  class AjaxClass {

    post(data) {
        var post = {
            action : "save_img_slider",
            data: data
        }
        console.log("ajaxing!")

        $.ajax({
            url: ajaxurl,
            type: 'POST',
            data:post,
            xhr: function (){
                var xhr = new window.XMLHttpRequest();
                //Upload Progress
                xhr.upload.addEventListener("progress", function (evt){
                    if (evt.lengthComputable) {
                        var percentComplete = (evt.loaded / evt.total) * 100;
                        $(".progress").show();
                        $('div.progress > div.progress-bar').css({ "width": percentComplete + "%" });
                    } }, false);

                xhr.addEventListener("loadend", function (evt)
                    {
                        if (evt.lengthComputable)
                        { var percentComplete = (evt.loaded / evt.total) * 100;
                        }
                        $('div.progress > div.progress-bar').css({ "width": 100 + "%" });
                        $(".progress").hide();
                    },
                    false);
                return xhr;
            },
            success: function (data){
                $("div.progress > div.progress-bar").css("display : none");
            }
        });
    }
    InitSlider()
    {
      return  $.get(ajaxurl,{action: 'get_init_img'});

    }
}