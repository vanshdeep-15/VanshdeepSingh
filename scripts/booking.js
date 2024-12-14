/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?
var dailyRate = 35;  // Default rate for full day
var selectedDays = [];  // Array to store selected days
var totalCost = 0;  // Variable to track the total cost

var daysOfWeek = document.querySelectorAll('.day');  // Days of the week (buttons)
var clearButton = document.querySelector('.clear-button');  // Clear button
var halfDayButton = document.querySelector('.half-day');  // Half day button
var fullDayButton = document.querySelector('.full-day');  // Full day button
var calculatedCostElement = document.querySelector('.calculated-cost');  // Element to display total cost


/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!
// Function to handle day clicks
function handleDayClick(event) {
    var dayButton = event.target;
  
    // Check if the day is already selected
    if (dayButton.classList.contains('clicked')) {
      return;  // Don't do anything if the day is already selected
    }
  
    // Add "clicked" class to the day button and add it to selectedDays
    dayButton.classList.add('clicked');
    selectedDays.push(dayButton.dataset.day);  // Assuming each button has a data-day attribute (e.g., data-day="monday")
  
    // Recalculate the total cost
    recalculateTotalCost();
}
  
// Attach event listeners to each day button
for (var i = 0; i < daysOfWeek.length; i++) {
    daysOfWeek[i].addEventListener('click', handleDayClick);
}


/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.
// Function to clear selected days
function clearDays() {
    // Remove "clicked" class from all day buttons
    for (var i = 0; i < daysOfWeek.length; i++) {
        daysOfWeek[i].classList.remove('clicked');
    }
  
    // Reset selectedDays and totalCost
    selectedDays = [];
    totalCost = 0;
  
    // Update the displayed cost to 0
    recalculateTotalCost();
}
  
// Attach event listener to the clear button
clearButton.addEventListener('click', clearDays);


/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.
// Function to handle half-day button click
function setHalfDayRate() {
    dailyRate = 20;
    halfDayButton.classList.add('clicked');
    fullDayButton.classList.remove('clicked');
    
    recalculateTotalCost();
}
  
// Function to handle full-day button click
function setFullDayRate() {
    dailyRate = 35;
    fullDayButton.classList.add('clicked');
    halfDayButton.classList.remove('clicked');
    
    recalculateTotalCost();
}
  
// Attach event listeners to half-day and full-day buttons
halfDayButton.addEventListener('click', setHalfDayRate);
fullDayButton.addEventListener('click', setFullDayRate);


/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value

// Function to recalculate the total cost
function recalculateTotalCost() {
    // The total cost is the number of selected days multiplied by the daily rate
    totalCost = selectedDays.length * dailyRate;
  
    // Update the displayed cost
    calculatedCostElement.innerHTML = '$' + totalCost;
}