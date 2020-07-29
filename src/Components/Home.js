import React, { Component } from 'react';



class Home extends Component {

    render() {
        return ( 
            <div className="splashpage">
                <div>
                    <h1 id="header">Formulations for skin, hair, home and body</h1>
                    <h3>Created with sensory pleasure in mind.</h3>
                    <img src="./Images/Aesop-Homepage-Banner.jpg"></img>
                    <br></br>
                </div>
                <div>
                    <h3 className="copy">Aesop essentials</h3>
                    <h1 className="copy">A selection of staples</h1>
                    <h2 className="copy">From beloved formulations first created decades ago to personal care necessities.</h2>

                </div>
                
            
            
            </div>

        );
    }
}



export default Home; 