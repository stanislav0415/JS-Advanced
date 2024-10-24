function prossesTickets(input,criteria) {

     const criteriaOptions = ['price', 'destination','status']
     const tickets = []

    if (!Array.isArray(input || typeof criteria != 'string')) {
        throw Error('Invalid Argument; One or more of the supplied arguments does not match the required type')
    }
    if (criteriaOptions.indexOf(criteria) == -1) {
        throw Error('Invalid sorting argument. Valid options: ' +criteriaOptions.join(", "))
    }

    class Ticket {
        constructor(destination ,price,status){
         this.destination = destination
         this.price = price
         this.status = status
        }

      static sort(tickets, criteria) {
        if (criteria == 'price') {
            tickets.sort((a, b)=> a[criteria] - b[criteria])
        }else{
            tickets.sort((a, b)=> a[criteria].localeCompare(b[criteria]))
        }
      }

    }

    for (const line of input) {
        [destination ,price, curStatus] = line.split('|')

        const ticket = new Ticket(destination,Number(price),curStatus)
        tickets.push(ticket)

        
    }
    Ticket.sort(tickets, criteria)

    return tickets
}