import React, { useContext, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import { LeadDataContext, LeadsData } from '../store/MyContext';

function Version1() {
    const data: LeadsData = React.useContext(LeadDataContext) as LeadsData;
    useEffect(() => {
        console.log("we are in v1: ", data);
    })
    return (
        <Container>
            <h2>Version 1</h2>
        </Container>
    );
}

export default Version1;
