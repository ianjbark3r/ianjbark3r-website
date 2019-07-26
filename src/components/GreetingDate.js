import React from 'react';

const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
  ];

const days = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday'
]

export default class GreetingDate extends React.Component{
  setDate() {
    const d = new Date();
    const day = d.getDate();

    if (day === 1 || day === 21 || day === 31) {
      return `${day}st`;
    } else if (day === 2 || day === 22) {
      return `${day}nd`;
    } else if (day === 3 || day === 23) {
      return `${day}rd`;
    } else {
      return `${day}th`;
    }
  }

  render() {
    const d = new Date();
    const weekday = days[d.getDay()];
    const month = months[d.getMonth()];
    const year = d.getFullYear();

    return(
      <>
        <h4><span style={{ display:"inline-block", textShadow:'1px 1px 2px #000000' }}>It is {weekday},</span></h4>
        <h4><span style={{ display:"inline-block", textShadow:'1px 1px 2px #000000' }}> {month} {this.setDate()}, {year}</span> and</h4>
      </>
    )
  }
}
