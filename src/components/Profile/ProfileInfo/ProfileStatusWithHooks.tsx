import React from "react";
import { ChangeEvent , useState, useEffect } from "react";
import n from "./ProfileStatus.module.scss";

type PropsType = {
  status: string;
  updateStatus: (newStatus: string) => void;
  className?: string
};


const ProfileStatusWithHooks: React.FC<PropsType> = (props) => {
  let [editMode, setEditMode] = useState(false);
  let [status, setStatus] = useState(props.status);

  useEffect(() => {
    setStatus(props.status);
  }, [props.status]);

  const activateEditMode = () => {
    setEditMode(true);
  };

  const deactivateEditMode = () => {
    setEditMode(false);
    props.updateStatus(status);
  };

  const onStatusChange = (e: ChangeEvent <HTMLInputElement>) => {
    setStatus(e.currentTarget.value);
  };

  return (
    <div className={n.profileStatus}>
      {!editMode && (
        <div>
          <b className={n.statusStatus}>Status: </b>
          <span onDoubleClick={activateEditMode} className={n.statusValue}>
            {props.status || "Enter your status here"}
          </span>
        </div>
      )}
      {editMode && (
        <div>
          <input
            autoFocus={true}
            onBlur={deactivateEditMode}
            onChange={onStatusChange}
            value={status}
            className={n.statusEditModeInput}
          ></input>
        </div>
      )}
    </div>
  );
};

export default ProfileStatusWithHooks;
