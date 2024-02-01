import axios from 'axios';
import _ from 'lodash';
import __ from '@talkohavy/lodash';

console.log(axios);
console.log(__);
console.log(_);

const app01 = document.createElement('div');
const a = document.createElement('h2');
a.textContent = 'App-01';
const b = document.createElement('div');
b.textContent = 'is empty: true';
app01.appendChild(a);
app01.appendChild(b);
// RESULT:
// const appName = (
//   <div>
//     <h2>App-01</h2>
//     <div>is empty: {isEmpty({})}</div>
//   </div>
// );

// console.log('lodash isEmpty says:', _.isEmpty({ a: 1 }));

console.log('%capp-01 is working', 'font-size:22px; color: red; padding: 2px');

document.getElementById('root').appendChild(app01);
