<?php

function jsforwplikes_scripts() {

  if( is_single()) {

    wp_enqueue_script(
      'jsforwp-likes-js',
      plugins_url( '/assets/js/likes.js', WPPLUGIN_FILE ),
      ['wp-api-fetch'],
      time(),
      true
    );

    wp_enqueue_style(
      'jsforwp-likes-css',
      plugins_url( '/assets/css/likes.css', WPPLUGIN_FILE )
    );
    
  }

}
add_action( 'wp_enqueue_scripts', 'jsforwplikes_scripts' );