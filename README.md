# quiz_auction  Quiz III

![auctions1](https://user-images.githubusercontent.com/21187699/142676200-dae9d6db-78db-4956-a1a8-e365aa7a58e4.gif)


![auctions1](https://user-images.githubusercontent.com/21187699/142677367-a279cb4e-a9bc-4715-b564-85a88e855f53.gif)



### Submission Guidelines
This project will have a Rails application and a React application. Make sure

both directories are included in the same Git project like so:

final_exam/ <--- Run git init here

  |

  +-- .git/

  +-- biddr_api/ <--- Rail application in here

  +-- biddr_client/ <--- React application in here

Generate the React app with create-react-app and generate the Rails app _skipping git_ with rails new --skip-git biddr_api. If you choose to generate your Rails app with the --api option, be aware that the session will be removed. To re-add the session, check out this article.

Commit and push your work. Then, create a new branch to implement the following features.


### Part 1 A: Rails HTTP API – Auction and Bid CRUD

Value: 20

Build a Rails JSON API. Based on the wireframes, at the bottom of this page, choose which columns you will need for your application's models.

Implement create, show and index actions for Auctions.
Auctions should have many Bids.
Implement the create action for Bids.

![Screenshot from 2021-11-19 11-07-55](https://user-images.githubusercontent.com/21187699/142677964-61f4ae86-026b-4dd4-a3a6-3eaf5672df03.png)



### Part 1 B: Rails HTTP API – Set up CORS and serializers
Value: 15

You should use a tool like Postman to manually test your API at this point

![Screenshot from 2021-11-19 11-17-59](https://user-images.githubusercontent.com/21187699/142679167-4ac80069-e321-4cba-9d03-7c81b50c8887.png)
)



### Part 2: Rails HTTP API – User Authentication
Value: 20

Add user authentication.

Implement a SessionsController.
Add a create action to sign-in users.
Add a destroy action to sign-out users.
Only authenticated users can:
Create auctions.
Create bids.
Users must be associated to the auctions and bids they create.


![Screenshot ](https://github.com/harryji168/Pictures/blob/dbc8ce10159daf117dda904f3728d3c142fe937b/Screenshot%20from%202021-11-19%2011-20-17.png)



### Part 3: React Client – Public Routes
Value: 20

Build a React Client for the JSON API. Use the wireframes below as a guide.

Implement the following page components:
WelcomePage display welcome text.
AuctionIndexPage lists all auctions.
AuctionShowPage shows a single auction. the AuctionShowPage is illustrated in the wireframes.
Create a NavBar to navigate between WelcomePage and AuctionIndexPage.

Home Page
![Screenshot ](https://github.com/harryji168/Pictures/blob/0d36013550f96fe87fecb6862dcb81120749be42/Screenshot%20from%202021-11-19%2011-24-04.png)

Auction Index Page
![Screenshot ](https://github.com/harryji168/Pictures/blob/3aac936b7c3d04860aa3da51dd81a45dd5f6f500/Screenshot%20from%202021-11-19%2011-26-46.png)

Auction Show Page
![Screenshot ](https://github.com/harryji168/Pictures/blob/55442cc582499d1ff23fc95240d7d50ceecb3583/Screenshot%20from%202021-11-19%2011-28-56.png)


### Part 4: React Client – Sign In
Value: 15

Add support in the client for user authentication:

Implement a SignInPage and link to it in the NavBar.
Only show the SignInPage link if the user is not signed in. Otherwise, display their name.
Submitting the form on the SignInPage updates the session cookie and updates the React application state with the user.

Login Page
![Screenshot ](https://github.com/harryji168/Pictures/blob/886bd69f2940173e38b97fe402ef47c7eac59cea/Screenshot%20from%202021-11-19%2011-32-47.png)


### Part 5: React Client – Auctions and Bidding
Value: 15

Add support for auctions and bids in the client:

Implement the AuctionNewPage shown below to allow authenticated users to create bids.
After successfully creating a new auction, redirect the user to its AuctionShowPage.
Implement the ability to bid on auctions from the AuctionShowPage.


New Auction Page
![Screenshot ](https://github.com/harryji168/Pictures/blob/014fc6270afa15fd46f8b6588b7af1f986d83fa0/Screenshot%20from%202021-11-19%2011-37-31.png)



### Part 6: React Client – Authenticated Routes
Value: 10

Create a component to redirect users attempting to access unauthorized routes.

Create a AuthRoute component based on react-router-dom's Route component.

AuthRoute takes an isAllowed prop. When the prop is true, let the route render the given component. When the prop is false, redirect the user to the SignInPage. In all other respects, it functions like the Route component.

Use it to prevent users from accessing the AuctionNewPage if they are not signed-in.

![Screenshot ](https://github.com/harryji168/Pictures/blob/107adf99d19c97b478213164d2ba30ece9f5fa06/Screenshot%20from%202021-11-19%2011-43-16.png)



### Stretch 1: Sign out
Value: 2

Add the ability for users to sign out.

Add a Sign Out link to the NavBar that is only shown to signed-in users.
Clicking it signs out the user. Removing them from the application state and removing their id from the session cookie.


![Screenshot ](https://github.com/harryji168/Pictures/blob/c9456a004dcfee566894d0038a87c6997193c752/Screenshot%20from%202021-11-19%2011-45-15.png)


### Stretch 2: Sign Up Page
Value: 3

Add the ability for users to sign up from the frontend client.

Implement a UserController with a create action to allow users to sign up through the API. Creating a user should also sign in the user meaning that the create action must return a JWT.
Implement a SignUpComponent to create a user.
Add a link to the SignUpComponent in the NavBar if the user isn't signed in.

![Screenshot ](https://github.com/harryji168/Pictures/blob/6d138e04e31e63ae727e11e3b20fdfba81d2dde5/Screenshot%20from%202021-11-19%2011-48-56.png)


### Stretch 3: Auction States
Value: 5

Support auction states.

Add support for states, draft, published and reserve met, to the auction model.
When created an auction should be set to the draft state. In draft state, the auction is only visible to the author.
Implement a Publish button, only visible to the author of the auction, in the AuctionShowPage.
When clicked, this sets the auction's state to published. All published auctions should be visible.
When a user bids higher than the auctions reserve price, set the reserve met state on the auction. This can only happen on published auctions.
