// Write a program which tells the number of days in a month.

let monthInput = prompt('enter a month:' )
switch(month){
    case 'January':
    case 'March':
    case 'May':
    case 'July':
    case 'August':
    case 'October':
    case 'December':
        console.log(month + ' has 31 days');
        break;
    case 'February':
        console.log(month + ' has 29 days')
        break;
    case 'April':
    case 'June':
    case 'September':
    case 'November':
        console.log(month + ' has 30 days');
        break;
    default:
        console.log('input wasn\'t a year')

}