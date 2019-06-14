import React from 'react';
import PropTypes from 'prop-types';
import WorkItem from './WorkItem';

const WorkList = ({ works }) => {
    const workList = works.map((item, index) => (
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
    works: PropTypes.array.isRequired,
};

export default WorkList;
