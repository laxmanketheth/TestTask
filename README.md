# weather API's

1. '/weather'
- Request Method : POST
- Purpose: accepts req body and fetches data (based on lat,lon) and then save it to the database.
- Request: takes and object that contains lat and lon.
- Example of Request object:

        `````
        {
        "lat": "44.37",
        "lon":"10.97"
        }
        `````

2. '/weatherdata'
- Request Method: GET
- Purpose: To get weather data from the database based on the lat, lon.
- Query Params: lat - latitude (float)
                lon -  longitude(float)
- Response(res): retrieves data from the database based on query params.
- Example of Response Object:

    `````
        {
        "success": true,
        "data": [
            {
                "id": 1,
                "sunrise": 1715917601,
                "sunset": 1715971106,
                "temp": "291.76",
                "feels_like": "291.09",
                "pressure": 1010,
                "humidity": 54,
                "uvi": "4.00",
                "wind_speed": "2.30",
                "lat": "44.3400",
                "lon": "10.9900"
            }
        ]
    }
    ``````

## Installation

1. Clone the repository:
    ```
    git clone https://github.com/laxmanketheth/TestTask.git
    ```
2. Install the dependencies:
    - cd TestTask
    - npm install

3. Set up environment variables:
    - Create a `.env` file in the project's root directory.
    - Add the following variables to the `.env` file:
     ```
    DATABASE_USERNAME=your-database-username
    DATABASE_NAME=your-database-name
    DATABASE_PASSWORD=database-password
    PORT=database-port
    API_KEY = weather-API-key
     ```

## Run the server
	
   ```
   node server.js
   ``` 
- Now you can test the API's in the postman. 