import { Component } from 'react';
import PropTypes from 'prop-types';
import TodoItem from './TodoItem';

import { connect } from 'react-redux'
//import { fetchAllTodos } from '@/actions'
import { fetchAllTodos } from '@/reducers/todoSlice'

class TodoItemList extends Component {
    componentDidMount() {
        this.props.fetchAllTodos();
    }
    /*
        true 리턴(todos 내용이 변경됨)하면 렌더링을 다시 하고,
        false 리턴(todos 내용이 변경되지 않음) 하면 렌더링을 생략한다.
    */
    shouldComponentUpdate(nextProps, nextState) {
        return this.props.myTodos !== nextProps.myTodos;
    }

    render() {
        const { myTodos } = this.props;
        const todoList = myTodos.map(
            ({ id, text, checked }) => (
                <TodoItem
                    id={id}
                    text={text}
                    checked={checked}
                    key={id}
                />
            )
        );

        return (
            <div>
                {todoList}
            </div>
        );
    }
}
TodoItemList.propTypes = {
    myTodos: PropTypes.array,
    fetchAllTodos: PropTypes.func
};
export default connect(
    (state) => ({ myTodos:state.todos }),
    { fetchAllTodos }
)(TodoItemList);