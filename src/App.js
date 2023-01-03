import logo from './logo.svg';
import './App.css';
import Welcome from './component/welcome';
import Pic1 from './component/pic';
import Pic2 from './component/pic2';
import Pic3 from './component/pic3';
import last from './pic/pngegg.png';
import RMA from './pic/RMA.png';
import gta  from './pic/gta.png';
import Gta from './component/gta';
import franklin from './pic/franklin.png'
import Youtube from './component/youtube';
import Nav from './component/Nav';
function App() {
  return (
    <div className="App" id='got'>
      <Nav/>
      <div className="block" >
        <table>
      <tr>
      <td>{/*<h1 className='head'>GoD OF WaR<span  style={{color: "#ffc600"}}> Ragnarok</span></h1> */}
      <img src='https://upload.wikimedia.org/wikipedia/fr/2/27/God_of_War_Ragnar%C3%B6k_Logo.png' className='im' style={{width:"46%",marginLeft:"-515px"}}></img>
      <p style={{width:"421px"}}>This hospital is good rating in this  city,Please check forthe further information and cleckon the button to know more.</p>
      <br></br>
      <div style={{marginLeft:"-421px"}}>
      <Welcome  style={{marginLeft:"2px"}} ></Welcome>
      </div>
      </td> 
      
      <br></br><br></br>
      <td> <img src='https://akm-img-a-in.tosshub.com/sites/itgaming/resources/202211/god-of-war-ragnarok-gow-series-visual-1920x1080-29may22-1031122104947.jpeg' className='im' style={{width:"200%",marginLeft:"-469px"}} ></img></td>
      </tr>
      
</table>
    </div>
    <div  id='platforms' className='parallax'  style={{height: "700px"}}>
    <h1 className='secondhead' style={{color:"white"}}><span  style={{color: "white",paddingTop:"100px"}}>PLAT</span>FORMS</h1>
    {/*<p style={{textAlign:"center",marginLeft:"421px",width:"43%",}}>General surgeons at Pristyn Care are the best and well-known medical professionals in India and we are provinding the best hospitality ever </p> */}
    <br></br>
    <table style={{paddingLeft:"20px"}}>
      <tr>
        <td>
          <Pic1/>
          <h1 style={{float:"left",paddingLeft:"90px",color:"#ff4646"}}>Nintendo</h1>
          <p className='foot' style={{color:"#ff6161"}}>'logo' is defined but never used no-unused-vars Line 18:12:  img elements must have an alt prop, either with meaningful text, or an empty string for decorative images</p>
          <input type="button" className='view' value="View More >"></input>
        </td>
        <td>
          <Pic2/>
          <h1 style={{float:"left",paddingLeft:"90px",color:"rgb(50 150 255)"}}>Playstation</h1>
          <p className='foot'>'logo' is defined but never used no-unused-vars Line 18:12:  img elements must have an alt prop, either with meaningful text, or an empty string for decorative images</p>
          <input type="button" className='view' value="View More >"></input>
        </td>
        <td>
          <Pic3/>
          <h1 style={{float:"left",paddingLeft:"90px",color:"rgb(16 124 16)"}}>Xbox</h1>
          <p className='foot' style={{color:"rgb(139 255 139)"}}>'logo' is defined but never used no-unused-vars Line 18:12:  img elements must have an alt prop, either with meaningful text, or an empty string for decorative images</p>
          <input type="button" className='view' value="View More >"></input>
        </td>
      </tr>

    </table>
    </div>
    <div  className='block' style={{marginLeft:"-15px",backgroundColor:"#f7f7f7",marginTop:"-3px"}}>
    <table style={{paddingTop:"93px",paddingLeft:"20px"}}>
      <tr>
      <td> <img src='https://www.pngitem.com/pimgs/m/483-4830860_horizon-zero-dawn-aloy-bow-hd-png-download.png' className='im' style={{width:"117%",marginLeft:"20px"}} ></img></td>
      
      <br></br><br></br>
      <td><img src='https://ih1.redbubble.net/image.1301639421.4825/st,small,507x507-pad,600x600,f8f8f8.jpg' className='im' style={{width:"57%",marginLeft:"199px"}}></img>
      <p style={{width:"421px",marginLeft:"314px",marginTop:"-89px"}}>This hospital is good rating in this  city,Please check forthe further information and cleckon the button to know more.</p>
      <br></br>
      <Welcome  style={{marginLeft:"318px"}} />
      </td> 
      
      </tr>

</table>
    </div>
    <div className="block1">
        <table>
      <tr>
      <td>{/*<h1 className='head'>GoD OF WaR<span  style={{color: "#ffc600"}}> Ragnarok</span></h1> */}
      <img src='https://www.hallowsounds.com/uploads/6/1/9/3/61932425/the-last-of-us-part-ii-logo_orig.png' className='im' style={{width:"121%",marginLeft:"1px"}}></img>
      <p style={{width:"438px",marginLeft:"41px"}}>This hospital is good rating in this  city,Please check forthe further information and cleckon the button to know more.</p>
      <br></br>
      <div style={{marginLeft:"-4232px"}}>
      <Welcome  style={{marginLeft:"2px"}} ></Welcome>
      </div>
      </td> 
      
      <br></br><br></br>
      <td> <img src={last} className='im' style={{width:"48%",marginLeft:"437px",marginTop:"41px"}} ></img></td>
      </tr>
      
</table>
    </div>
    <div className='block' style={{marginLeft:"-1px",backgroundColor:"black",marginTop:"0px"}} id='gta'>
    <Gta/>
    
    <table style={{paddingTop:"-30px",paddingLeft:"20px",marginTop:"-638px"}}>
      <tr>
      <td> <img src={franklin} className='im' style={{width:"424%",marginLeft:"20px",marginTop:""}} ></img></td>
      
      <br></br><br></br>
      <td><img src={gta} className='im' style={{width:"42%",marginLeft:"588px"}}></img>
      <p style={{width:"475px",marginLeft:"709px",marginTop:"",color:"#f9fad8"}}>This hospital is good rating in this  city,Please check forthe further information and cleckon the button to know more.</p>
      <br></br>
      <Welcome  style={{marginLeft:"318px"}} />
      </td> 
      
      </tr>

</table>
    </div>{/* footerrrrrr*/}
    <div  style={{height: "100%",marginTop:"-156px",paddingTop:"479px"}} className='footer'>
     <Youtube/>
     <div style={{backdropFilter:"blur(5px)"}}>
    <table id='contact' style={{paddingLeft:"12%",marginTop:"10%"}}>
      <tr>
      <td >
        <img src={RMA} style={{width:"50%",marginLeft:"53px"}} ></img>
          
        </td>
        
        <td >
        <h1 className='logo' style={{float:"left",paddingLeft:"",marginTop:"5%"}}>RMA GAMING</h1>
          <p className='foot' style={{width:"",paddingLeft:"3px"}}>'logo' is defined but never used no-unused-vars Line 18:12:  img elements must have an alt prop, either with meaningful text, or an empty string for decorative images</p>
          
        </td>
        <td>
          
          <h1 className='' style={{float:"left",paddingLeft:"0px",fontSize:"22px",marginTop:"26px",marginLeft:"-27%",color:"#808789"}}>Contact</h1>
          <p className='foot' style={{width:"324px",marginLeft:"-27%",paddingLeft:"0px"}}>'logo' is defined but never used no-unused-vars Line 18:12:  img elements must have an alt prop, either with meaningful text, or an empty string for decorative images</p>
          
        </td>
        <br></br>
        <td>
          <h1 className='' style={{float:"left",paddingLeft:"0px",fontSize:"22px",marginTop:"0px",marginLeft:"-66%",color:"#808789"}}>Quick Links</h1>
          <div style={{marginLeft:"-42px",paddingTop:"69%"}}>
          <p className='fr'>Services</p>
          <p className='fr'>Download</p>
          <p className='fr'>Contact</p>
        </div>
        </td>
        <br></br>
        <td>
          <h1 className='' style={{float:"left",paddingLeft:"182px",fontSize:"20px",marginTop:"-5px",marginLeft:"-51%",color:"#808789"}}>Contact Us</h1>
          <div style={{marginLeft:"20%",paddingTop:"43px"}}>
          <p className='fr'>Instagram</p>
          <p className='fr'>Twitter</p>
          <p className='fr'>Behance</p>
        </div>
        </td>
      </tr>

    </table>
    </div>
    </div>
    </div>
  );
}

export default App;
