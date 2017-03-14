# Introduction #
As I do not wish to clutter the repo with unneeded files I have only included the "raw_files" folder.
## Raw_Files ##
This folder contains all the files worked on to complete the challenge along with a mysql database dump file to show all data that was added to the posts and various configuration settings.
In order to replicate this functionality locally:

1. Install [VVV](https://github.com/Varying-Vagrant-Vagrants/VVV)

2. Run `vagrant up`

3. Wait for vagrant to finish

4. Copy `vet-animal-page.php` into `www/wordpress-default/public_html/wp-content/themes/twentyseventeen`
    1. Please note that this page was based on and tested with the twentyseventeen theme only. It should work with everything else but the plugin specifically refers to twentyseventeen's text domain.

5. Copy `vet_animal_cpt` into `www/wordpress-default/public_html/wp-content/plugins`
    1. Once complete, you will have to activate the plugin via the Wordpress's backend or nothing will show up

6. Import `wordpress_default.sql` into the database to setup all tables with the revelant data
    1. As VVV sets up a Wordpress database for you, you may need to clear out all the tables before importing this file otherwise there may be errors

7. VVV should now be setup to correctly use the vet_animal_cpt plugin and you should be able to view the page template by heading to `local.wordpress.dev/vets-and-animals/`
