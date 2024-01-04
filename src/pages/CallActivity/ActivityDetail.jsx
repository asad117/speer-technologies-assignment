import React, { useEffect } from "react";
import { connect } from "react-redux";
import defaultAvatar from "../../assets/images/Blank-Avatar.png";
import backIcon from "../../assets/images/back.png";
import archivedIcon from "../../assets/images/archive.png";
import { formatDateAndTime } from "../../utils/helpers";


function ActivityDetail(props) {
  const { fetchDetails, id, callActivityDetail } = props;

  useEffect(() => {
    fetchDetails(props.id);
  }, [id,fetchDetails]);

    const formatCallDuration=(duration)=>{
       let callDuration = Math.floor(duration/60)
       return `${callDuration} ${callDuration>1 ?"Minutes": "Minute"}`
    }
  return (
    <>
      <div className="call-detail-container">
        <div className="icon-container">
        <img
          onClick={props.backButtonHandler}
          className="back-button"
          src={backIcon}
          alt="back button"
        />
            <img
          onClick={()=>props.archiveCallHandler([callActivityDetail], !callActivityDetail?.is_archived)}
          className="back-button"
          src={archivedIcon}
          alt="Archive"
          title={`${callActivityDetail.is_archived ===true? 'Click to Unarchive':'Click to Archive'}`}
        />
        </div>
      
        <div className="activity-detail-main">
          <div className="caller-avatar">
            <img src={defaultAvatar} alt="profile avatar" />
            <div className="caller-title">{callActivityDetail?.from}</div>
          </div>
        </div>
      </div>

      <div className="call-time-box">
        <div className="date-title">{formatDateAndTime(callActivityDetail?.created_at).date}</div>
        <div className="call-status-wrapper">
        <div className="call-title">{formatDateAndTime(callActivityDetail?.created_at).time}</div>
        <div className={`call-status ${callActivityDetail?.call_type}`}>{callActivityDetail?.call_type}</div>
        </div>
      
        <div className="call-duration">{formatCallDuration(callActivityDetail?.duration)}</div>

        <div className="is-archived">
            {callActivityDetail?.is_archived === true&& "Archived" }
        </div>
      </div>
    </>
  );
}
const mapStateToProps = (state) => ({
  callActivityDetail: state.callActivity.callActivityDetail,
  loading: state.callActivity.loading,
  error: state.callActivity.error,
});

const mapDispatchToProps = (dispatch) => ({
  fetchDetails: (data) => dispatch({ type: "fetchDetailStart", data }),
});

export default connect(mapStateToProps, mapDispatchToProps)(ActivityDetail);
