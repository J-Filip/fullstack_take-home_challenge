

# First attempt - MVP

## What?

In my first attempt I only tried to make it work. It slightly deviates from the guidelines by using cookies and server-side rendering with ejs templating. Form validation is simple so I used HTML form validation so I don't add unneceassary complexity if not needed.

The algorithm part was interesing as I don't deal with that kind of tasks much. I managed to come up with my own solution and then asked chatGPT to do it (not so shockingly, it did it waaaaay faster than I did).
I will try to optimize it before sending the repo for review.

## Struggles

As I am currently focused on the frontend, I had trouble with wrapping my head around sessions, tokens and middleware. Before this, I never dealt with auth, especiallly not implementing my own auth.

## What next?

I will probably:
  - use React on the frontend to handle routing and send requests with fetch API
  - write tests with Jest, Mocha or simmiliar
  - use tailwind for styling 