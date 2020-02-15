import React, { Fragment } from 'react';

const Card = ({username, id, email}) => {
    return(
        <Fragment> 
            <div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
                <img alt='Robot' src={`https://robohash.org/${id}?200x200`}></img>
                <h2>{username}</h2>
                <p>{email}</p>
            </div>
        </Fragment>
    )
}

export default Card;