# Weather Application with Time Zone Integration

This project is a weather application that provides real-time weather data, timezone information, and current local time for any city. It also includes a dynamic map display using Leaflet and a visually appealing background image fetched from Unsplash based on the weather conditions.

---

## Features

1. **Real-Time Weather Data:**
   - Displays temperature, weather description, humidity, wind speed, and more for a selected city.
   
2. **Dynamic Backgrounds:**
   - Fetches an Unsplash image based on the weather description to enhance the user experience.

3. **Interactive Map:**
   - Displays a map centered on the selected city with a marker at its location.

4. **Timezone Information:**
   - Shows the current timezone and local time of the selected city using the TimeZoneDB API.

---

## Setup Instructions

### Prerequisites

- Install [Node.js](https://nodejs.org/) (optional for local server testing).
- Sign up and obtain API keys for the following services:
  - [OpenWeather API](https://openweathermap.org/api)
  - [Unsplash API](https://unsplash.com/developers)
  - [TimeZoneDB API](https://timezonedb.com/)

### Steps to Run the Application

1. **Clone the Repository**
   ```bash
   git clone https://github.com/Nurbolagybetov/assignment2_web.git
   cd assignment2_web
2. **Add API Keys**
   - Open `core.js` and replace the placeholder API keys:
     ```javascript
     const weatherApiKey = "YOUR_OPENWEATHER_API_KEY";
     const unsplashApiKey = "YOUR_UNSPLASH_API_KEY";
     const timeZoneApiKey = "YOUR_TIMEZONEDB_API_KEY";
     ```

3. **Run the Application**
   - Open `index.html` in your browser to view the app.
   - Alternatively, use a local server for testing:
     - For example, in VS Code, install the [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) extension and click `Go Live`.

---

## API Usage Details

### 1. **OpenWeather API**
   - **Endpoint:** `https://api.openweathermap.org/data/2.5/weather`
   - **Purpose:** Fetch weather data for the selected city.
   - **Parameters:**
     - `q`: City name (e.g., `London`).
     - `appid`: Your OpenWeather API key.
     - `units`: Metric system for temperature (`metric`).

### 2. **Unsplash API**
   - **Endpoint:** `https://api.unsplash.com/photos/random`
   - **Purpose:** Fetch a random image based on the weather description.
   - **Parameters:**
     - `query`: Weather condition (e.g., `cloudy`).
     - `client_id`: Your Unsplash API key.

### 3. **TimeZoneDB API**
   - **Endpoint:** `http://api.timezonedb.com/v2.1/get-time-zone`
   - **Purpose:** Fetch timezone information based on city coordinates.
   - **Parameters:**
     - `by`: Specifies `position` (uses latitude and longitude).
     - `lat` and `lng`: City coordinates.
     - `key`: Your TimeZoneDB API key.

---

## Key Design Decisions

1. **Modular Code Structure:**
   - Each functionality (weather, map, background, timezone) is encapsulated in its own function for readability and maintainability.

2. **Responsive UI:**
   - The layout is designed to work seamlessly across different screen sizes using CSS media queries.

3. **Dynamic Data Fetching:**
   - Weather, timezone, and background data are fetched dynamically based on user input, enhancing interactivity.

4. **Error Handling:**
   - Basic error handling is implemented to display user-friendly messages in case of API failures or invalid city inputs.

---

## Technologies Used

- **Frontend:** HTML5, CSS3, JavaScript
- **APIs:** OpenWeather, Unsplash, TimeZoneDB, Leaflet
- **Map Integration:** Leaflet.js

---

## Screenshots

1. **Weather Display and Map**
   - Screenshot showing the weather data, map, and timezone information.

2. **Dynamic Background**
   - Screenshot illustrating the dynamic background fetched from Unsplash.

---

## Contributing

Feel free to fork this repository and submit pull requests. For major changes, please open an issue first to discuss what you would like to change.

---

## Author

**Nurbol Agybetov**

GitHub: [Nurbolagybetov](https://github.com/Nurbolagybetov)
