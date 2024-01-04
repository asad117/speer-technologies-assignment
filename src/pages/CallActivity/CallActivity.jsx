import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import {Tab, Tabs } from "react-bootstrap";
import "./Activity.css";
import archivedIcon from "../../assets/images/archive.png";
import CallerBox from "../../components/CallerBox/CallerBox";
import ActivityDetail from "./ActivityDetail";
// import backIcon from "../../assets/images/back.png";
import Loader from "../../components/Loader/Loader";

function CallActivity({
  fetchDataStart,
  callActivityList,
  loading,
  error,
  updateCalls,
}) {
  const [currentCall, setCurrentCall] = useState(false);
  const [currentCallId, setCurrentCallId] = useState();

  useEffect(() => {
    fetchDataStart();
  }, []);

  let callActivities = callActivityList?.filter(
    (item) => "from" in item && "to" in item
  );
  let activityFeed = callActivities.filter((item) => item.is_archived !== true);
  let archiveList = callActivities.filter((item) => item.is_archived === true);


  const detailClickHandler = (id) => {
    console.log("dataffhjahdfkhfah", id);

    setCurrentCallId(id);
    setCurrentCall(true);
  };

  const archiveCallHandler = (data, status) => {
    for (const item of data) {
      updateCalls({ activityFeed: item, status });
    }
  };

  return (
    <div className="activity-main">
      <Loader loading={loading} />
      {!currentCall ? (
        <Tabs
          defaultActiveKey="activity"
          id="justify-tab-example"
          justify
          fill
          transition={true}
        >
          <Tab eventKey="activity" title="Activity">
            <div className="action-container">
              <img src={archivedIcon} alt="" />
              <button
                className="action-button"
                onClick={() => archiveCallHandler(activityFeed, true)}
              >
                Archive all Calls
              </button>
            </div>
            <div className="call-grid">
              {activityFeed?.map((item, index) => (
                <CallerBox
                  detailClickHandler={detailClickHandler}
                  key={index}
                  data={item}
                />
              ))}
            </div>
          </Tab>
          <Tab eventKey="archived" title={"Archive"}>
            <div className="action-container">
              <img src={archivedIcon} alt="" />
              <button
                className="action-button"
                onClick={() => archiveCallHandler(archiveList, false)}
              >
                Unarchive all Calls
              </button>
            </div>
            <div className="call-grid">
              {archiveList?.map((item, index) => (
                <CallerBox
                  detailClickHandler={detailClickHandler}
                  key={index}
                  data={item}
                />
              ))}
            </div>
          </Tab>
        </Tabs>
      ) : (
        <ActivityDetail
          backButtonHandler={() => setCurrentCall(false)}
          archiveCallHandler={archiveCallHandler}
          id={currentCallId}
        />
      )}
    </div>
  );
}
const mapStateToProps = (state) => ({
  callActivityList: state.callActivity.callActivityList,
  loading: state.callActivity.loading,
  error: state.callActivity.error,
});

const mapDispatchToProps = (dispatch) => ({
  fetchDataStart: (data) => dispatch({ type: "fetchDataStart", data }),
  updateCalls: (data) => dispatch({ type: "updateStart", data }),
});
export default connect(mapStateToProps, mapDispatchToProps)(CallActivity);
