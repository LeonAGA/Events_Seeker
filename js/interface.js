class Interface{

    constructor(){
        this.init();
        this.results = document.querySelector('#results');
        this.categories = document.querySelector('#category-list');
        this.responses = document.querySelector('#results');
    }

    //Initialices the interface.
    init(){

        this.printCategory();
    }

    //Add category to the select element.
    printCategory(){

        const categorylist = eventBrite.obtainCategories()
        .then(categories =>{
             const cats = categories.categories;
            cats.forEach(cat=> {
                const option = document.createElement('option');
                option.value =  cat.id;
                option.appendChild(document.createTextNode(cat.name_localized));
                this.categories.appendChild(option);
            });
        })
        
    }

    //Show a message to the user.
    showMessage(message, classtype){

        if(document.querySelector('.alert')){
            document.querySelector('.alert').remove();
        }   
        const messageNode = document.createElement('div');
        messageNode.classList = classtype;
        messageNode.appendChild(document.createTextNode(message));
        this.responses.appendChild(messageNode);
        setTimeout(()=>{
            if(document.querySelector('.alert')){
                document.querySelector('.alert').remove();
            }         
        },3000)

    }

    //Read the response of the API and print its results.
    ShowEvents(events){


        this.cleanResults();
        console.log(events);
        // loop throught the array
        events.forEach(event =>{
            this.results.innerHTML += `
                <div class="col-md-4 mb-4">
                    <div class="card">
                        <img class="img-fluid mb-2" src="${event.logo !== null ? event.logo.url :''}">                                                                        
                      <div class="card-body">
                        <div class="card-text">
                            <h2 class="text-center">${event.name.text}</h2>
                            <p class="lead text-info text-center">Information about the event.</p>
                            <p>${event.description.text.substring(0,280)}...</p>
                            <span class="badge badge-primary"> Capacity: ${event.capacity? event.capacity:'unknown'}</span>
                            <span class="badge badge-secondary"> Date: ${event.start.local}</span>
                            <a href="${event.url}" target="_blank" class="btn btn-primary btn-block mt-4">Buy Ticket</a>
                        </div>
                      </div>  
                    </div>
                </div>
            `;
        });

    }

    //Clean the previous results.
    cleanResults(){
        this.results.innerHTML = '';
    }
}