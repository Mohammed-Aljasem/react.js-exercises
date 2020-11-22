import React, {Component} from 'react';
import Card from './App';
import Information from './Components/info';



const Infos = Information.map(x=> <Card name={x.name} userPhoto={x.userPhoto} perPhoto={x.perPhoto} location={x.location} position={x.position}/>)
class Cards extends Component {
  
  render() { 
    return (
       <div className="Card">
        {Infos}
       </div>
     );
  }
}
  
  export default Cards ;
