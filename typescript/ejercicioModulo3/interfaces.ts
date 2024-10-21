interface IceCream {
    flavor: string;
    scoops: number;
    instructions?: string;
 }

 let myIceCream: IceCream = {
    flavor: 'vanilla',
    scoops: 2
 }
 
 console.log(myIceCream.flavor);

 function tooManyScoops(dessert: IceCream) {
    if (dessert.scoops >= 4) {
       return dessert.scoops + ' is too many scoops!';
    } else {
       return 'Your order will be ready soon!';
    }
 }
 
 console.log(tooManyScoops({flavor: 'vanilla', scoops: 5}));

 interface Sundae extends IceCream {
    sauce: 'chocolate' | 'caramel' | 'strawberry';
    nuts?: boolean;
    whippedCream?: boolean;
    instructions?: string;
}

let myIceCream2: Sundae = {
    flavor: 'vanilla',
    scoops: 2,
    sauce: 'caramel',
    nuts: true
}

function tooManyScoops2(dessert: Sundae) {
    if (dessert.scoops >= 4) {
        return dessert.scoops + ' is too many scoops!';
    } else {
        return 'Your order will be ready soon!';
    }
}
console.log(tooManyScoops2({flavor: 'vanilla', scoops: 5, sauce: 'caramel'}));


interface IceCreamArray {
    [index: number]: string;
}

let myIceCream3: IceCreamArray;
myIceCream3 = ['chocolate', 'vanilla', 'strawberry'];
let myStr: string = myIceCream3[0];
console.log(myStr);