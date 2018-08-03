import React from 'react';

export default ({ headings }) => (
    <thead>
        <tr>
            {
                headings.map((heading, i) => <th key={i}>{ heading }</th>) 
            }
        </tr>
    </thead>
)