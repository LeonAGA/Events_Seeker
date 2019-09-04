
const eventBrite = new EventBrite();
const interface = new Interface();

//Event on click button action.
document.querySelector('#searchBtn').addEventListener('click', e => {
    e.preventDefault();

    // Read the text of the input.
    const inputText = document.querySelector('#event').value;

     // Read selected option
     const selectedValue = document.querySelector('#category-list')
     .options[document.querySelector('#category-list').selectedIndex].value;

     if (inputText !== ''){

         eventBrite.obtainEvents(inputText, selectedValue).
         then((events)=>{
             //Check is there are events
            if (events.events.length > 0){
               
                interface.ShowEvents(events.events);
            }else{
                interface.showMessage('There aren\'t any events', 'alert alert-danger col-12 text-center mt-4');
            }
         });  
     }else {

        interface.showMessage('Please type something', 'alert alert-danger col-12 text-center mt-4');
        document.querySelector('#event').focus();

     }

     
})