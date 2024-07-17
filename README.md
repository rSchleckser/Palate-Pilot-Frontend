# Palate-Pilot

Palate-Pilot is a web application that allows users to explore different countries and their popular foods. Users can create accounts to add their favorite foods, each with an image, description, and other relevant information. This app aims to provide a comprehensive platform for food enthusiasts to discover, share, and learn about culinary delights from around the world.

## Table of Contents

- [Getting Started](#getting-started)
- [User Story](#user-story)
- [Technologies](#technologies)

## Getting Started
- a link to your deployed app
- a link to your planning materials
- a link to the back-end repository
  
## User Story

### User Profile
1. **User Registration**
   - Users can sign up with a username, email, and password.
   - As a new user, they can register for an account so that they can access personalized features.

2. **User Login/Logout**
   - Registered users can log into their accounts to access their profile and favorite foods.
   - Login can be performed by email and password.
   - Logout can be performed by clicking the Logout button, which will redirect the user to the Home Page.
   - User receives a JWT token upon successful login for secure session management.

3. **User Profile Management**
   - Logged-in users can view and edit their profile so that they can update their information.
   - Users can view their profile information.
   - Users can edit their profile details (e.g., name, email, profile picture).

### Country List and Details
4. **View Country List**
   - Users can see a list of all countries.
   - Each country item shows the country name and an optional flag or icon.

5. **View Country Details**
   - Users can see a list of popular foods for the selected country.
   - Each food item shows an image, name, and brief description.

### Food Details
6. **View Food Details**
   - User sees a detailed view of the selected food item.
   - Details include an image, description, ingredients, and any other relevant info.

7. **Add Favorite Food**
   - Users can click a button to add a food item to their favorites.
   - The food item appears in the user's profile under their favorite foods.

8. **Manage Favorite Foods**
   - Users can see a list of their favorite foods in their profile.
   - Users can edit the details of a favorite food item.
   - Users can delete a food item from their favorites.

9. **Search and Filter for Food**
   - Users can select categories or tags to filter the food list.
   - The food list is updated to show only items that match the selected filters.

### Reviews and Ratings
10. **Leave Reviews and Ratings**
    - Users can leave a rating (e.g., stars) for a food item.
    - Users can write a text review for a food item.
    - Reviews and ratings are displayed on the food detail page.
    - Reviews include the reviewer's username, rating, and review text.

### Immersive UI and Navigation
11. **Responsive Design**
    - All features are accessible and usable on both desktop and mobile devices.
    - Must be a Responsive Design.
    - The navigation menu is clearly labeled and easy to use.
    - Users can easily move between the home page, country list, food details, and profile.

## Technologies

- **Frontend**
  - React.js for building the user interface.
  - React Router for navigation.

- **Backend**
  - Node.js and Express.js for the server.
  - MongoDB for the database.
  - Mongoose 

- **Authentication**
  - JWT for secure authentication.

- **Styling**
  - CSS-in-JS (Styled Components) or CSS frameworks like Bootstrap or Semantic UI.

