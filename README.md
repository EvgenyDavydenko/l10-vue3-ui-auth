1.  Create a new Laravel project
```
composer create-project laravel/laravel l10-ui-vue3
```
2.  Install the frontend scaffolding using the `laravel/ui` with `bootstrap 5.2` and `vue3`
```
composer require laravel/ui
php artisan ui vue --auth
npm install
npm run build
```
3. Install the `vue-router` package and create simple SPA
```
npm install vue-router
```
4.  SPA Auth using sanctum
