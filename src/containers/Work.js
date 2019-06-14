import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Container } from 'reactstrap';
import { WorkList } from '../components';

import './Work.scss';

const Work = ({ workList }) => (
    <section id="work" className="work-section">
        <Container>
            <div className="mb-5">
                <h2 className="section__title">Work</h2>
                <hr className="title__separator ml-0" />
            </div>

            <WorkList works={workList} />
        </Container>
    </section>
);

Work.propTypes = {
    data: PropTypes.array,
};

const mapStateToProps = state => {
    return {
        workList: state.config.workList,
    };
};

export default connect(mapStateToProps)(Work);
