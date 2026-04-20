## MYGD WordPress Theme Package

This folder contains a WordPress-ready theme based on your current `index.html`.

### Theme location

- `wordpress-theme/mygd-theme`

### What was prepared

- `front-page.php` with your full landing page markup
- `assets/css/site.css` from your inline `<style>`
- `assets/js/site.js` from your inline `<script>`
- `assets/images/MYGD-Logo.png` wired into the template
- Standard theme files: `style.css`, `functions.php`, `header.php`, `footer.php`, `index.php`

### Install on WordPress

1. Zip the `mygd-theme` folder (not the parent `wordpress-theme` folder).
2. In WordPress Admin, go to **Appearance -> Themes -> Add New -> Upload Theme**.
3. Upload the zip and click **Activate**.
4. Go to **Settings -> Reading** and set your homepage to a static page.
5. Create/select the page you want as homepage (the theme serves this design on front page).

### Direct server install (alternative)

Copy `mygd-theme` into:

`wp-content/themes/mygd-theme`

Then activate it from **Appearance -> Themes**.
