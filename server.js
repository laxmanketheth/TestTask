import express from 'express';
const app = express();
import dotenv from 'dotenv';
dotenv.config();

// importing and configuring knex //
import knex from 'knex';
import { development } from './knexfile.js';
const db = knex(development);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const port = 8080;
const API_KEY = process.env.API_KEY;

app.listen(port, () => {
    console.log(`listening to port ${port}`);
});


/**
 * Purpose: accepts req body and fetches data (based on lat,lon) and then save it to the database.
 * Response: sends the weather data (saved in database table) as response.
 */
app.post('/weather', async (req, res) => {
    try {
        const { lat, lon } = req.body

        const API_URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`;

        //1. Fetching data
        const response = await fetch(API_URL)
        if (response) {
            const data = await response.json();
            const weather_data = {
                sunrise: data.sys.sunrise,
                sunset: data.sys.sunset,
                temp: data.main.temp,
                feels_like: data.main.feels_like,
                pressure: data.main.pressure,
                humidity: data.main.humidity,
                uvi: data.clouds.all,
                wind_speed: data.wind.speed,
                lat: data.coord.lat,
                lon: data.coord.lon
            }
            //2. Saving to database
            let responsedata = await db
                .insert(weather_data, ['*'])
                .into('weather_data');
            res.status(200).json({ success: true, data: responsedata })
        }
        else (res.status(401).json({ err: 'failed to fetch' }))
    }

    catch (err) {
        //Error response
        res.status(501).json({ success: false, error: err.toString() })
    }
});


/**
 * Purpose: To get weather data from the database based on the lat, lon.
 * Query Params: lat - latitude (float)
 *               lon -  longitude(float)
 * Response(res): retrieves data from the database based on query params
 */
app.get('/weatherdata', async (req, res) => {
    try {
        const lat = req.query.lat;
        const lon = req.query.lon;

        //1. Get data from db
        let data = await db.select('*')
            .from('weather_data')
            .where('lat', '=', lat)
            .andWhere('lon', '=', lon);

        //2. Response
        res.status(200).json({ success: true, data: data });

    } catch (err) {
        //Error response
        res.status(501).json({ success: false, error: err.toString() })
    }
});


