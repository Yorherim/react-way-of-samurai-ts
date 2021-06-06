import { ComponentType } from "react";
import { connect } from "react-redux";
import { compose } from "redux";

import { dialogsActions } from "../../redux/reducers/dialogs-reducer";
import Dialogs from "./Dialogs";
import { AppStateType } from "../../redux/redux-store";
import { withAuthRedirect } from "../hoc/withAuthRedirect";

type MapStateToPropsType = ReturnType<typeof mapStateToProps>;
type MapDispatchToPropsType = {
    addMessage: (newMessage: string) => void;
};
export type DialogsPropsType = MapStateToPropsType & MapDispatchToPropsType;

const { addMessage } = dialogsActions;

const mapStateToProps = (state: AppStateType) => ({
    dialogsData: state.dialogsPage.dialogsData,
    messagesData: state.dialogsPage.messagesData,
});

export default compose<ComponentType>(
    connect(mapStateToProps, {
        addMessage,
    }),
    withAuthRedirect
)(Dialogs);
