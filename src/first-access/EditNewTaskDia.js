import React from 'react';
import { View, Text } from 'react-native';
import Dialog from "react-native-dialog";

export default class EditNewTaskDia extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dialogVisible: this.props.dialogVisible,
            handleCancel: this.props.handleCancel,
            handleDelete: this.props.handleDelete,
        };
    }

    handleCancel = () => {
        this.state.handleCancel()
        this.setState({ dialogVisible: false });
    }
    handleDelete = () => {
        this.state.handleDelete()
        this.setState({ dialogVisible: false });
    }

    render() {
        return (<Dialog.Container visible={this.state.dialogVisible}>
            <Dialog.Title>Novo</Dialog.Title>
            <Dialog.Description>
                Test
            </Dialog.Description>
            <Dialog.Button label="Cancelar" onPress={this.handleCancel} />
            <Dialog.Button label="Novo" onPress={this.handleDelete} />
        </Dialog.Container>)
    }
}