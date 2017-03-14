<?php
/*
    Plugin Name: Vet and Animal Custom Post Types
    Description: Custom post types for both vets and animals
*/

function vet_custom_post_type()
{
    $text_domain = 'twentyseventeen';

// UI labels
    $labels = array(
        'name' => _x('Vets', 'Post Type General Name', $text_domain),
        'singular_name' => _x('Vet', 'Post Type Singular Name', $text_domain),
        'menu_name' => __('Vets', $text_domain),
        'parent_item_colon' => __('Parent Vet', $text_domain),
        'all_items' => __('All Vets', $text_domain),
        'view_item' => __('View Vet', $text_domain),
        'add_new_item' => __('Add New Vet', $text_domain),
        'add_new' => __('Add New', $text_domain),
        'edit_item' => __('Edit Vet', $text_domain),
        'update_item' => __('Update Vet', $text_domain),
        'search_items' => __('Search for Vet', $text_domain),
        'not_found' => __('Not Found', $text_domain),
        'not_found_in_trash' => __('Not found in Trash', $text_domain),
    );

    $args = array(
        'label' => __('vets', $text_domain),
        'description' => __('Vet details', $text_domain),
        'labels' => $labels,
        'supports' => array('title', 'editor', 'excerpt', 'author', 'thumbnail', 'comments', 'revisions', 'custom-fields',),
        'hierarchical' => false,
        'public' => true,
        'show_ui' => true,
        'show_in_menu' => true,
        'show_in_nav_menus' => true,
        'show_in_admin_bar' => true,
        'menu_position' => 5,
        'can_export' => true,
        'has_archive' => true,
        'exclude_from_search' => false,
        'publicly_queryable' => true,
        'capability_type' => 'page',
    );

    register_post_type('vets', $args);
}

function animal_custom_post_type()
{
    $text_domain = 'twentyseventeen';

// UI labels
    $labels = array(
        'name' => _x('Animals', 'Post Type General Name', $text_domain),
        'singular_name' => _x('Animal', 'Post Type Singular Name', $text_domain),
        'menu_name' => __('Animals', $text_domain),
        'parent_item_colon' => __('Parent Animal', $text_domain),
        'all_items' => __('All Animals', $text_domain),
        'view_item' => __('View Animal', $text_domain),
        'add_new_item' => __('Add New Animal', $text_domain),
        'add_new' => __('Add New', $text_domain),
        'edit_item' => __('Edit Animal', $text_domain),
        'update_item' => __('Update Animal', $text_domain),
        'search_items' => __('Search for Animal', $text_domain),
        'not_found' => __('Not Found', $text_domain),
        'not_found_in_trash' => __('Not found in Trash', $text_domain),
    );

    $args = array(
        'label' => __('animals', $text_domain),
        'description' => __('Animal details', $text_domain),
        'labels' => $labels,
        'supports' => array('title', 'editor', 'excerpt', 'author', 'thumbnail', 'comments', 'revisions', 'custom-fields',),
        'hierarchical' => false,
        'public' => true,
        'show_ui' => true,
        'show_in_menu' => true,
        'show_in_nav_menus' => true,
        'show_in_admin_bar' => true,
        'menu_position' => 6,
        'can_export' => true,
        'has_archive' => true,
        'exclude_from_search' => false,
        'publicly_queryable' => true,
        'capability_type' => 'page',
    );

    register_post_type('animals', $args);
}

add_action('init', 'vet_custom_post_type', 0);
add_action('init', 'animal_custom_post_type', 0);
?>
