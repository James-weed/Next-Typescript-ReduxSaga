import React from 'react'
import internal from 'stream';
import { People } from '../model/people';

const Card = ({ data } : {data: People}) => {
    return (<>
        <div className="w-1/5 p-4 h-96 hover:h-full overflow-hidden">
            <div className="max-w-sm rounded px-6 py-4 shadow-lg" >
                <img className="w-full" src={ data.avatar } alt="Card Image" />
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">{data.first_name} {data.last_name}</div>
                    <p className="text-gray-700 text-base">
                    <strong>Id:</strong> {data.id} <br />
                    <strong>uId:</strong> {data.uid}<br />
                    <strong>UserName:</strong> {data.username}<br />
                    <strong>Email:</strong> {data.email}<br />
                    <strong>Password:</strong> {data.password}<br />
                    <strong>Gender:</strong> {data.gender}<br />
                    <strong>DOB:</strong> {data.date_of_birth}<br />
                    <strong>Address:</strong> {data.address.street_address + data.address.street_name + data.address.state + data.address.country}<br />
                    <strong>Phone:</strong> {data.phone_number}<br />
                    <strong>SIN:</strong> {data.social_insurance_number}<br />
                    <strong>CCNum:</strong> {data.credit_card.cc_number}<br />
                    <strong>Emp:</strong> Skill-{data.employment.key_skill} Title-{ data.employment.title }<br />
                    <strong>SPay:</strong> {data.subscription.payment_method}<br />
                    <strong>SPlan:</strong> {data.subscription.plan}<br />
                    <strong>SStatus:</strong> {data.subscription.status}<br />
                    <strong>STerm:</strong> {data.subscription.term}<br />
                    </p>
                </div>
            </div>
        </div>
    </>)
}

export default Card;