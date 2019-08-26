import ReduxCounter from './ReduxCounter'
import { connect} from 'react-redux';

const mapStateToProps = state => {
    return {
        count: state
    }
};
const mapDispatchToProps = dispatch => {
    return {
        increment: () => dispatch({type: 'INCREMENT'}),
        decrement: () => dispatch({type: 'DECREMENT'})
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ReduxCounter);