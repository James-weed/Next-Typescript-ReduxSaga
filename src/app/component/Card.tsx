import React from 'react'
import { User } from '../model/people';

const Card = ({ data } : {data: User}) => {
    return (<>
        <div className="w-1/5 p-4 h-96 hover:h-full overflow-hidden">
            <div className="max-w-sm rounded px-6 py-4 shadow-lg" >
                <img className="w-full" src={ data.profile_picture } alt="Card Image" />
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">{data.first_name} {data.last_name}</div>
                    <p className="text-gray-700 text-base">
                        <strong>Id:</strong> {data.id} <br />
                        <strong>Email:</strong> {data.email}<br />
                        <strong>Gender:</strong> {data.gender}<br />
                        <strong>DOB:</strong> {data.date_of_birth}<br />
                        <strong>Address:</strong> {data.street + data.city + data.state + data.country}<br />
                        <strong>Zipcode:</strong> {data.zipcode}<br />
                        <strong>Phone:</strong> {data.phone}<br />
                        <strong>Job:</strong> {data.job}<br />
                        <strong>Latitude:</strong> {data.latitude}<br />
                        <strong>Longitude:</strong> {data.longitude}<br />
                    </p>
                </div>
            </div>
        </div>
    </>)
}

export default Card;