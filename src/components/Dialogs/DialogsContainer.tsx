import { connect } from "react-redux";
import { Dispatch } from "redux";

import {
    addMessageAC,
    DialogType,
    MessageType,
    updateNewMessageTextAC,
} from "../../redux/reducers/dialogs-reducer";
import Dialogs from "./Dialogs";
import { AppStateType } from "../../redux/redux-store";

type MapStateToPropsType = {
    dialogsData: DialogType[];
    messagesData: MessageType[];
    newMessageText: string;
};
type MapDispatchToPropsType = {
    addMessage: () => void;
    updateNewMessageText: (messageText: string) => void;
};
export type DialogsPropsType = MapStateToPropsType & MapDispatchToPropsType;

const mapStateToProps = (state: AppStateType): MapStateToPropsType => ({
    dialogsData: state.dialogs.dialogsData,
    messagesData: state.dialogs.messagesData,
    newMessageText: state.dialogs.newMessageText,
});

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => ({
    addMessage: () => {
        dispatch(addMessageAC());
    },
    updateNewMessageText: (messageText: string) => {
        dispatch(updateNewMessageTextAC(messageText));
    },
});

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;
