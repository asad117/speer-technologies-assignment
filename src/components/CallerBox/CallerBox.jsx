import React from "react";
import "./CallerBox.css";
import missedCallIcon from "../../assets/images/missed_call.png";
import incomingCallIcon from "../../assets/images/incoming.png";
import outgoingCallIcon from "../../assets/images/outgoing.png";
import { formatDateAndTime } from "../../utils/helpers";

function CallerBox(props) {
  return (
    <div onClick={()=>props.detailClickHandler(props.data.id)} className="call-container">
      <div className="caller-info-container">
        <img
        className="call-type-icon"
        src={
          props.data?.direction === "inbound"
            ? incomingCallIcon
            : props.data?.direction === "outbound"
            ? outgoingCallIcon
            : missedCallIcon
        }
        alt=""
      />
      
        <div className="caller-info">
          <p className="caller-number">{props.data.from}</p>
          <p className="caller-name">{props?.data?.to}</p>
        </div>
      </div>

      <div className="time-container-main">
        <div className="time-container-hour">{((formatDateAndTime(props.data?.created_at).time).split(' '))[0]}</div>
        <div className="time-container-period">{((formatDateAndTime(props.data?.created_at).time).split(' '))[1]}</div>
      </div>
    </div>
  );
}

export default CallerBox;
