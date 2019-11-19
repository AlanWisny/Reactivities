import React from 'react'
import { Container } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

export const HomePage = () => {
    return (
        <Container style={{margintTop: '7em'}}>
            <h1>Home Page</h1>
            <h3>Go to <Link to='/activities'>Activities</Link></h3>
        </Container>
    );
};
