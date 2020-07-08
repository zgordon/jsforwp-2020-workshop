<?php
/*
   Plugin Name: JS for WP Likes Example (Completed)
   Version: 1.0.0
   Author: Zac Gordon
   Author URI: https://javascriptforwp.com
   Description: An example plugin for learning JavaScript in WordPress
   Text Domain: jsforwplikes
   License: GPLv3
*/


// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
  die;
}

define( 'WPPLUGIN_FILE', __FILE__ );

include( plugin_dir_path( __FILE__ ) . 'includes/enqueue-scripts.php');
include( plugin_dir_path( __FILE__ ) . 'includes/register-meta.php');
include( plugin_dir_path( __FILE__ ) . 'includes/rest-api.php');

