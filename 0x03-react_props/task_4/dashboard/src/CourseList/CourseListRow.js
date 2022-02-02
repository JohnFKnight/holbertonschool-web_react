import React from 'react';
import PropTypes from 'prop-types';

// isHeader (bool, default: false)
// textFirstCell (string, required)
// textSecondCell (string, default: null)

function CourseListRow(props) {
    isHeader = props.isHeader;
    textFirstCell = props.textFirstCell;
    textSecondCell = props.textSecondCell;
    if (isHeader) {
        if (textSecondCell == null) {
            return (
                <tr>
                    <th colSpan='2'>{textFirstCell}</th>;
                </tr>
            );
        }
        else {
            return (
                <tr>
                    <th>{textFirstCell}</th>
                    <th>{textSecondCell}</th>
                </tr>
            );
        }
    }
    else {
        return (
            <tr>
                <td>{textFirstCell}</td>
                <td>{textSecondCell}</td>
            </tr>
        );
    }
};

CourseListRow.propTypes = {
    isHeader: PropTypes.bool,
    textFirstCell: PropTypes.string.isRequired,
    textSecondCell: PropTypes.string    
};
CourseListRow.defaultProps = {
    isHeader: false,
    textSecondCell: null
};
export default CourseListRow;
