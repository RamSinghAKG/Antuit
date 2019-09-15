import React from 'react';
import PropTypes from 'prop-types';
import './Pagination.scss';
const Pagination = (props) => {
    const onPageClick = (pagenum) => {
        props.onClick(pagenum);
    }
    const totalPages = Math.ceil(props.totalRecord / props.perPageRecords);
    const prevDisable = props.selectedPage === 1 ? 'disable' : '';
    const nextDisable = props.selectedPage === totalPages ? 'disable' : '';
    return <ul class="pagination">
        <li><button className={prevDisable} onClick={() => onPageClick(props.selectedPage-1)}>PREV</button></li>
        {props.selectedPage > 2 ? <li><button onClick={() => onPageClick(props.selectedPage-2)}>{props.selectedPage - 2}</button></li> : ''}
        {props.selectedPage > 1 ? <li><button onClick={() => onPageClick(props.selectedPage-1)}>{props.selectedPage - 1}</button></li> : ''}
        <li><button className='active' onClick={() => onPageClick(props.selectedPage)}>{props.selectedPage}</button></li>
        {totalPages > props.selectedPage ? <li><button onClick={() => onPageClick(props.selectedPage+1)}>{props.selectedPage + 1}</button></li> : ''}
        {totalPages > props.selectedPage+1 ? <li><button onClick={() => onPageClick(props.selectedPage+2)}>{props.selectedPage + 2}</button></li> : ''}
        <li><button className={nextDisable} onClick={() => onPageClick(props.selectedPage+1)}>NEXT</button></li>
    </ul>;
};

Pagination.defaultProps = {
    selectedPage: 1
};

Pagination.propTypes = {
    totalRecord: PropTypes.number,
    perPageRecords: PropTypes.number,
    selectedPage: PropTypes.number,
    onClick: PropTypes.func
};
export default Pagination;