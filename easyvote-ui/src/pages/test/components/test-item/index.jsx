import React from 'react';

export default (props) => (
    <div className="my-test-item">
        <span onClick={(event) => props.onItemSelect(event.target.innerText)}> { props.data } </span>
    </div>
);