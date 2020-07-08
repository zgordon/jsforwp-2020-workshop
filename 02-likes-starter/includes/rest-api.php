<?php

add_action( 'rest_api_init', 'jsforwp_likes_register_routes' ); 
function jsforwp_likes_register_routes() {
  register_rest_route( 
      'likes/v1',
      '/(?P<id>\d+)',
      [
          'methods' => 'GET',
          'callback' => 'jsforwp_likes_find_get_likes',
      ]
  );
  register_rest_route( 
    'likes/v1', 
    '/(?P<id>\d+)', 
    [
      'methods' => WP_REST_Server::EDITABLE,
      'callback' => 'jsforwp_likes_increment_likes',
    ]
  );    
}


function jsforwp_likes_find_get_likes( $data ) {
  
  $likes = get_post_meta( $data['id'], 'jsforwp_likes', true );    
  
  if ( empty( $likes ) ) {
      return 0;
  }

  return $likes;
}


function jsforwp_likes_increment_likes( $data ) {
  
  $likes = get_post_meta( $data['id'], 'jsforwp_likes', true );    
  
  if ( empty( $likes ) ) {
      $likes = 0;
  }

  $likes++;
  
  update_post_meta( $data['id'], 'jsforwp_likes', $likes );

  return new WP_REST_Response( $likes, 200 );  

}