import React, { Component } from 'react'
import './App.css';
import Button from '@material-ui/core/Button';
import { Link } from "react-router-dom";
import { Container, Row, Col} from 'react-bootstrap';

export default class App extends Component {
  constructor(props){
    super(props);
    this.state={
          data:{}
    }
    this.delete=this.delete.bind(this);
  }
  componentDidMount(){
    fetch("http://localhost:3000/api/movies").then(response=>response.json()).then((data)=>{console.log(data);
      this.setState({
        data:data
      },()=>console.log(data))
    })
  }
   delete(id){
    //  const url="http://localhost:3000/api/movies";
    fetch('http://localhost:3000/api/movies/' + id, { 
  method: 'DELETE' 
}).then(response=>{return response.json()}).then(data=>console.log(data)).catch(err=>console.log(err));}
  render() {
  
    let movies=this.state.data.length>0&&this.state.data.map((movie,index)=>{
      return(
        <div key={index} className="box">
        
     <Container>
       <Row>
         <Col sm={6}>
           <div className="boxe"><img src={movie.image_url} alt={movie.name} className="movie"/></div>
          </Col>
          <Col sm={6}>  <h1>Movie Name:
          {movie.name}</h1>
         
             <p>Production House:{movie.production_house}</p>
         <p>Language:{movie.language}</p>
         <p>Year:{movie.year}</p>
         <p>Rating:{movie.rating}</p>
         <p>Type:{movie.type}</p>
      
        <Button size="small" color="primary">
        <Link to={{ 
                 pathname: './editmovie/'+movie.id,
               }}>   Edit
     </Link>
        </Button>
        <Button size="small" color="primary" onClick={(e) =>this.delete(movie.id,this)}>
          Delete
        </Button>
        </Col>
        </Row>
        </Container>
      </div>
      );
    })
    return (
      <div><h1 align="center">Top Movies   <Button variant="outlined" color="primary"  className="btn btn-primary btn-lg">
      <Link to={{ 
                 pathname: './addmovie',
               }}>+Add Movies
     </Link>
       </Button> </h1>
    
        <br />
        {movies}
      </div>
    )
  }
}

