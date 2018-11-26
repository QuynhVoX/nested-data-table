# NestedDataTable

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.2.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

# Master Detail table
Master detail table built on top of angular material. It allows to nested as much as table you want. 
To Have a nested table your object need to contain a an array with the name `details` (see the example if you not sure).
I built this project from the ideas of Daniele zuric https://raw.githubusercontent.com/daniele-zurico/ngx-nested-data-table/master/master-detail.jpg

# Features:
- master detail table 
- search
- paginator (visible if you've more then 10 items) 
- double row paginator component fixes the row issue that Daniele had
- order
- custom column header


# dependencies
This packages require:

```
"@angular/common": "^6.0.0-rc.0 || ^6.0.0",
"@angular/core": "^6.0.0-rc.0 || ^6.0.0",
"@angular/material": "^6.1.0",
"@angular/cdk": "^6.1.0"
```


# Usage:


Data is something like this:
```
data: any[] = [
  {
    name: 'daniele',
    surname: 'zurico',
    sex: 'male'
  },
  {
    name: 'Emma',
    surname: 'Smith',
    sex: 'female',
    details: [
      {
        phone: '+44234323456',
        address: 'Oxford Street',
        city: 'London',
        details: [
          {
            country: 'UK'
          }
        ]
      },
      {
        a: 'Charlotte',
        b: 'Taylor'
      },
    ]
  }
];
```
