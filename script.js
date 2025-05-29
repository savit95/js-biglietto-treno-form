const ticketForm = document.getElementById('ticket-form');
console.log(ticketForm);
const numberKm = document.getElementById('number-km');
console.log(numberKm);
const dealPassenger = document.getElementById('deal-passenger');
console.log(dealPassenger);
const titlePriceTicket= document.getElementById('title-price-ticket');


ticketForm.addEventListener('submit',function(event){
        event.preventDefault();
        let kilometres = numberKm.value;
        console.log(kilometres);
        let deal = dealPassenger.value;
        console.log(deal);

        let price = 0.21 * kilometres;

        if (deal === 'studentdeal') {
            reduction=20 * price/100;
            price -= reduction;
        } else if(deal === 'overdeal'){
            reduction=40 * price/100;
            price -= reduction;
        }       



        console.log(price);

    }
)
