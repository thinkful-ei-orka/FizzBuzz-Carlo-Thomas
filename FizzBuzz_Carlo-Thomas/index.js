'use strict';

/*
create an event listener for submit
Get a number
insert in .js-results div:

<div class="fizz-buzz-item">
  <span>n</span>
</div>
 n = 1

 if content is fizz, add .fizz
 if content is buzz, add .buzz
 if content is fizzbuzz, add .fizzbuzz

 append .js-results to DOM

 */

$('#number-chooser').submit(event => {
    event.preventDefault();

    //get input from event
    let fizzBuzzCount = $(event.currentTarget).find('#number-choice').val();
    console.log(fizzBuzzCount);

    //FizzBuzz logic
    for (let i = 1; i <= fizzBuzzCount; i++) {
        let divSection = $("<div class='fizz-buzz-item'> </div>");

        if(i % 3 === 0 && i % 5 === 0) {
            divSection.addClass('fizzBuzz').append('<span>fizzBuzz</span>');
        } else if (i % 3 === 0) {
            divSection.addClass('fizz').append('<span>fizz</span>');
        } else if (i % 5 === 0) {
            divSection.addClass('buzz').append('<span>buzz</span>');
        } else {
            divSection.append(`<span>${i}</span>`);
        }
        
        $('.js-results').append(divSection);
    }
})