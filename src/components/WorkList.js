import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import WorkItem from './WorkItem';

const WorkList = ({ filteredWorks }) => {
    const workList = filteredWorks.map((item, index) => (
        <WorkItem
            key={item.id}
            id={item.id}
            thumb={item.images.thumb}
            title={item.title}
            summary={item.summary}
            tags={item.tags}
            isFlipped={(index + 1) % 2 === 0 ? true : undefined}
        />
    ));

    return workList;
};

WorkItem.propTypes = {
    filteredWorks: PropTypes.object,
};

const mapStateToProps = state => {
    return {
        filteredWorks: state.filter.filteredWorks,
    };
};

export default connect(mapStateToProps)(WorkList);
