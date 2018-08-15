import React from 'react';
import TableRow from './TableRow';
import TableHeader from './TableHeader';

export default ({ headings, data }) => (
    <table>
        <TableHeader 
            headings={ headings }
        />
        <tbody>
            {
                data.map((item, i) => 
                    <TableRow 
                        cells={ item }
                        key={i}
                    />
                )
            }
        </tbody>
    </table>
);