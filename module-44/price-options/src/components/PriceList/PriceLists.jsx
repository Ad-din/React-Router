import React from 'react';

import PriceOption from '../priceOption/PriceOption';

const PriceLists = () => {

    const priceOptions=[
        {
          "id": 1,
          "name": "Basic Membership",
          "price": 20,
          "features": ["Gym access", "Locker room", "Water dispenser access"]
        },
        {
          "id": 2,
          "name": "Standard Membership",
          "price": 35,
          "features": ["Basic Membership benefits", "Group fitness classes", "Extended hours access"]
        },
        {
          "id": 3,
          "name": "Premium Membership",
          "price": 50,
          "features": ["Standard Membership benefits", "Sauna access", "Towel service", "Personal trainer (1 session/month)"]
        },
        {
          "id": 4,
          "name": "Student Discount Plan",
          "price": 25,
          "features": ["Gym access", "Discounted group classes", "Study-friendly lounge area"]
        },
        {
          "id": 5,
          "name": "Senior Citizen Plan",
          "price": 30,
          "features": ["Gym access", "Low-impact exercise classes", "Health assessments"]
        },
        {
          "id": 6,
          "name": "Couples Membership",
          "price": 80,
          "features": ["Gym access for two", "Partner workouts", "Discount on personal training"]
        },
        {
          "id": 7,
          "name": "Family Membership",
          "price": 100,
          "features": ["Gym access for up to 4 members", "Kids fitness programs", "Priority booking for classes"]
        },
        {
          "id": 8,
          "name": "Corporate Wellness Plan",
          "price": 150,
          "features": ["Gym access for employees", "Team-building workout sessions", "Wellness seminars"]
        },
        {
          "id": 9,
          "name": "Personal Training Package",
          "price": 200,
          "features": ["Gym access", "8 personal training sessions", "Customized fitness plan"]
        },
        {
          "id": 10,
          "name": "Elite VIP Membership",
          "price": 300,
          "features": ["24/7 access", "Unlimited personal training", "Private locker & lounge", "Massage therapy"]
        }
      ]
      
    return (
        <div className='m-12'>
            <h2 className="text-5xl">Best Prices in the town</h2>
        
          <div className='grid md:grid-cols-3 gap-6'>  {
                priceOptions.map(option=> <PriceOption key={option.id} option={option} ></PriceOption>)
            }</div>
        
        </div>
    );
};

export default PriceLists;