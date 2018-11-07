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

class GreetingActivity extends React.Component {
  getActivity() {
    const d = new Date();
    const month = months[d.getMonth()];
    const day = d.getDay();
    const hour = d.getHours();

    if (month === 'March' && day === 7) {
      return 'eating birthday cake';
    } else if (month === 'July' && day === 4) {
      return 'watching fireworks';
    } else if (month === 'September' && day === 19) {
      return 'enjoying a sea shanty, me hearties';
    } else if (month === 'December' && day === 25) {
      return 'feeding reindeer';
    } else if (day === 5 || day === 6) {
      return 'begrudgingly relaxing';
    } else if (day < 5 && hour < 6) {
      return 'sleeping';
    } else if (day < 5 && hour >= 6 && hour < 12) {
      return 'coding';
    } else if (day < 5 && hour === 12) {
      return 'eating lunch';
    } else if (day < 5 && hour > 12 && hour < 18) {
      return 'coding';
    } else if (day < 5 && hour === 18) {
      return 'eating dinner';
    } else if (day === 0 && hour > 18 && hour <= 22) {
      return 'reticulating splines';
    } else if (day === 1 && hour > 18 && hour <= 22) {
      return 'binging Parks & Rec';
    } else if (day === 2 && hour > 18 && hour <= 22) {
      return 'snuggling with the dog';
    } else if (day === 3 && hour > 18 && hour <= 22) {
      return 'reading (no, seriously)';
    } else if (day === 4 && hour > 18 && hour <= 22) {
      return 'unwinding';
    } else if (day < 5 && hour > 22) {
      return 'sleeping';
    }
  }

  render() {
    return <h3>is probably {this.getActivity()}.</h3>
  }
}

export default GreetingActivity;
