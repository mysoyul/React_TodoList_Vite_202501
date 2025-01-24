import axios from 'axios';

//Action type 정의
export const FETCH_TODOS = "FETCH_TODOS";

const apiUrl = import.meta.env.VITE_API_URL;
//'http://localhost:4500/api/todos';

//Todo 목록 Action 함수
export const fetchAllTodos = () => {
    return (dispatch) => {
        axios.get(apiUrl)
            .then(res => dispatch({
                type: FETCH_TODOS,
                payload: res.data
            }))
            .catch(error => {
                console.log(error);
                throw error;
            });            
    }
}; //fetchAllTodos