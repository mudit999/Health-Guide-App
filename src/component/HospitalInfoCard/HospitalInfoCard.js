import React from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import { Typography } from '@material-ui/core';

const HospitalInfoCard = ( {data} ) => {

    return (
        <div>
            <Card elevation = {4}>
                <CardHeader
                    title = {data.HospitalName}
                    subheader = {data.PhoneNo}
                />
                <CardContent>
                    <Typography variant = 'body1' color = 'textSecondary' component = {'span'}>

                        <ul className = 'ul-data'>
                            <li>{data.Address}</li>
                            <li>{data.State}</li>
                            <li>{data.City}</li>
                            <li>{data.CovidPatientsIntake}</li>
                            <li>{data.Beds}</li>
                            <li>{data.WardsAvailable}</li>
                            <li>{data.ServicesSpecialists}</li>
                            <li>{data.SupportServices}</li>
                            <li>{data.TotalStaff}</li>
                            <li>{data.Email}</li>
                        </ul>

                    </Typography>
                </CardContent>
            </Card>
        </div>
    )
}

export default HospitalInfoCard;