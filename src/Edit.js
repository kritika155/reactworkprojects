
import React, {Component} from 'react';
// import ReactDOM from 'react-dom';

export default class Edit extends Component {
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
    componentDidMount(){
        const id=this.props.match.params.id;
        fetch(`http://localhost:3000/api/movies/${id}`)
        .then(response => response.json()).then(response => {
            this.setState({ 
                id: response.data,
                image_url:  response.data,
                language:  response.data,
                name:  response.data,
                production_house:  response.data,
                rating:  response.data,
                type:  response.data,
                year:  response.data,
                date: response.data 
              });
        })
        .then(response => console.log(response))
.catch(err => {
            console.log(err)
          })
    }
    handleSubmit(event,id) {
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
        fetch('http://localhost:3000/api/movies/' + this.props.match.params.id).then((response) => {
            response.json().then((response) => {
              console.log(response);
            })
          }).then(response => {
            this.setState({ 
                id: response.data.id,
                image_url:  response.data.image_url,
                language:  response.data.language,
                name:  response.data.name,
                production_house:  response.data.production_house,
                rating:  response.data.rating,
                type:  response.data.type,
                year:  response.data.year,
                date: response.data.date 
              });
        })
.catch(err => {
            console.error(err)
          })
    }

    logChange(e) {
        this.setState({[e.target.name]: e.target.value});  
    }

    render() {
        return (
            <div className="container register-form">
                <form onSubmit={this.handleSubmit} method="POST" align="center">
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