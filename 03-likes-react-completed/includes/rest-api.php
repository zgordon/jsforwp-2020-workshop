<?php

add_action( 'rest_api_init', 'jsforwp_likes_register_routes' ); 
function jsforwp_likes_register_routes() {
  register_rest_route( 
      'likes/v1',
      '/(?P<id>\d+)',
      array(
          'methods' => 'GET',
          'callback' => 'jsforwp_likes_find_author_post_title',
      )
  );
  register_rest_route( 
    'likes/v1', 
    '/(?P<id>\d+)', 
    array(
      'methods' => WP_REST_Server::EDITABLE,
      'callback' => 'jsforwp_likes_special_update_function',
    ) 
  );    
}


function jsforwp_likes_find_author_post_title( $data ) {
  
  $likes = get_post_meta( $data['id'], 'jsforwp_likes', true );    
  
  if ( empty( $likes ) ) {
      return 0;
  }

  return $likes;
}


function jsforwp_likes_special_update_function( $data ) {
  
  $likes = get_post_meta( $data['id'], 'jsforwp_likes', true );    
  
  if ( empty( $likes ) ) {
      $likes = 0;
  }

  $likes++;
  
  update_post_meta( $data['id'], 'jsforwp_likes', $likes );

  return new WP_REST_Response( $likes, 200 );  

  return new WP_Error( 'cant-update', __( 'message', 'jsforwplikes' ), array( 'status' => 500 ) );
}

// jsforwp_likes_special_update_function
// register_rest_route( 'myplugin/v1', '/update/(?P<id>\d+)', array(
//   'methods' => WP_REST_Server::EDITABLE,
//   'callback' => 'jsforwp_likes_special_update_function',
// ) );