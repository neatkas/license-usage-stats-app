import './App.css';
import {useState} from "react";
import {Col, Row} from 'bootstrap-4-react';
import {Bar, BarChart, CartesianGrid, Legend, Tooltip, XAxis, YAxis} from 'recharts';
import dayjs from 'dayjs'

function App() {
    var [dateFrom, setDateFrom] = useState(() => {
        return dayjs().startOf("month")
    })
    var [dateTo, setDateTo] = useState(() => {
        return dayjs().endOf("month")
    })
    var [period, setPeriod] = useState(1);

    // var dateOptions = {month: 'short', day: 'numeric', year: 'numeric'}
    const data = [{name: 'Page A', uv: 400, pv: 2400, amt: 2400}, {
        name: 'Page B',
        uv: "null",
        pv: 2400,
        amt: 2400
    }, {name: 'Page C', uv: 250, pv: 2400, amt: 2400}]

    var changePeriod = e => {
        var newPeriod = e.target.value
        setPeriod(() => newPeriod)
        setDateFrom(dateTo.subtract(newPeriod - 1, "month").startOf("month"))
    }

    function prevMonthHandler() {
        setDateFrom(prevDateFrom => prevDateFrom.subtract(1, "month").startOf("month"))
        setDateTo(prevDateTo => prevDateTo.subtract(1, "month").endOf("month"))
    }

    function nextMonthHandler() {
        setDateFrom(prevDateFrom => prevDateFrom.add(1, "month").startOf("month"))
        setDateTo(prevDateTo => prevDateTo.add(1, "month").endOf("month"))
    }

    return (
        <div className="App col-11">
            <h1>Stats</h1>
            {/*<p>From {dateFrom.toLocaleDateString('en-US', dateOptions)} to {dateTo.toLocaleDateString('en-US', dateOptions)}</p>*/}
            <p>From {dateFrom.format("MMM DD, YYYY")} to {dateTo.format("MMM DD, YYYY")}</p>
            <Row justifyContent="lg-start center">
                <Col col="col auto">
                    <button className="btn btn-outline-primary" onClick={prevMonthHandler}>&laquo; Prev month</button>
                </Col>
                <Col col="col auto">
                    <select className="form-control" onChange={changePeriod}>
                        <option value="1">One month</option>
                        <option value="3">One quarter</option>
                        <option value="6">Half year</option>
                        <option value="12">One year</option>
                    </select>
                </Col>
                <Col col="col auto">
                    <button className="btn btn-outline-primary" onClick={nextMonthHandler}>Next month &raquo;</button>
                </Col>
            </Row>
            <table className="table">
                <thead>
                <tr>
                    <th>Product</th>
                    <th>Min usage</th>
                    <th>Max usage</th>
                    <th>Average usage</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <th>IntelliJ IDEA</th>
                    <th></th>
                    <th></th>
                    <th></th>
                </tr>
                <tr>
                    <th>WebStorm</th>
                    <th></th>
                    <th></th>
                    <th></th>
                </tr>
                <tr>
                    <th>PHPStorm</th>
                    <th></th>
                    <th></th>
                    <th></th>
                </tr>
                </tbody>
            </table>
            <div className="chart">
                <BarChart width={900} height={300} data={data}>
                    <CartesianGrid/>
                    <XAxis dataKey="name"/>
                    <YAxis/>
                    <Tooltip/>
                    <Legend/>
                    <Bar dataKey="uv" fill="#82ca9d"/>
                </BarChart>
            </div>
            <div className="chart">
                <BarChart width={900} height={300} data={data}>
                    <CartesianGrid/>
                    <XAxis dataKey="name"/>
                    <YAxis/>
                    <Tooltip/>
                    <Legend/>
                    <Bar dataKey="uv" fill="#82ca9d"/>
                </BarChart>
            </div>
            <div className="chart">
                <BarChart width={900} height={300} data={data}>
                    <CartesianGrid/>
                    <XAxis dataKey="name"/>
                    <YAxis/>
                    <Tooltip/>
                    <Legend/>
                    <Bar dataKey="uv" fill="#82ca9d"/>
                </BarChart>
            </div>
        </div>
    );
}

export default App;