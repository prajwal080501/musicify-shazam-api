import React, { useEffect, useState } from 'react'
import axios from 'axios'
import ChartContainer from '../Chartcontainer/ChartContainer';


const Chart = () => {
    const [charts, setCharts] = useState([]);
    const options = {
        method: 'GET',
        url: 'https://shazam.p.rapidapi.com/charts/list',
        headers: {
            'X-RapidAPI-Key': 'b4c218f272msh21bfa859ca66f2fp14a119jsn868c6b2145de',
            'X-RapidAPI-Host': 'shazam.p.rapidapi.com'
        }
    };

    async function getCharts() {
        await axios.request(options).then(function (response) {
            setCharts(response.data.global.genres);
            console.log(charts);
        })
    }

    useEffect(() => {
        getCharts();
    }, [])

    return (
        <div className=' h-fit'>
            <ChartContainer charts={charts}/>
        </div>
    )
}

export default Chart;