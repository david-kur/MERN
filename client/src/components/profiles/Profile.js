import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Spinner from '../layout/Spinner';
import ProfileSnap from './ProfileSnap';
import ProfileBio from './ProfileBio';
import ProfileExp from './ProfileExp';
import ProfileEdu from './ProfileEdu';
import { getProfileById } from '../../actions/profile';

const Profile = ({
  match,
  getProfileById,
  auth,
  profile: { profile, loading }
}) => {
  useEffect(() => {
    getProfileById(match.params.id);
  }, [getProfileById, match.params.id]);
  return (
    <>
      {profile == null || loading ? (
        <Spinner />
      ) : (
        <>
          <Link to="/profiles" className="btn btn-light">
            Back to Developers List
          </Link>
          {auth.isAuthenticated &&
            auth.loading === false &&
            auth.user._id === profile.user._id && (
              <Link to="/edit-profile" className="btn btn-dark">
                Edit
              </Link>
            )}
          <div className="profile-grid my-1">
            <ProfileSnap profile={profile} />
            <ProfileBio profile={profile} />
            <div className="profile-exp bg-white p-2">
              <h2 className="text-primary">Experience</h2>
              {profile.experience.length > 0 ? (
                <>
                  {profile.experience.map(exp => (
                    <ProfileExp key={exp._id} exp={exp} />
                  ))}
                </>
              ) : (
                <h4>No experience yet</h4>
              )}
            </div>
            <div className="profile-edu bg-white p-2">
              <h2 className="text-primary">Education</h2>
              {profile.education.length > 0 ? (
                <>
                  {profile.education.map(edu => (
                    <ProfileEdu key={edu._id} edu={edu} />
                  ))}
                </>
              ) : (
                <h4>No education yet</h4>
              )}
            </div>
          </div>
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
