function mapDispatchToProps(dispatch) {
    return {
     increment: () => dispatch({type: 'INCREMENT'}),
     decrement: () => dispatch({type: 'DECREMENT'})
    };
}

// export const addTodo = text => ({
//   type: 'ADD_TODO',
//   id: nextTodoId++,
//   text
// })