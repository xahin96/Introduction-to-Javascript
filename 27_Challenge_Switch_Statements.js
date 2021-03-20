// Challenge: Customer Upgrade

/*
 1. Our business wants to convince users to upgrade their accounts.
 2. Check a user's account type (switch) of 'shopper', 'super shopper', & 'guest'.
 3. If a user is a 'guest' ask them if they want to upgrade to a 'shopper'.
 4. If a user is a 'shopper' ask if they want to upgrade to a 'super shopper'
 5. If a user is a 'super shopper' tell them they are the best!
 6. If we don't know user's status they are a guest.
*/

const userType = null;

switch (userType) {
    case 'shopper' :
    console.log('Upgrade to super shopper?');
    break;
    
    case 'super shopper':
    console.log('You are killin it!');
    break;
    
    default: 
    console.log('Would you like to upgrade to a shopper?');
    break;
}