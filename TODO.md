- Create charity details page

- Create donation form

- Style the entire app


will not do for now:

- Create a authentication system

- comments for charities

- Create an admin panel


# STEPS
============
- Wired up the form
- Make the POST request with data (this should happen in the form component normally)
- Handle the POST request in the server
= SERVER: During POST request, try to make an external payment request to a payment service(Braintree) with the donation data
- SERVER: If payment succeeds respond HTTP STATUS 200 OK
- SERVER: If payment fail responds 500 with error message
- FRONTEND(EMBER): Receive the server response and display success or failure messages.
==============








# MODELS
==================
- Charity


- Donation
   - amount no
 - message
 - ref donor string, not null
 - charity_id not null, foreign-key constraint
