<?php
/**
 * @package phpner
 * @subpackage free template
 * @since 1.0
 **/

class Phpner_tml
{
    public  function tmpFrontPage()
    {
        ?>
        <div class="wrap container text-center">
            <h2 class="text-center"><?php echo get_admin_page_title() ?></h2>
            <div class="media-frame.mode-select.wp-core-ui"> </div>
            <?php
            // settings_errors() не срабатывает автоматом на страницах отличных от опций
            if( get_current_screen()->parent_base !== 'options-general' )
                settings_errors('название_опции');
            ?>
            <div class="row">
                <div class="owl-carousel owl-theme">
                    <div class="item"></div>

                </div>
            </div>
            <div class="row">
            <form action="" method="POST">
                <?php
                settings_fields("opt_group");     // скрытые защитные поля
                do_settings_sections("opt_page"); // секции с настройками (опциями)
                ?>
                <button onclick="return false" class="btn btn-default add-media">Добавить картинку</button>
            </form>
            </div>
        </div>
        <?php
    }

}