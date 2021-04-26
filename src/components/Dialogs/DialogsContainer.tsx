import { connect } from "react-redux";
import { Dispatch } from "redux";

import {
    addMessageAC,
    DialogsPageType,
    updateNewMessageTextAC,
} from "../../redux/reducers/dialogs-reducer";
import Dialogs from "./Dialogs";
import { AppStateType } from "../../redux/redux-store";

type MapStateToPropsType = {
    dialogs: DialogsPageType;
};
type MapDispatchToPropsType = {
    addMessage: () => void;
    updateNewMessageText: (messageText: string) => void;
};
export type DialogsPropsType = MapStateToPropsType & MapDispatchToPropsType;

const mapStateToProps = (state: AppStateType): MapStateToPropsType => ({
    dialogs: state.dialogs,
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
