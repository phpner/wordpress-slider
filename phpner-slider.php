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
class phpnerSlider
{
    public function __construct()
    {
        add_action("admin_enqueue_scripts", [$this, "add_script"]);

        add_action('admin_menu', function(){
            add_menu_page( 'Настройки слайдер',
                            'Костомный слайдер',
                            'manage_options',
                            'site-options',
                            ["Phpner_tml","tmpFrontPage"], '',
                4 );
        } );
    }
    public function add_script()
    {
        wp_enqueue_media();
        wp_enqueue_script("main-bundle-script", plugins_url('assets/js/bundle.js',__FILE__), array( 'jquery','wp-api'));

        wp_enqueue_style("bootstrap-p", plugins_url('assets/css/style.css',__FILE__));

    }
}

new phpnerSlider();