<?php
/**
 * The template for displaying vets and animals on one page
 *
 * Template Name: 5Vet5AnimalTemplate
 *
 * @subpackage Twenty_Seventeen
 * @since 1.0
 * @version 1.0
 */

get_header();
$vet_query_args = array('post_type' => 'vets', 'posts_per_page' => 5);
$animal_query_args = array('post_type' => 'animals', 'posts_per_page' => 5);
$vets_query = new WP_Query($vet_query_args);
$animals_query = new WP_Query($animal_query_args);
?>

    <div class="wrap">
        <div id="primary" class="content-area">
            <main id="main" class="site-main" role="main">

                <?php
                if ($vets_query->have_posts() || $animals_query->have_posts()) :
                    while ($vets_query->have_posts()) : $vets_query->the_post();
                        echo '<h1>', get_the_title(), '</h1>';
                        echo '<span style="float: left; margin: 0 10px 10px 0">', get_the_post_thumbnail(), '</span>';
                        echo '<p><span style="float: left; width: 50%">', wpautop(get_the_content(), true), '</span></p>';
                    endwhile;

                    while ($animals_query->have_posts()) : $animals_query->the_post();
                        echo '<h1>', get_the_title(), '</h1>';
                        echo '<span style="float: left; margin: 0 10px 10px 0">', get_the_post_thumbnail(), '</span>';
                        echo '<p><span style="float: left; width: 50%">', wpautop(get_the_content(), true), '</span></p>';
                    endwhile;

                else :

                    get_template_part('template-parts/post/content', 'none');

                endif; ?>

            </main><!-- #main -->
        </div><!-- #primary -->
    </div><!-- .wrap -->

<?php get_footer();

