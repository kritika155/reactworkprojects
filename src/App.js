import React, { Component } from 'react'
import './App.css';

// import { withStyles } from '@material-ui/core/styles';
 import Button from '@material-ui/core/Button';
// import Card from '@material-ui/core/Card';
// import CardActionArea from '@material-ui/core/CardActionArea';
// import CardActions from '@material-ui/core/CardActions';
// import CardContent from '@material-ui/core/CardContent';
// import CardMedia from '@material-ui/core/CardMedia';
// import Typography from '@material-ui/core/Typography';

import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

// const styles = {
//   card: {
//     maxWidth: 545,
//   },
//   media: {
//     height: 440,
//   },
// };
export default class App extends Component {
  constructor(props){
    super(props);
    this.state={
          data:{}
    }
  }
  componentDidMount(){
    fetch("http://localhost:3000/api/movies").then(response=>response.json()).then((data)=>{console.log(data);
      this.setState({
        data:data
      },()=>console.log(data))
    })
  }
  render() {
  
    let movies=this.state.data.length>0&&this.state.data.map((movie,index)=>{
      return(
        <div key={index} className="box">
        
     
      
        
       <div className="container">
         <div className="row">
           <div className="col-md-6"><img src={movie.image_url} alt={movie.name} className="movie"/></div>
           <div className="col-md-6">
           <h1>Movie Name:
          {movie.name}</h1>
         
             <p>Production House:{movie.production_house}</p>
         <p>Language:{movie.language}</p>
         <p>Year:{movie.year}</p>
         <p>Rating:{movie.rating}</p>
         <p>Type:{movie.type}</p>
      
        <Button size="small" color="primary">
        Edit
        </Button>
        <Button size="small" color="primary">
          Delete
        </Button>
    
          </div>
         </div>
         </div>

       
          {/* <div className="rows">
         
        <div className="col-md-6"><img src={movie.image_url} alt={movie.name}/></div> 
        <div className="col-md-6">{movie.name}</div>
          </div> */}
       
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

