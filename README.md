# AngularStateManagementAPP

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.2. It's a sample Angular state management application using **NGRX**: _@ngrx/store_, _@ngrx/effects_, _@ngrx/schematics_, _@ngrx/store_, _@ngrx/store-devtools_.

Almost all files related with state was generated using: _@ngrx/schematics_.

## Development server

Just run `spm start` for a dev server. Navigate to `http://localhost:4200/`.

## Project Sructure

As the Angular way, all the application files are in `src/app` folder, with the following content (using the feature module pattern):

```
|____app-routing.module.ts
|____app.component.html
|____app.component.scss
|____app.component.spec.ts
|____app.component.ts
|____app.effects.spec.ts
|____app.effects.ts
|____app.module.ts
|____layouts
| |____navigation
| | |____navigation.component.ts
|____pages
| |____home
| | |____home-routing.module.ts
| | |____home.component.ts
| | |____home.module.ts
| |____product
| | |____components
| | | |____form
| | | | |____form.component.html
| | | | |____form.component.scss
| | | | |____form.component.spec.ts
| | | | |____form.component.ts
| | | |____nav
| | | | |____nav.component.ts
| | |____models
| | | |____product.ts
| | | |____productHttpRequest.ts
| | |____product-add
| | | |____product-add.component.ts
| | |____product-edit
| | | |____product-edit.component.ts
| | |____product-list
| | | |____product-list.component.ts
| | |____product-routing.module.ts
| | |____product.module.ts
| | |____services
| | | |____gallery-http.service.ts
| | | |____product-http.service.ts
| | |____store
| | | |____product.actions.ts
| | | |____product.effects.ts
| | | |____product.reducers.ts
| | | |____product.selectors.ts
| | | |____product.state.ts
|____reducers
| |____index.ts
```

# App highlights

### 1) A sample CRUD for products

- Using Observables and async pipe.
- All the actions are done first on state.
- Interface for HttpRequest and Product

### 2) What's include:

- Sample Restful endpoit for Products
- Sample Restful endpoint for Image Gallery
- Sample image gallery to choose a product image
- Image loading placeholder to keep the UI consistent

# Working example: [here](https://angularsm.surge.sh/)
**NOTE: due some surge(host) limitations, page reload maybe fails, to refresh page, test using the local server with `npm start` command.**
