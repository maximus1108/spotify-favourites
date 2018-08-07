import React from 'react';

export default ({ cells }) => (
    <tr>
        {
            cells.map((data, i) => <td key={i}>{ data }</td>)
        }
    </tr>
)