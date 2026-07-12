<?php
/**
 * Theme setup and asset loading.
 */
function mygd_theme_setup() {
    add_theme_support( 'title-tag' );
    add_theme_support( 'post-thumbnails' );
}
add_action( 'after_setup_theme', 'mygd_theme_setup' );

function mygd_enqueue_assets() {
    wp_enqueue_style(
        'mygd-google-fonts',
        'https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700;800;900&family=Poppins:wght@300;400;500;600&display=swap',
        array(),
        null
    );

    wp_enqueue_style(
        'mygd-site-style',
        get_template_directory_uri() . '/assets/css/site.css',
        array( 'mygd-google-fonts' ),
        filemtime( get_template_directory() . '/assets/css/site.css' )
    );

    wp_enqueue_script(
        'mygd-site-script',
        get_template_directory_uri() . '/assets/js/site.js',
        array(),
        filemtime( get_template_directory() . '/assets/js/site.js' ),
        true
    );
}
add_action( 'wp_enqueue_scripts', 'mygd_enqueue_assets' );
