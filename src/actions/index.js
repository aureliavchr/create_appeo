function mapDispatchToProps(dispatch) {
    return {
     increment: () => dispatch({type: 'INCREMENT'}),
     decrement: () => dispatch({type: 'DECREMENT'})
    };
}