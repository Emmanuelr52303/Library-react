import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

function Price({ salePrice  , originalPrice }) {
    return (
        <div className="books__price">
            {salePrice ? (
          <div>
            <span className="book__price--normal">
              ${originalPrice.toFixed(2)}
            </span> 
            ${salePrice.toFixed(2)}
          </div>
        ) : (
          <span>${originalPrice.toFixed(2)}</span>
        )}
        </div>
    )
}

export default Price;