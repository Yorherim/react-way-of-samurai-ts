import React, { ChangeEvent } from "react";

import classes from "./ProfileStatus.module.scss";

type ProfileStatusPropsType = {
    status: string;
    updateStatus: (status: string) => void;
};

class ProfileStatus extends React.Component<ProfileStatusPropsType> {
    state = {
        editMode: false,
        status: this.props.status,
    };

    activateEditMode = () => this.setState({ editMode: true });
    deactivateEditMode = () => {
        this.setState({ editMode: false });
        this.props.updateStatus(this.state.status);
    };
    onChangeStatus = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({ status: e.currentTarget.value });
    };

    render() {
        return (
            <div className={classes.profileStatus}>
                {!this.state.editMode ? (
                    <div>
                        <span
                            className={
                                this.props.status !== this.state.status
                                    ? classes.isLoading
                                    : ""
                            }
                            onClick={this.activateEditMode}
                        >
                            {this.props.status || "----"}
                        </span>
                    </div>
                ) : (
                    <div>
                        <input
                            onChange={this.onChangeStatus}
                            onBlur={this.deactivateEditMode}
                            value={this.state.status}
                            autoFocus
                        />
                    </div>
                )}
            </div>
        );
    }
}

export default ProfileStatus;
