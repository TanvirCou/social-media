import React from 'react';
import birthdayImg from "../../../../assets/gift.png";

import { Users } from '../../../../dummyData';
import OnlineFriends from '../OnlineFriends/OnlineFriends';
import Ad from '../Ad/Ad';

const Rightbar = () => {
    return (
            <div>
                <div className='flex items-center'>
                    <img src={birthdayImg} alt="" className='w-10 h-10'/>
                    <span className='text-sm ml-1'> <b>Tanvir Ahmed</b> and <b>3 other friends</b> have a birthday today</span>
                </div>
                <Ad />
                <div className='px-1'>
                    <p className='text-md font-medium'>Online Friends</p>
                    <div>
                        {Users.map(user => <OnlineFriends key={user.id} user={user} />)}
                    </div>
                </div>
            </div>
           
    );
};

export default Rightbar;