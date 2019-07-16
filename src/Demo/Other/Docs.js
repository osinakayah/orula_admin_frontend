import React, {Component} from 'react';
import {Row, Col} from 'react-bootstrap';

import Aux from "../../hoc/_Aux";
import Card from "../../App/components/MainCard";

class Docs extends Component {
    render() {
        return (
            <Aux>
                <Row>
                    <Col>
                        <Card title='Application Documentation' isOption>
                            <p>This is the application documentation</p>
                            <p> - The landing page for the product is - <a href="https://orula.com.ng" target="_blank" rel="noopener noreferrer">Orula Website</a></p>
                            {/* <p> - Unzip <code>datta-able-react-lite.zip</code> file, Inside that directory you will find the <code>datta-able-react-lite/</code> folder</p> */}
                            
                            <div className='theme-bg2 text-white p-3'>
                                <p>Blah Blah Blah Blah</p>
                                <p>Blah Blah Blah Blah</p> 
                                <p>Blah Blah Blah Blah</p>
                            </div>
                            
                            <p> - Your app is ready to be deployed. </p>
                        </Card>
                    </Col>
                </Row>
            </Aux>
        );
    }
}

export default Docs;