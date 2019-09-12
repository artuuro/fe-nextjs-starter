import { Component } from 'react';
import { Container } from '@material-ui/core';
import { Config } from '../lib';

class Footer extends Component {
    
    getDate() {
        const date = new Date();
        return date.getFullYear();
    }

    render() {
        return (
            <Container maxWidth="xs">
                <p style={{textAlign: 'center'}}>&copy; {this.getDate()}, { Config.copyright }</p>
            </Container>
            
        );
    }
}

export default Footer;