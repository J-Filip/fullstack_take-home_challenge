## Second solution - vanilla js SPA


In my second attempt, I didn't change any of the backend code (strictly followed the challenge instructions) and only added one endpoint. It's a simple attempt without any frontend framework or client-side routing. 

## Approach 

In this decoupled approach, we use client side javascript and fetch api to send POST requests to our endpoints. Token is stored in local storage (security threat) and then sent with every request to /encode endpoint.

Elements in the DOM are simply removed and replaced (here, we would use some frontend framework with routing) for quick prototyping.
