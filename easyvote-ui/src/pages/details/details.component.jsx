import React, { PureComponent } from 'react';
import { connect}  from 'react-redux';

class Details extends PureComponent {
    componentDidMount() {
        const { id } = this.props.matches.params;
        this.props.fetchUserById(id);
    }
    render() {
        const { details } = this.props;
        return (
            <div className='details'>
                User detail for { details.name }
            </div>
        )
    }
}

const mapStateToProps = state => ({
    'details': state.users.toJS().details,
})

const mapDispatchToProps = dispatch => ({
    'fetchUserById': (id) => dispatch(fetchUsers(id)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Details);