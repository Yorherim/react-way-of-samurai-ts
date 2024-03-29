import React, { ChangeEvent } from "react";

import classes from "./ProfileStatus.module.scss";

type ProfileStatusPropsType = {
    status: string;
    updateStatus: (status: string) => void;
    isAuth: boolean;
};

type StateType = {
    editMode: boolean;
    status: string;
};

class ProfileStatus extends React.Component<ProfileStatusPropsType> {
    state: StateType = {
        editMode: false,
        status: this.props.status,
    };

    componentDidUpdate(prevProps: Readonly<ProfileStatusPropsType>) {
        if (prevProps.status !== this.props.status) {
            this.setState({ status: this.props.status });
        }
    }

    activateEditMode = () => {
        if (this.props.isAuth) {
            this.setState({ editMode: true });
        }
    };
    deactivateEditMode = () => {
        this.setState({ editMode: false });
        if (this.state.status !== this.props.status) {
            this.props.updateStatus(this.state.status);
        }
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
                            style={
                                this.props.isAuth
                                    ? { cursor: "pointer" }
                                    : undefined
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
