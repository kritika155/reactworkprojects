
import React, {Component} from 'react';
// import ReactDOM from 'react-dom';

export default class Add extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: 0,
            image_url: "",
            language: "",
            name: "",
            production_house: "",
            rating: 0,
            type: "",
            year: 0,
            date:''
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.logChange=this.logChange.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault()
        var data = {
            id: this.state.id,
            image_url:this.state.image_url,
            language:this.state.language,
            name: this.state.name,
            production_house: this.state.production_house,
            rating: this.state.rating,
            type: this.state.type,
            year: this.state.year,
            date:this.state.date
        }
        console.log(data)
        fetch("http://localhost:3000/api/movies", {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(data)
        }).then(function(response) {
            if (response.status >= 400) {
              throw new Error("Bad response from server");
            }
            return response.json();
        }).then(function(data) {
            console.log(data)    
            if(data === "success"){
               console.log("success");  
            }
        }).catch(function(err) {
            console.log(err)
        });
    }

    logChange(e) {
        this.setState({[e.target.name]: e.target.value});  
    }

    render() {
        return (
            <div className="container register-form">
                <form onSubmit={this.handleSubmit} method="POST">
                    <label>Id</label>
                    <input name="id" placeholder="id"
            onChange={(e) => this.logChange(e)}
            value={this.state.id}
          />
                    <label>Movie Name:</label>
                    <input placeholder="name" name="name"
            onChange={(e) => this.logChange(e)}
            value={this.state.name}
          />
                    <input placeholder="image-url" name="image"
            onChange={(e) => this.logChange(e)}
            value={this.state.image_url}
          />
                    <input type="text" onChange={this.logChange} className="form-control" value={this.state.language} placeholder='language' name='language' />
                    <input type="text" onChange={this.logChange} className="form-control" value={this.state.type }placeholder='type' name='type'/>
                    <input type="number" onChange={this.logChange} className="form-control" value={this.state.rating }placeholder='rating' name='rating'/>
                    <input type="number" onChange={this.logChange} className="form-control" value={this.state.year }placeholder='year' name='year'/>
                    <input type="date" onChange={this.logChange} className="form-control" value={this.state.date }placeholder='date' name='date'/>
                    <div className="submit-section">
                        <button className="btn btn-uth-submit">Submit</button>
                    </div>
                </form>
            </div>
        );
    }
}