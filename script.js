'use strict';

function getLocation(){
    let userFrom = prompt('Where are you from?');
    return userFrom;
 }

function locationCheck(userCity){
    if(userCity === ''){
        locationPlace = prompt('Please tell me where your from if you want to');
    } else {
        let userCity = locationPlace}

        return locationPlace;
    }

function whatLocation(message){
    if(message === 'Seattle'){
        document.write("Welcome Seattle Mariner Fan!!!");
    } else if (message === 'New York'){
        document.write('Welcome New York Yankee Fan!!!');
    } else if (message === 'Boston'){
        document.write('Welcome Boston Red Sox Fan!!! Sorry for a bad season...') ;    
    } else {
        document.write('Sorry, do not have a message for your location. Please enter Seattle, New York or Boston for a different resoonse.');
    }
    
 }

