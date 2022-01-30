import React,{Component} from 'react';
import { tsConstructorType } from '@babel/types';
import {variables} from './Variables.js';

export class Data extends Component{
    
	constructor(props){
        super(props);

        this.state={
            data:[],
			modalTitle:"",
			Date:"",
			Time:"",
			DataId:0,
			ChamberTemp:0,
			AmbientTemp:0,
			ChamberHum:0,
			ChamberLight:0,
			ChamberCO2:0,
			ChamberWater:0
        }
    }
	
	refreshList(){
        fetch(variables.API_URL+'data')
        .then(response=>response.json())
        .then(data=>{
            this.setState({data:data,dataWithoutFilter:data});
        });
    }
	
	componentDidMount(){
        this.refreshList();
    }
	
	changeDate =(e)=>{
        this.setState({Date:e.target.value});
    }
	
	changeTime =(e)=>{
        this.setState({Time:e.target.value});
    }
	
	changeChamberTemp =(e)=>{
        this.setState({ChamberTemp:e.target.value});
    }
	
	changeAmbientTemp =(e)=>{
        this.setState({AmbientTemp:e.target.value});
    }
	
	changeChamberHum =(e)=>{
        this.setState({ChamberHum:e.target.value});
    }
	
	changeChamberLight =(e)=>{
        this.setState({ChamberLight:e.target.value});
    }
	
	changeChamberCO2 =(e)=>{
        this.setState({ChamberCO2:e.target.value});
    }
	
	changeChamberWater =(e)=>{
        this.setState({ChamberWater:e.target.value});
    }
	
	addClick(){
        this.setState({
            modalTitle:"Add Data",
            DataId:0,
            Date:"",
			Time:"",
			ChamberTemp:0,
			AmbientTemp:0,
			ChamberHum:0,
			ChamberLight:0,
			ChamberCO2:0,
			ChamberWater:0
        });
    }
	
	editClick(dat){
        this.setState({
            modalTitle:"Edit Data",
            DataId:dat.DataId,
            Date:dat.Date,
			Time:dat.Time,
			ChamberTemp:dat.ChamberTemp,
			AmbientTemp:dat.AmbientTemp,
			ChamberHum:dat.ChamberHum,
			ChamberLight:dat.ChamberLight,
			ChamberCO2:dat.ChamberCO2,
			ChamberWater:dat.ChamberWater
        });
    }
	
	createClick(){
        fetch(variables.API_URL+'data',{
            method:'POST',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                Date:this.state.Date,
				Time:this.state.Time,
				ChamberTemp:this.state.ChamberTemp,
				AmbientTemp:this.state.AmbientTemp,
				ChamberHum:this.state.ChamberHum,
				ChamberLight:this.state.ChamberLight,
				ChamberCO2:this.state.ChamberCO2,
				ChamberWater:this.state.ChamberWater
            })
        })
        .then(res=>res.json())
        .then((result)=>{
            alert(result);
            this.refreshList();
        },(error)=>{
            alert('Failed');
        })
    }


    updateClick(){
        fetch(variables.API_URL+'data',{
            method:'PUT',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                DataId:this.state.DataId,
                Date:this.state.Date,
				Time:this.state.Time,
				ChamberTemp:this.state.ChamberTemp,
				AmbientTemp:this.state.AmbientTemp,
				ChamberHum:this.state.ChamberHum,
				ChamberLight:this.state.ChamberLight,
				ChamberCO2:this.state.ChamberCO2,
				ChamberWater:this.state.ChamberWater
            })
        })
        .then(res=>res.json())
        .then((result)=>{
            alert(result);
            this.refreshList();
        },(error)=>{
            alert('Failed');
        })
    }
	
	deleteClick(id){
        if(window.confirm('Are you sure?')){
        fetch(variables.API_URL+'data/'+id,{
            method:'DELETE',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            }
        })
        .then(res=>res.json())
        .then((result)=>{
            alert(result);
            this.refreshList();
        },(error)=>{
            alert('Failed');
        })
        }
    }
	
	render(){
		
		const {
            data,
            modalTitle,
            DataId,
            Date,
			Time,
			ChamberTemp,
			AmbientTemp,
			ChamberHum,
			ChamberLight,
			ChamberCO2,
			ChamberWater
        }=this.state;
		
        return(
            <div>
				<button type="button" className="btn btn-primary m-2 float-end" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={()=>this.addClick()}>
					Add Data
				</button>
				<table className = "table table-stripped">
				<thead>
				<tr>
					<th>
						DataId
					</th>
					<th>
						Date
					</th>
					<th>
						Time
					</th>
					<th>
						ChamberTemp
					</th>
					<th>
						AmbientTemp
					</th>
					<th>
						ChamberHum
					</th>
					<th>
						ChamberLight
					</th>
					<th>
						ChamberCO2
					</th>
					<th>
						ChamberWater
					</th>
				</tr>
				</thead>
				<tbody>
					{data.map(dat=>
						<tr key = {dat.DataId}>
							<td>{dat.DataId}</td>
							<td>{dat.Date}</td>
							<td>{dat.Time}</td>
							<td>{dat.ChamberTemp}</td>
							<td>{dat.AmbientTemp}</td>
							<td>{dat.ChamberHum}</td>
							<td>{dat.ChamberLight}</td>
							<td>{dat.ChamberCO2}</td>
							<td>{dat.ChamberWater}</td>
							<td>
							<button type = "button" className = "btn btn-light mr-1" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={()=>this.editClick(dat)}>
								<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
								<path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
								<path fillRule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
								</svg>
							</button>
							<button type = "button" className = "btn btn-light mr-1" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={()=>this.deleteClick(dat.DataId)}>
								<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16">
								<path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
								</svg>
							</button>
							</td>
						</tr>	
					)}
				</tbody>
				</table>
				
				<div className = "modal fade" id = "exampleModal" tabIndex="-1" aria-hidden="true">
				<div className = "modal-dialog modal-lg modal-dialog-centered">
				<div className = "modal-content">
					<div className="modal-header">
					   <h5 className="modal-title">{modalTitle}</h5>
					   <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"
					   ></button>
					</div>

					<div className="modal-body">
					   <div className="input-group mb-3">
						<span className="input-group-text">Date&Time</span>
						<input type="date" className="form-control"
						value={Date}
						onChange={this.changeDate}/>
						<input id="appt-time" type="time" name="appt-time" 
						step="2" 
						pattern="[0-9]{2}:[0-9]{2}:[0-9]{2}"
						value={Time}
						onChange={this.changeTime}/>
					   </div>
					   
					   <div className="input-group mb-3">
						<span className="input-group-text">ChamberTemp</span>
						<input type="text" className="form-control"
						value={ChamberTemp}
						onChange={this.changeChamberTemp}/>
					   </div>
					   
					   <div className="input-group mb-3">
						<span className="input-group-text">AmbientTemp</span>
						<input type="text" className="form-control"
						value={AmbientTemp}
						onChange={this.changeAmbientTemp}/>
					   </div>
					   
					   <div className="input-group mb-3">
						<span className="input-group-text">ChamberHum</span>
						<input type="text" className="form-control"
						value={ChamberHum}
						onChange={this.changeChamberHum}/>
					   </div>
					   
					   <div className="input-group mb-3">
						<span className="input-group-text">ChamberLight</span>
						<input type="text" className="form-control"
						value={ChamberLight}
						onChange={this.changeChamberLight}/>
					   </div>
					   
					   <div className="input-group mb-3">
						<span className="input-group-text">ChamberCO2</span>
						<input type="text" className="form-control"
						value={ChamberCO2}
						onChange={this.changeChamberCO2}/>
					   </div>
					   
					   <div className="input-group mb-3">
						<span className="input-group-text">ChamberWater</span>
						<input type="text" className="form-control"
						value={ChamberWater}
						onChange={this.changeChamberWater}/>
					   </div>

						{DataId==0?
						<button type="button"
						className="btn btn-primary float-start"
						onClick={()=>this.createClick()}
						>Create</button>
						:null}

						{DataId!=0?
						<button type="button"
						className="btn btn-primary float-start"
						onClick={()=>this.updateClick()}
						>Update</button>
						:null}

					</div>
				</div>
				</div>
				</div>
				
			</div>
        )
    }
}