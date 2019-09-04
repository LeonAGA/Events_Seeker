class EventBrite{

    constructor(){
        this.token_auth = '2MWXQSAJHGRZESZ3UJAK';
        this.order = 'date';
    }

    //Obtains the categories.
    async obtainCategories(){
        //Consult the categories. 
        const responseCategories = await fetch
        (`https://www.eventbriteapi.com/v3/categories/?token=${this.token_auth}`);

        // Wait for the responses for the categories.
         const categories = await  responseCategories.json();

         return categories;
    }

    //Obtains the events.
    async obtainEvents(event, category){

        const response = await fetch
        (`https://www.eventbriteapi.com/v3/events/search/?q=${event}&sort_by=${this.order}&categories=${category}&token=${this.token_auth}`)
        
            const events = await response.json();

            return events;
        
    }
}