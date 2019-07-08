// LoaderComponent.js

import React, { Component } from 'react';
import axios from 'axios';

class LoaderComponent extends Component {
      state = {name:'',company:'',
         blog: '',
         avatar:'',
         bio:'',
         loading: false
       }
       componentDidMount() 
       {  
         axios.get("https://api.github.com/users/KrunalLathiya")
           .then(response => {
             this.setState({
               name:response.data.name,
               company:response.data.company,
               blog: response.data.blog,
               avatar:response.data.avatar_url,
               bio:response.data.bio,
               loading: false
             });
           })
           .catch(error => {
             console.log(error);
           });
       }

   render()
   {
    let data;
    if (this.state.loading) {
      data = <img  data-src={ require('../../assets/images/giphy.gif') } />
    } else {
      data = <div>
                <br/>
                Name: {this.state.name}
                <br/>
                Company: {this.state.company}
                <br/>
                Blog: {this.state.blog}
                <br/>
                Bio: {this.state.bio}
                <br/>
                <img src={this.state.avatar}/>
                
            </div> 
    }
      return(
      <div>
            {data}
       </div>
      )
   }
}

export default LoaderComponent;