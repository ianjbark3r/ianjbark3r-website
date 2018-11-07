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
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday'
]

class GreetingDate extends React.Component{
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

    return <h3>It is {weekday}, {month} {this.setDate()}, {year} and</h3>
  }
}

export default GreetingDate;
