
import React, {Component} from 'react';
import axios from 'axios';
import dateFormat from 'dateformat';
import Moment from 'react-moment';
import 'moment-timezone';
import Button from '@material-ui/core/Button';
import { Link } from "react-router-dom";
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
        const { match: { params } } = this.props;
        axios.get(`http://localhost:3000/api/movies/${params.id}}`)
        .then(({ data: user }) => {
          console.log('user', user);
    
          this.setState({  id: user.id,
            image_url:   user.image_url,
            language:  user.language,
            name:  user.name,
            production_house:   user.production_house,
            rating:  user.rating,
            type: user.type,
            year: user.year,
            date: user.date });
        });
    }
    updateBlogPost(id, data) {
      return fetch('http://localhost:3000/api/movies/' + id, {
          method: 'PUT',
          body: JSON.stringify(data),
          headers: {
              'Content-Type': 'application/json'
          }
      }).then(res => {
          return res;
      }).catch(err => err);
  }
  
    handleSubmit(data) {
     
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
        console.log(data);
        this.updateBlogPost(this.state.id, data);

    }

    logChange(e) {
      this.setState({[e.target.name]: e.target.value},()=>console.log(this.state.name));  
    }

    render() {
        return (
           <div>
                {/* <Button variant="outlined" color="primary"  className="btn btn-primary btn-lg">
      <Link to={{ 
                 pathname: './addmovie',
               }}>Go Back
     </Link>
       </Button> */}
                <div className="container register-form">
                 
                <h1 style={{textAlign:'center',filter:'grayscale(100%)'}}>{this.state.name}</h1>
                <img src={this.state.image_url} alt={this.state.name} className="movie" style={{width:'100px',marginLeft:'139px'}}/>
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
           </div>
        );
    }
}