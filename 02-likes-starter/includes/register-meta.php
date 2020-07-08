<?php

function jsforwplikes_meta_box()
{    
    add_meta_box(
        'jsforwp_likes',       
        'Likes',               
        'jsforwp_likes_markup',
        'post',
        'side'
    );    
}
add_action('add_meta_boxes', 'jsforwplikes_meta_box');

function jsforwp_likes_markup($post)
{
    $value = get_post_meta($post->ID, 'jsforwp_likes', true);
    if ( $value == null ) $value = 0;
    ?>
    <p>Number of likes: <?php echo $value; ?></p>
    <?php
}