<?php
if (!function_exists('getto')) :
function getto()
{
    $op = stripslashes(get_option('phpnerSlider'));
    $jsonGet = json_decode($op);
/*    var_dump($jsonGet);*/
    ?>
        <div class="row">
            <div class="owl-carousel owl-theme">
                <?php  foreach ($jsonGet as $data): ?>
                <div class="item"><img src="<?php echo $data->url?>" alt=""></div>
                <?endforeach;?>
            </div>
        </div>

    <?php
}

endif;