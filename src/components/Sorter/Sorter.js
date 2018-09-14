import React, { Fragment } from 'react';

export default ({
    options
}) => {
    
    const onSelectChange = options => e => {  
        const { 
            target: {
                selectedIndex,
                options: targetOptions 
            }, target
        } = e;

        options[targetOptions[selectedIndex].value].action();
    }

    return (
        <Fragment>
            <label htmlFor="sort">Sort by:</label>
            <select id="sort" onChange={ onSelectChange(options) }>
                {
                    Object.keys(options).map((option, i) =>
                        <option 
                            value={ option }
                            key={ i }
                        >
                            { options[option].text }
                        </option>
                    )
                }
            </select>
        </Fragment>
    );
}