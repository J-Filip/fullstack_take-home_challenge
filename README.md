

# First attempt - MVP

## About

This was my first full-stack take-home challenge. It included a simple algorithm, adding pages on the frontend and endpoints on the backend.
It also required writing tests and having it run only using npm install and npm run start.

## Approach

In my first attempt I only tried to make it work. It slightly deviates from the guidelines by using cookies and server-side rendering with ejs templating. 

### Algorithm

The algorithm part was interesing as I don’t deal with that kind of tasks much. I managed to come up with my own solution and then asked chatGPT to do it (not so shockingly, it did it waaaaay faster than I did. And better)

### Backend (Node.js)

I added endpoints for login page, and encoder page. If user authenticated, he is given a token. Token is then stored inside a cookie and then we pass it with every request to our new endpoint /encode with provided, but modified, authentication middleware. 


### Frontend

Frontend elements are rendered server-side vith ejs templates. 

Client side form validation is simple so I used HTML form validation so I don't add unneceassary complexity if not needed.

The encode page consists of simple input and a send button. 

User inout is sent to the backend and the final results from the encoder are passed to the template and rendered again with the reault shown.

## Solution

I wasnt sure if I had to strictly follow the chanllenge guidelines. For example, I stored the token iside the cookie in the login middleware and then read it on every POST request to a newly added /encode endopint. 

If I understand correctly, I would have to write my own requests if I didnt make any changes to the given code. In my test branch, I tried this approach. Please read the test branch readme for more info. 

The reason why I made this my final solution is because it seemed a little safer.

## Struggles

As I am currently focused on the frontend, I had trouble with wrapping my head around sessions, tokens and middleware. Before this, I only dealt with firebase authentication and it was not too hard to implement. So I would probably use it again as I dont yet feel comfortable with implementing my own auth.

## What next?

Possible improvements: 

- optimize the algorithm - measure the performance and see if it can be done faster.
- add proper authentication - learn to implement own or proven third party solution like firebase auth.
- add serverside form validation - learn how it works and how to combine it with client side form validation.
- error handling - we can rederict users if unauthorized
  - learn why, when and how to write tests and add then implement them.
  - add styling, I would like to use tailwind more as I heard its great with component based frameworks. 

Depending on the further requirements, I would be more comfortable turning this to a SPA, probably using React.
