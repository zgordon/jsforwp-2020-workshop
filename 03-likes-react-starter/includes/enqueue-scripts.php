<?php

function jsforwplikes_scripts() {
  global $post;

  if( is_single()) {
    wp_enqueue_script(
      'jsforwp-likes-js',
      plugins_url( '/build/index.js', WPPLUGIN_FILE ),
      ['wp-api-fetch', 'wp-element'],
      time(),
      true
    );
  }
    
  $translation_array = array(
    'postID' => $post->ID,
    'count' => get_post_meta($post->ID, 'jsforwp_likes', true)
  );
  wp_localize_script( 'jsforwp-likes-js', 'jsforwp_likes', $translation_array );

  wp_enqueue_style(
    'jsforwp-likes-css',
    plugins_url( '/assets/css/likes.css', WPPLUGIN_FILE )
  );

}
add_action( 'wp_enqueue_scripts', 'jsforwplikes_scripts' );