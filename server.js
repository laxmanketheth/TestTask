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


app.post('/weather', async (req, res) => {
    try {
        const { lat, lon } = req.body

        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`)
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

            let responsedata = await db
                .insert(weather_data, ['*'])
                .into('weather_data');
            res.status(200).json({ success: true, data: responsedata })
        }
        else (res.status(401).json('failed to fetch data'))
    }

    catch (err) {
        res.status(501).json({ success: false, error: err.toString() })
    }
});


app.get('/weatherdata', async (req, res) => {
    try {
        const lat = req.query.lat;
        const lon = req.query.lon;
        let data = await db.select('*')
            .from('weather_data')
            .where('lat', '=', lat)
            .andWhere('lon', '=', lon);
        res.status(200).json({ success: true, data: data });

    } catch (err) {
        // res.status(501).json({ success: false, data: { error: err.toString() } })
        res.status(501).json({ success: false, error: err.toString() })
    }
});


