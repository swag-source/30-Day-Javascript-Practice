// Write a code which can give grades to students according to theirs scores: 

/* let grade = 85
switch(true){
    case grade <= 100 && grade :
        console.log('your grade is an A');
        break;
    case grade < 80:
        console.log('your grade is a B');
        break;
    case grade < 70:
        console.log('your grade is a C');
        break;
    case grade < 60:
        console.log('your grade is a D');
        break;
    case grade < 50:
        console.log('your grade is an F');
        break;
    }*/

// Check if the season is Autumn, Winter, Spring or Summer. If the user input is :

let season = prompt('Enter your season:')
switch(season){
    case 'September':
    case 'October':
    case 'November':
        console.log('the season is Autumn.');
        break;
    case 'December':
    case 'January':
    case 'February':
        console.log('the season is Winter.');
        break;
    case 'March':
    case 'April':
    case 'May':
        console.log('the season is Spring');
        break;
    case 'June':
    case 'July':
    case 'August':
        console.log('the season is Summer');
        break;
}