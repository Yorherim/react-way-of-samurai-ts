import { ComponentType } from "react";
import { connect } from "react-redux";
import { compose } from "redux";

import { dialogsActions } from "../../redux/reducers/dialogs-reducer";
import Dialogs from "./Dialogs";
import { AppStateType } from "../../redux/redux-store";
import { withAuthRedirect } from "../hoc/withAuthRedirect";

type MapStateToPropsType = ReturnType<typeof mapStateToProps>;
type MapDispatchToPropsType = {
    addMessage: () => void;
    updateNewMessageText: (messageText: string) => void;
};
export type DialogsPropsType = MapStateToPropsType & MapDispatchToPropsType;

const { updateNewMessageText, addMessage } = dialogsActions;

const mapStateToProps = (state: AppStateType) => ({
    dialogsData: state.dialogsPage.dialogsData,
    messagesData: state.dialogsPage.messagesData,
    newMessageText: state.dialogsPage.newMessageText,
});

export default compose<ComponentType>(
    connect(mapStateToProps, {
        addMessage,
        updateNewMessageText,
    }),
    withAuthRedirect
)(Dialogs);
