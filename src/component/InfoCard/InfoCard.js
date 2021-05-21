import React from 'react'
import './InfoCard.css';

const InfoCard = () => {
    return(
        <div className = 'InfoCard'>
            <p className = 'InfoCard_content'> Hospital Name </p>
            <p className = 'InfoCard_content'> Address </p>
            <p className = 'InfoCard_content'> Phone Number </p>
            <p className = 'InfoCard_content'> Covid Patient Intake </p>
            <p className = 'InfoCard_content'> Beds </p>
            <p className = 'InfoCard_content'> Support Service </p>
            <p className = 'InfoCard_content'> Wards Available </p>
            <p className = 'InfoCard_content'> Services and Specialist </p>
            <p className = 'InfoCard_content'> Total Staff </p>
            <p className = 'InfoCard_content'> Email </p>
        </div>
    )
}

export default InfoCard;