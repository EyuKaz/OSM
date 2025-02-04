<?php
/**
 * Plugin Name: OpenStreetMap Block
 * Description: A custom Gutenberg block for embedding OpenStreetMap with address search.
 * Version: 1.0.0
 * Requires at least: 6.4
 * Requires PHP: 7.4
 * Author: EKAZ
 * License: GPL-2.0-or-later
 * License URI: https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain: openstreetmap-block
 */

if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly.
}

// Enqueue Leaflet assets
function openstreetmap_block_enqueue_assets() {
    // Leaflet CSS
    wp_enqueue_style(
        'leaflet-css',
        'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css',
        array(),
        '1.9.4'
    );

    // Leaflet JS
    wp_enqueue_script(
        'leaflet-js',
        'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js',
        array(),
        '1.9.4',
        true
    );
}
add_action('enqueue_block_assets', 'openstreetmap_block_enqueue_assets');

// Register the block
function openstreetmap_block_register_block() {
    register_block_type(__DIR__ . '/build');
}
add_action('init', 'openstreetmap_block_register_block');