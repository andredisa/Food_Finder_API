# Food Finder

Food Finder is a web application that helps you find recipes based on the ingredients you have available. Using the Edamam API, you can search for recipes by simply entering the desired ingredients (both in Italian and English, preferably in English) and get a list of recipes complete with images, ingredients, and links to view the full recipe.

## Features
- Search for recipes based on the entered ingredients.
- View a list of recipes with images, ingredients, and links to the full recipe.
- Responsive and attractive layout thanks to Bootstrap 5.

## Technologies Used
- HTML5
- CSS3
- Bootstrap 5
- JavaScript
- Edamam API

### Prerequisites
- A modern web browser (Google Chrome, Mozilla Firefox, etc.)

## Project Structure
- `index.html`: The main page of the application.
- `style.css`: Custom CSS stylesheet.
- `script.js`: JavaScript file containing the logic for API calls and recipe display.

## API Used
This project uses the Edamam API to retrieve recipes. You will need to obtain an app ID and an API key from Edamam to make the API calls work.

## Customization
To use your API key, replace the following values in the `script.js` file with those obtained from your Edamam account:
```javascript
const response = await fetch(`https://api.edamam.com/search?q=${searchValue}&app_id=YOUR_APP_ID&app_key=YOUR_API_KEY&from=0&to=10`);
