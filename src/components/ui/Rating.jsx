import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

function Rating({ rating}) {
    return (
        <div className="book__ratings">
            {
                new Array(Math.floor(rating)).fill(0).map((_, index) => <FontAwesomeIcon icon="star" key={index} />)
            }
            {
            Number.isInteger(rating) ? '' : <FontAwesomeIcon icon="star-half-alt" />
            }
            {
            new Array(5 - Math.ceil(rating)).fill(0).map((_, index) => <FontAwesomeIcon icon={['far', 'star']} key={index} />)
            }
        </div>
    )
}

export default Rating;