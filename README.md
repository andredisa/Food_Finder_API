# 🍽️ Food Finder

> **Food Finder** is a sleek and simple web app that helps you discover delicious recipes based on the ingredients you already have at home.  
By leveraging the **Edamam API**, you can input ingredients (in **Italian** or preferably **English**) and instantly get curated recipe suggestions — complete with images, ingredient lists, and links to the full recipe instructions.

---

## ✨ Features

🔍 Search recipes using one or more ingredients  
📸 View recipes with thumbnails, ingredient previews, and direct links  
📱 **Responsive design** with a clean UI, thanks to **Bootstrap 5**  
🌍 Support for Italian and English input (prefer English for better results)

---

## 🧰 Tech Stack

| Technology   | Description                       |
|--------------|-----------------------------------|
| 🔤 HTML5      | Page structure                   |
| 🎨 CSS3       | Custom styling                   |
| 🎛️ Bootstrap 5 | Responsive layout framework      |
| ⚙️ JavaScript | API requests and DOM manipulation |
| 🌐 Edamam API | Recipe data & nutrition info     |

---

## 📂 Project Structure

```bash
.
├── script/                      
│   ├── script.js              # JavaScript logic (API calls & UI updates)
├── style/                       
│   ├──style.css               # Custom styles
├── .gitignore                 # Git ignore file to exclude files from version control
├── index.html                 # Main entry point
├── README.md                  # Project documentation
└── LICENSE                    # License information (MIT License)
```

---

## 🔑 API Configuration

This project uses the **Edamam Recipe Search API**.  
To make it work, you’ll need:

- An Edamam **App ID**
- An Edamam **App Key**

🔧 Update your `script.js` with your credentials:

```javascript
const response = await fetch(`https://api.edamam.com/search?q=${searchValue}&app_id=YOUR_APP_ID&app_key=YOUR_API_KEY&from=0&to=10`);
```

👉 You can get these credentials by signing up at [Edamam Developer Portal](https://developer.edamam.com/edamam-recipe-api).

---

## 🚀 Getting Started

### ✅ Prerequisites
- A modern web browser (Chrome, Firefox, Edge, etc.)
- An internet connection
- Edamam API credentials (see above)

### ▶️ How to Run
1. Clone or download the repository
2. Open `index.html` in your browser
3. Enter ingredients and hit **Search**
4. Explore recipes and click links for full instructions

---

## 🛠️ Future Improvements

- 🍴 Add support for **diet filters** (e.g., vegan, keto, gluten-free)
- 📝 Show **detailed nutrition info** per recipe
- 💾 Add ability to **save favorite recipes**
- 🌐 Implement **language detection** and auto-translation

---

## 📄 License

This project is open-source and intended for educational purposes only.  
Feel free to fork, modify, and use it as inspiration for your own culinary tools!

---

## 👨‍🍳 Created By

Made with ❤️ for food and code.  
If you found this useful or have feedback, feel free to reach out or connect!  

🔗 [GitHub](https://github.com/andredisa)  
📬 [Email](mailto:andreadisanti22@gmail.com)

---

### Buon Appetito! 🍝
