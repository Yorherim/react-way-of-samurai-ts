import { connect } from "react-redux";

import { dialogsActions } from "../../redux/reducers/dialogs-reducer";
import Dialogs from "./Dialogs";
import { AppStateType } from "../../redux/redux-store";

type MapStateToPropsType = ReturnType<typeof mapStateToProps>;
type MapDispatchToPropsType = typeof mapDispatchToProps;
export type DialogsPropsType = MapStateToPropsType & MapDispatchToPropsType;

const { updateNewMessageText, addMessage } = dialogsActions;

const mapStateToProps = (state: AppStateType) => ({
    dialogsData: state.dialogsPage.dialogsData,
    messagesData: state.dialogsPage.messagesData,
    newMessageText: state.dialogsPage.newMessageText,
    isAuth: state.auth.isAuth,
});

const mapDispatchToProps = {
    addMessage,
    updateNewMessageText,
};

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
