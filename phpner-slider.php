<?php

/*
Plugin Name: Phpner Slider
Plugin URI: http://URI_Of_Page_Describing_Plugin_and_Updates
Description: A brief description of the Plugin.
Version: 1.0
Author: phpner
Author URI: http://URI_Of_The_Plugin_Author
License: A "Slug" license name e.g. GPL2
*/
require 'tml/Phpner_tml.php';
require 'front/front-function.php';
class phpnerSlider
{
    public function __construct()
    {
        add_action("admin_enqueue_scripts", [$this, "add_script_admin"]);
        add_action("wp_enqueue_scripts", [$this, "add_script_front"]);
        add_action('admin_menu', function(){
            add_menu_page( 'Настройки слайдер',
                            'Костомный слайдер',
                            'manage_options',
                            'site-options',
                            ["Phpner_tml","tmpFrontPage"], '',
                4 );
        } );

        add_action("wp_ajax_save_img_slider",[$this,"save_img_slider"]);
        add_action("wp_ajax_get_init_img",[$this,"get_init_img"]);
        add_option("phpnerSlider",'');
    }
    public function add_script_admin()
    {
        wp_enqueue_media();
        wp_enqueue_script("main-bundle-script", plugins_url('assets/js/backend.js',__FILE__), array( 'jquery','wp-api'),null,true);

        wp_enqueue_style("bootstrap-p", plugins_url('assets/css/backend.css',__FILE__));

    }
    public function add_script_front()
    {
        wp_enqueue_script("front-corusel-script", plugins_url('assets/js/front.js',__FILE__), ['jquery'],null, true);
        wp_enqueue_style("front-carusel", plugins_url('assets/css/front.css',__FILE__));
    }
    public function save_img_slider()
    {
        $post = stripslashes($_POST['data']);
        $res = update_option('phpnerSlider',$post);
        var_dump(get_option("phpnerSlider"));
        wp_die();
    }
    public function first_render()
    {


    }
    public function get_init_img()
    {
        if((get_option("phpnerSlider")) != "[]" && (get_option("phpnerSlider")) != folse ) {
            $data = get_option("phpnerSlider");
            echo $data;
            wp_die();
        }else{
            echo null;
            wp_die();
        }
    }
}

new phpnerSlider();