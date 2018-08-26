# Angular 2+ Eonasdan Bootstrap-datetimepicker Wrapper Component

This is a Angular 2+ wrapper component around the bootstrap-datetimepicker.

Documentation for the original Eonasdan Bootstrap-datetimepicker can be found here: 

  https://eonasdan.github.io/bootstrap-datetimepicker/

Documentation for Moment.js can be found here:

  https://momentjs.com/docs

Just as the original bootstrap-datetimepicker, it is based on Bootstrap and jQuery (and Angular, of course).

It handles the initialization of the component, plus the interface between jQuery and Angular.

Usage:

  <app-datepicker [(selectedDate)]="yourParentComponentPublicVariable"></app-datepicker>


## Minimal requirements

The minimal requirements are the same as the Eonasdan bootstrap-datetimepicker, plus a working Angular 2+ App:

Angular 2+
jQuery
Moment.js
Bootstrap.js (transition and collapse are required if you're not using the full Bootstrap)
Bootstrap Datepicker script
Bootstrap CSS
Bootstrap Datepicker CSS
Locales: Moment's locale files, if needed



## Settings you could be interested in

### Parameters from Moment.js (https://momentjs.com/docs)

- private _ioDateFormat (string): defines the date format when received and passed to parent component (selectedDate), for example for sending it to a DB

- private _displayFormat (string): defines the date format when displayed

- private _locale (string): defines the locale

- private _timeUnitComparison (string): defines the smallest time unit (from years to milliseconds) that is used to check if there was a change in the selected date https://momentjs.com/docs/#/query/is-same/

### Parameters from Eonasdan bootstrap-datetimepicker:

- const pickerOptions (object): set the bootstrap-datetimepicker options (see https://eonasdan.github.io/bootstrap-datetimepicker/Options/ for a detailed list)

### Other settings

- datePickerId: unique ID assigned to the component, with a random string attached so that if two or more date pickers are on the same page, they do not conflict
