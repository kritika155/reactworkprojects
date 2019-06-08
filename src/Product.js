import React, { Component } from 'react'

export default class Product extends Component {
    constructor(props){
        super(props);
        this.state={
             
        }
      }
      componentDidMount(){
          const URL="http://localhost:3000/employees";
          const Data={
              id:4,
              first_name:'Kritika',
              last_name:'Roy',
              email:'roykritika00@gmail.com'
          };
          const otheParam={
            method:"post",
            body:JSON.stringify(Data),
            headers:{
                'Content-Type':'application/json'
            }
        }
        fetch(URL,otheParam).then(response=>{return response.json()}).then((data)=>{console.log(data);
          this.setState({
            data:data
          },()=>console.log(data))
        })
      }
    render() {
        return (
            <div>
                <form>

                </form>
            </div>
        )
    }
}
