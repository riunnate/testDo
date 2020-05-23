import React from 'react';
import { createAppContainer } from 'react-navigation';
import {
    StyleSheet,
    View,
    Text,
    Image,
    TextInput,
    TouchableOpacity,
} from 'react-native';

export default class main extends React.Component {
    componentWillMount() {
        this.setState({
            inputText: '',
            todos: [],
        })
    }
    addTodo() {
        let todoItem = {
            context: this.state.inputText,
            complete: false
        }
        let todos = this.state.todos
        todos.push(todoItem)
        this.setState({
            inputText: '',
            todos: todos,
        })
    }
    completeTodo(index) {
        let todos = this.state.todos
        todos[index].complete = !todos[index].complete
        this.setState({
            todos: todos,
        })
    }
    deleteTodo(index) {
        let todos = this.state.todos
        todos.splice(index, 1) // index번째 값부터 1개를 추출
        this.setState({
            todos: todos,
        })
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.addTodoContainer}>
                    <View style={{ width: 270, height: 70, borderWidth: 0.5, margin: 20 }}>
                        <TextInput
                            sytle={{ height: 70, borderColor: 'gray', borderWidth: 1 }}
                            onChangeText={(text) => {
                                this.setState({ inputText: text })
                            }}
                            value={this.state.inputText}
                        />
                    </View>
                    <View style={{ width: 120, height: 50, justifyContent: 'center', alignItems: 'center', borderWidth: 0.5 }}>
                        <TouchableOpacity onPress={this.addTodo.bind(this)}>
                            <Text>
                                add Todo
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.TodosContainer}>
                    <View style={{ flex: 2, borderWidth: 0.5 }}>
                        {
                            this.state.todos.map((todoItem, index) => {
                                return (
                                    <View key={index} style={{ height: 30, justifyContent: "flex-start", alignItems: 'flex-start' }}>
                                        <Text style={todoItem.complete ? { textDecorationLine: 'line-through' } : { textDecorationLine: 'none' }}>
                                            { todoItem.context }
                                        </Text>
                                    </View>
                                )
                            })
                        }
                    </View>
                    <View style={{ flex: 1, borderWidth: 0.5 }}>
                        {
                            this.state.todos.map((todoItem, index) => {
                                return (
                                    <View key={index} style={{ height: 30, flexDirection: 'row', justifyContent: "flex-start", alignItems: 'flex-start' }}>
                                        <TouchableOpacity onPress={this.completeTodo.bind(this, index)}>
                                            <Text>{todoItem.complete ? "   완료" : "   진행중"}</Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity onPress={this.deleteTodo.bind(this, index)}>
                                            <Text>       삭제  </Text>
                                        </TouchableOpacity>
                                    </View>
                                )
                            })
                        }
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    addTodoContainer: {
        height: 200,
        borderWidth: 0.5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    TodosContainer: {
        flex: 1,
        flexDirection: 'row',
        borderWidth: 0.5,
    },
    Todos: {
        height: 70,
    }
});