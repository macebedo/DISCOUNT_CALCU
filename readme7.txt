Create a basic webpage that will include a form for order processing.

The form will contain fields to enter:

    First Name
    Last Name
    Phone number
    Quantity of widgets to order
    Read only field to display widget price @ $4.95/each

Use regular expressions to validate these fields:

    Name will contain only alphabetic characters, spaces are legalPhone number will be in (xxx) xxx-xxxx format
        First name – 2 to 15 characters
        Last name – 2-25 characters
    Quantity of widgets to order is a number from 1-99

Total order calculations:

    Widget price is $4.95/each
    Sales tax is 8.5%
    Percentage discounts of 10% at intervals of 10 widgets ordered – 10% for every 10 ordered
        Be sure discount is calculated before sales tax is applied
        Maximum discount is 40%
            1-9 ordered – no discount
            10-19 ordered – 10% discount
            20-29 ordered – 20% discount
            Etc…

Provide for user feedback if user entry is not formatted correctly or does not meet proper criteria.

When all fields validate properly, output order information somewhere below the form using innerHTML.  Order information will include:

    Users full name and phone number
    Quantity of widgets ordered
    Information on any discounts applied
    Amount of sales tax charged
    Total of order
