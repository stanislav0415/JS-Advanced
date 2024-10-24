class Hotel {
    constructor(initialBudget) {
        this.roomAvailability = {};
        this.supplyStock = {};
        this.budget = Number(initialBudget);
    }

    restockSupplies(supplies) {
        let result = [];

        for (const supplie of supplies) {
            let arr = supplie.split(' ');
            let supplyName = arr[0];
            let supplyQuantity = Number(arr[1]);
            let supplyTotalPrice = Number(arr[2]);

          
            if (supplyTotalPrice <= this.budget) {
                this.budget -=  supplyTotalPrice;

                if (this.supplyStock.hasOwnProperty(supplyName)) {
                    this.supplyStock[supplyName] += supplyQuantity;
                } else {
                    this.supplyStock[supplyName] = supplyQuantity;
                }

                result.push(`Successfully stocked ${supplyQuantity} ${supplyName}`);
            } else {
                result.push(`There was not enough money to restock ${supplyQuantity} ${supplyName}`);
            }
        }

        return result.join('\n');
    }

    addRoomType(roomType, neededSupplies, pricePerNight) {
        if (this.roomAvailability.hasOwnProperty(roomType)) {
           return `The ${roomType} is already available in our hotel, try something different.`;
        } else {
            this.roomAvailability[roomType] = {
                neededSupplies: neededSupplies,
                pricePerNight: pricePerNight
            };

            return `Great idea! Now with the ${roomType}, we have ${Object.keys(this.roomAvailability).length} types of rooms available, any other ideas?`;
        }
    }

    showAvailableRooms() {
        if (Object.keys(this.roomAvailability).length > 0) {
            let result = [];
            for (let roomType in this.roomAvailability) {
                result.push(`${roomType} - $ ${this.roomAvailability[roomType].pricePerNight}`);
            }
            return result.join('\n');
        } else {
            return `Our rooms are not ready yet, please come back later...`;
        }
    }

    bookRoom(roomType) {
        if (this.roomAvailability.hasOwnProperty(roomType)) {
            const neededSupplies = this.roomAvailability[roomType].neededSupplies;

            for (const supply of neededSupplies) {
                let [supplyName, supplyQty] = supply.split(' ');
                supplyQty = Number(supplyQty);

                if (this.supplyStock.hasOwnProperty(supplyName)) {
                    if (this.supplyStock[supplyName] >= supplyQty) {
                        return `Your booking for ${roomType} has been confirmed! The price is $${this.roomAvailability[roomType].pricePerNight} per night.`;
                    } else {
                        return `We are currently unable to accommodate your request for ${roomType}, sorry for the inconvenience.`;
                    }
                } else {
                    return `There is no ${roomType} available, would you like to book another room?`;
                }
            }
        } else {
            return `There is no ${roomType} available, would you like to book another room?`;
        }
    }
}


let hotel = new Hotel(500);

console.log(hotel.restockSupplies(["Soap 100 50", "Towels 20 100", "Shampoo 50 75"]));
