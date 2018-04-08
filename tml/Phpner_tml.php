<?php
/**
 * @package phpner
 * @subpackage free template
 * @since 1.0
 **/

class Phpner_tml
{
    public  function tmpFrontPage($tml)
    {
        if($tml)
        {
            foreach (json_decode($tml) as $key)
            {
                $url = $key->url;
            }
        }
        ?>
        <div class="wrap container text-center">
            <div class="progress" style="display: none">
                <div class="progress-bar progress-bar-success progress-bar-striped active" role="progressbar" aria-valuenow="45" aria-valuemin="0" aria-valuemax="100" style="width: 0%">
                    <span class="sr-only">0% Complete</span>
                </div>
            </div>
            <h2 class="text-center"><?php echo get_admin_page_title() ?></h2>
            <div class="media-frame.mode-select.wp-core-ui"> </div>
            <?php
            // settings_errors() не срабатывает автоматом на страницах отличных от опций
            if( get_current_screen()->parent_base !== 'options-general' )
                settings_errors('название_опции');
            ?>
            <div class="row">
                <div class="owl-carousel owl-theme"></div>
            </div>
            <br>
            <div class="row">
                <button onclick="return false" class="btn btn-default add-media">Добавить картинку</button>
                <button onclick="return false" class="btn btn-success save-media">Сохранить</button>
            </div>
        </div>
        <?php
    }

}