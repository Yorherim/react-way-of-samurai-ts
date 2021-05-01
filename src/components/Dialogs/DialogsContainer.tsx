import { connect } from "react-redux";
import { Dispatch } from "redux";

import {
    addMessageAC,
    updateNewMessageTextAC,
} from "../../redux/reducers/dialogs-reducer";
import Dialogs from "./Dialogs";
import { AppStateType } from "../../redux/redux-store";

type MapStateToPropsType = ReturnType<typeof mapStateToProps>;
type MapDispatchToPropsType = ReturnType<typeof mapDispatchToProps>;
export type DialogsPropsType = MapStateToPropsType & MapDispatchToPropsType;

const mapStateToProps = (state: AppStateType) => ({
    dialogsData: state.dialogs.dialogsData,
    messagesData: state.dialogs.messagesData,
    newMessageText: state.dialogs.newMessageText,
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
