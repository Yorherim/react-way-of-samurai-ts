import React from "react";

import classes from "./ProfileStatus.module.scss";

type ProfileStatusPropsType = {
    status: string;
};

class ProfileStatus extends React.Component<ProfileStatusPropsType> {
    state = {
        editMode: false,
    };

    activateEditMode = () => this.setState({ editMode: true });
    deactivateEditMode = () => this.setState({ editMode: false });

    render() {
        const { status } = this.props;
        return (
            <div className={classes.profileStatus}>
                {!this.state.editMode ? (
                    <div>
                        <span onClick={this.activateEditMode}>{status}</span>
                    </div>
                ) : (
                    <div>
                        <input
                            onBlur={this.deactivateEditMode}
                            value={status}
                            autoFocus
                        />
                    </div>
                )}
            </div>
        );
    }
}

export default ProfileStatus;
