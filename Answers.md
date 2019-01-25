1.  Explain the differences between `client-side routing` and `server-side routing`.
-- Server side routing requires that the page be reloaded each time a request is made to the database for information to be displayed on the DOM. This is because the server sends a full HTML request each time a request is made. However, client-side routing, allows for one full HTML request to be made initially when the page is loading and subsequently only JSON data is required to update the DOM. Client-Side routing tends to be faster after the initial request but the browser may have downloaded data the user may never use.

2.  What does HTTP stand for?
-- HyperText Transfer Protocol

3.  What does CRUD stand for?
-- Create Read Update Delete

4.  Which HTTP methods can be mapped to the CRUD acronym that we use when interfacing with APIs/Servers.
-- Create = Post, Read = Get, Update = Put, Delete = Delete/annihilate.

5.  Mention three tools we can use to make AJAX requests
-- jQuery, Fetch API and Axios