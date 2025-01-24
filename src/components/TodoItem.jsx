import { Component } from 'react';
import PropTypes from 'prop-types';
import './TodoItem.css';

import { connect } from 'react-redux';
import { removeTodo, toggleTodo } from '@/actions';

class TodoItem extends Component {
    handleRemove = (id) => {
        this.props.removeTodo(id);
    }

    handleToggle = (todo) => {
        todo.checked = !todo.checked;
        //props 받아온 action 함수 호출
        this.props.toggleTodo(todo);
    }

    shouldComponentUpdate(nextProps, nextState) {
        return this.props.checked !== nextProps.checked;
    }

    render() {
        const { text, checked, id } = this.props;
        const { handleRemove, handleToggle } = this;

        return (
            <div className="todo-item" onClick={() => handleToggle({text, checked, id})}>
                <div className="remove" onClick={(e) => {
                    e.stopPropagation(); // onToggle 이 실행되지 않도록 함
                    handleRemove(id)
                }
                }>&times;</div>
                <div className={`todo-text ${checked && 'checked'}`}>
                    <div>{text}</div>
                </div>
                {
                    checked && (<div className="check-mark">✓</div>)
                }
            </div>
        );
    }
}
TodoItem.propTypes = {
    text: PropTypes.string,
    checked: PropTypes.bool,
    id: PropTypes.number,
    toggleTodo: PropTypes.func,
    removeTodo: PropTypes.func,    
};
export default connect(null, { removeTodo, toggleTodo })(TodoItem);