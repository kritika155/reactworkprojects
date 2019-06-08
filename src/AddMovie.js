
import React, {Component} from 'react';
// import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
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
            <div className="container register-form" align="center">
                <form onSubmit={this.handleSubmit} method="POST">
                    <label>Id</label><br/>
                    <input name="id" placeholder="id" 
            onChange={(e) => this.logChange(e)}
            value={this.state.id}
          /><br/>
                    <label>Movie Name:</label><br/>
                    <input placeholder="name" name="name"
            onChange={(e) => this.logChange(e)}
            value={this.state.name}
          /><br/><label>Poster:</label><br/>
                    <input placeholder="image-url" name="image"
            onChange={(e) => this.logChange(e)}
            value={this.state.image_url}
          /><br/><label>Language:</label><br/>
                    <input type="text" onChange={this.logChange}  value={this.state.language} placeholder='language' name='language' /><br/>
                    <label>Type:</label><br/>
                    <input type="text" onChange={this.logChange}  value={this.state.type }placeholder='type' name='type'/><br/><label>Rating:</label><br/>
                    <input type="number" onChange={this.logChange}  value={this.state.rating }placeholder='rating' name='rating'/><br/><label>Year:</label><br/>
                    <input type="number" onChange={this.logChange}  value={this.state.year }placeholder='year' name='year'/><br/><label>Movie Release Date:</label><br/>
                    <input type="date" onChange={this.logChange}  value={this.state.date }placeholder='date' name='date'/>
                    <div className="submit-section" align="center"><br/>
                        <button className="btn btn-primary" >Submit</button>
                    </div>
                </form>
            </div>
        );
    }
}