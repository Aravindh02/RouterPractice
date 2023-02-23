// Follow this
// 1. Create a vite app named routing-app
// 2. Install v5 router-dom
// 3. Have 5 pages, 2 public routes and 3 private routes.

// ------Routes-------
// /login
// /home
// /contact
// /contact/edit
// /contact/add
// /not-found 

// All the contact routes are private.
// If user tried to visit this route, should check if there are logged in. Display all empty components for now.

// If the user is not logged in redirect them to the home page.

// The routes must be nested in proper way like in the above section.

// Have 5 components Login, Home, Contact, EditContact, AddContact each should be displayed in there respective routes.

// If user tried to navigate to some other route which is not defined they should be directed to /not-found route which renders a NotFound component.

// For now only the login page will be functional. All other pages can just have a heading with their name.

// For the login route, have 2 input fields email, password with inbuilt validation -: email must be valid, password must be above 7 digits.

// A login button should be present which will only be enabled if the validation is right. Or else it should be disabled.

// I will provide you an API route with the fake Backend for logging in

// If the API returns success - redirect the user to the contact page.

// Have a isLoggedIn state and make it true when api is successful.

// This specific state is responsible for all the authentication. If you are curious then try storing this inside local storage to make the state persist.

// A logged in user won't be able to visit the login page.

// Try having a navbar on all the private routes.

// If you manage to do this then I will provide you with additional info about the other components.

// Folder structure

// Assets
//          Img
//          Svg
// Components
//          Shared
//          Ui
// Pages -  route components 
// Api - i will provide

// No styles needed. Not even a  stylesheet

// Make it funtional and try to use sematic html. Heading, paragraph, strong etc. You know to highlight certain elements.

// ----Login api details-----
// Method - post
// Payload - 
// {
// email : string,
// password: string
// }

// Success -
// {
// Status:200,
// Data:{
// message: "user credentials authorised"
// }
// }

// Error -
// Status : 400
// Message: user credentials incorrect

// Alike the success object.


// I spend so much hours typing it in my mobile so please don't skip or give up on this.

// Good luck......🙌🏼