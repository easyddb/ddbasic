# DDBasic theme for Ding2

## Maintenance pages

The theme provides maintenance page templates:
- *maintenance-page-tpl.php*: This page template is used when the site has been set offline by the administrator. 
- *maintenance-page--offline.tpl.php*: This page template is used when the site cannot get in contact with the database.

It is common for ding2 sites to have the DDBasic theme reside in the folder /profiles/ding2/themes/ddbasic.
In this case, you will need to add the following lines to your settings.php file in order for both template 
files to be displayed properly:

    $conf['install_profile'] = 'ding2';
    $conf['maintenance_theme'] = 'ddbasic';

## Requirements
Current project requires some libraries to be installed:
 1. latest version of http://nodejs.org/
 2. ruby
### Windows installation:
- download latest version of **ruby** from http://rubyinstaller.org/
- download latest version of ruby **development kit**  from http://rubyinstaller.org/
- see installation guide here https://github.com/oneclick/rubyinstaller/wiki/Development-Kit especially paragraph 4 
3. type in cmd **gem install sass** and **gem install compass**
### Unix installation:
unix by default should have ruby preinstalled, so you can start downloading desired gems immediately.
- type **gem install sass** and **gem install compass** in terminal

### Project dependencies Installation
- Go to theme folder
- type in terminal **npm install**
- next type **bower install**
- and run working environment with command **grunt dev**