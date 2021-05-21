import React, { useState, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import { Container } from '@material-ui/core';
import HospitalInfoCard from './../HospitalInfoCard/HospitalInfoCard';

const AllHospitalInfoCards = () => {

    const [HospitalData, setHospitalData] = useState([]);

    useEffect(() => {
        fetch('https://cra-health-guide-app-backend.herokuapp.com/hospitalData')
        // take the json and parse it into javascript array/object
            .then(res => res.json())
            .then(data => setHospitalData(data.hospitals))
    }, [])

    return (
        <Container>
            <Grid container spacing = {3}>
            {HospitalData.map((data, index) => (
                <Grid item key = {index} xs = {12} md={6} lg={4}>
                    <HospitalInfoCard data = {data}/>
                </Grid>
            ))}
            </Grid>
        </Container>
    )
}

export default AllHospitalInfoCards;