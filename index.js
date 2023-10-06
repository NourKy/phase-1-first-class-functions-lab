// Code your solution in this file!
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];
function returnFirstTwoDrivers(drivers)
{
    // const driversFirstTwo=[];
    // driversFirstTwo.push(drivers[0],drivers[1]);
    // return driversFirstTwo;
    return drivers.slice(0, 2);
}
returnFirstTwoDrivers(drivers);
function returnLastTwoDrivers(drivers)
{
    return drivers.slice(-2); 
}
returnLastTwoDrivers(drivers);
// function selectingDrivers(){
   
//     const selectingDriversArray = [
//         returnFirstTwoDrivers(drivers),
//         returnLastTwoDrivers(drivers),
//       ];
//       return selectingDriversArray;
//     }

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
//console.log(selectingDrivers);

function createFareMultiplier(x)
{
    const fareMultiplier=x=>x*x;
    return fareMultiplier;
}
const fareDoubler=(x)=>x*2;
const fareTripler=(x)=>x*3;

function selectDifferentDrivers(drivers,returnDriversFunction)
{
    return returnDriversFunction(drivers);
}