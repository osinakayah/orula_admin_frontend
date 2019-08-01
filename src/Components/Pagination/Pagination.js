import React from "react";
import {Pagination} from 'react-bootstrap';

const Pagination = () => {
    return (
        <Pagination style={pagStyle} size="sm">
            <Pagination.First />
                <Pagination.Prev />
                    <Pagination.Item>
                        1 of 10 pages
                    </Pagination.Item>
                <Pagination.Next />
            <Pagination.Last />
        </Pagination>
    )
}

export default Pagination;