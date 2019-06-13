import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Spinner from '../layout/Spinner';
import { getProfileById } from '../../actions/profile';

const Profile = ({
  match,
  getProfileById,
  auth,
  profile: { profile, loading }
}) => {
  useEffect(() => {
    getProfileById(match.params.id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [getProfileById]);
  return (
    <>
      {profile == null || loading ? (
        <Spinner />
      ) : (
        <>
          <Link to="/profiles" className="btn btn-light">
            Back to Developers List
          </Link>
        </>
      )}
    </>
  );
};

Profile.propTypes = {
  getProfileById: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => {
  return {
    profile: state.profile,
    auth: state.auth
  };
};

export default connect(
  mapStateToProps,
  { getProfileById }
)(Profile);
