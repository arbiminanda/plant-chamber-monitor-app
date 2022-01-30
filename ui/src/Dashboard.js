import React,{Component} from 'react';
import { tsConstructorType } from '@babel/types';
import {variables} from './Variables.js';
import { LineChart, Line, XAxis, YAxis , CartesianGrid } from "recharts";

export class Dashboard extends Component{
    state={
        data:[]
	};
    
	componentDidMount() {
		fetch(variables.API_URL+'data')
		.then(res => res.json()) // It resolves the promise with a JSON object
		.then(res => {
		  console.log(res) // make sure that matches is `res` directly or a neste object within `res` object
		  this.setState({
			data: res
		  })
		})
	}
	
	render(){
		
		const {
            data
        }=this.state;
		
		return(
            <div>
				<h3> Temperature </h3>
				<LineChart
					width={900}
					height={500}
					data={data}
					margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
				>
					<Line type="monotone" dataKey="ChamberTemp" stroke="#8884d8" />
					<CartesianGrid stroke="#ccc" strokeDasharray="2 2" />
					<YAxis domain={[0, 40]}/>
				</LineChart>
				<h3> Humidity </h3>
				<LineChart
					width={900}
					height={500}
					data={data}
					margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
				>
					<Line type="monotone" dataKey="ChamberHum" stroke="#8884d8" />
					<CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
					<YAxis domain={[0, 100]}/>
				</LineChart>
				<h3> Light </h3>
				<LineChart
					width={900}
					height={500}
					data={data}
					margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
				>
					<Line type="monotone" dataKey="ChamberLight" stroke="#8884d8" />
					<CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
					<YAxis domain={[0, 20000]}/>
				</LineChart>
			</div>
		)
    }
}