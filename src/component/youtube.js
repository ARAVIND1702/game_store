import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
//import 'bootsrtam'
function youtube(){
    return (<div>
        <Container>
        <div className="ratio ratio-16x9" style={{marginTop:"-300px",width:"70%",alignItems:"center",marginLeft:"18%"}}>
            <iframe src="https://www.youtube.com/embed/VjMN27yjogk" title="YouTube video" allowfullscreen></iframe>
            </div>       
        </Container>
   
  </div>
    
    );
}

export default youtube
//<iframe width="560" height="315" src="https://www.youtube.com/embed/VjMN27yjogk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>