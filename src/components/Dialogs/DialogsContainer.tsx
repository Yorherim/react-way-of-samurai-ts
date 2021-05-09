import { connect } from "react-redux";
import { Dispatch } from "redux";

import { dialogsActions } from "../../redux/reducers/dialogs-reducer";
import Dialogs from "./Dialogs";
import { AppStateType } from "../../redux/redux-store";

type MapStateToPropsType = ReturnType<typeof mapStateToProps>;
type MapDispatchToPropsType = ReturnType<typeof mapDispatchToProps>;
export type DialogsPropsType = MapStateToPropsType & MapDispatchToPropsType;

const { updateNewMessageTextAC, addMessageAC } = dialogsActions;

const mapStateToProps = (state: AppStateType) => ({
    dialogsData: state.dialogsPage.dialogsData,
    messagesData: state.dialogsPage.messagesData,
    newMessageText: state.dialogsPage.newMessageText,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
    addMessage: () => {
        dispatch(addMessageAC());
    },
    updateNewMessageText: (messageText: string) => {
        dispatch(updateNewMessageTextAC(messageText));
    },
});

const DialogsContainer = connect<
    MapStateToPropsType,
    MapDispatchToPropsType,
    {},
    AppStateType
>(
    mapStateToProps,
    mapDispatchToProps
)(Dialogs);

export default DialogsContainer;
