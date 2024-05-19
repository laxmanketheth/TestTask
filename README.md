# Weather Application

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

2. Install Docker:
    - Install Docker from the official website: https://www.docker.com/get-started/

3. Update the .env file with the appropriate values.
    - Signup on https://openweathermap.org/ and collect your API key.
    - Update <open-weather-api-key> with the actual API key.
    - You may use a free api-key : 'd4eb3e41dd3c561eedf2496f3afc3c1e'.

## Run the application using docker compose

    Run the below docker compose command to start the application. 
    It will start the weather-api(server.js) and postgres database containers.
    - docker compose up

- Now you can test the API's in the postman. 