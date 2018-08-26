import { Component, Input, Output, AfterViewInit, EventEmitter } from '@angular/core';
import * as Moment from 'moment';
import 'moment/locale/it';

// Import jQuery $
declare var $: any;

@Component({
  selector: 'app-datepicker',
  templateUrl: './datepicker.component.html'
})
export class DatepickerComponent implements  AfterViewInit {

  @Input()  selectedDate: string;
  @Output() selectedDateChange = new EventEmitter();


  private _ioDateFormat = 'YYYY-MM-DD'; // passed to parent component selectedDate
  private _displayFormat = 'ddd, D MMM YYYY'; // shown to 
  private _locale = 'de'; // 'en', 'fr', 'it', ..
  private _timeUnitComparison = 'day'; // 'year', 'month', 'hour', 'ms'...
  private _icons = {
    time: 'glyphicon glyphicon-time',
    date: 'glyphicon glyphicon-calendar',
    up: 'glyphicon glyphicon-chevron-up',
    down: 'glyphicon glyphicon-chevron-down',
    previous: 'glyphicon glyphicon-chevron-left',
    next: 'glyphicon glyphicon-chevron-right',
    today: 'glyphicon glyphicon-screenshot',
    clear: 'glyphicon glyphicon-trash',
    close: 'glyphicon glyphicon-remove'
  };

  public datePickerId: string;


  constructor(  ) {
    this.datePickerId = 'eonasdan-datepciker-' + this._RandomId(5);
  }

  // Credits to csharptest.net and Priya
  // https://stackoverflow.com/questions/1349404/generate-random-string-characters-in-javascript
  _RandomId(length) {
    let text = '';
    const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    for (let i = 0; i < length; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }

    return text;
  }

  ngAfterViewInit() {
    // console.log('#' + this.datePickerId);

    const pickerOptions = {
      format: this._displayFormat,
      locale: this._locale,
      icons: this._icons
    };

    if (this.selectedDate) {
      const inputDate = Moment(this.selectedDate, this._ioDateFormat);
      if (inputDate.isValid()) {
        pickerOptions['selectedDate'] = inputDate;
      }
    }

    $('#' + this.datePickerId)
        .datetimepicker(pickerOptions)
        .on('change.datetimepicker', selectedDate => this.onDateChange(selectedDate))
        .on('dp.change', selectedDate => this.onDateChange(selectedDate)); //Backward compatible

  }

  onDateChange(dateEvent) {


    const currentdate = dateEvent.date; // Moment | null
    const previousdate = dateEvent.oldDate; // Moment | null
  
    if (!Moment.isMoment(currentdate)) {
      this.selectedDateChange.emit('');
      return;
    }

    if (
      Moment.isMoment(previousdate) &&
      currentdate.isSame(previousdate, this._timeUnitComparison)
    ) {
      
      // No changes, nothing to emit
      return;
    }

    this.selectedDateChange.emit(currentdate.format(this._ioDateFormat));
  }

}
