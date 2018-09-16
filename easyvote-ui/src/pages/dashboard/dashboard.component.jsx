import React, { PureComponent } from 'react';
import { connect}  from 'react-redux';

import User from 'pages/user';
import { fetchUsers } from 'models/actions/users/users.action';

class Dashboard extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            users: [],
        }
    }
    componentDidMount() {
        this.props.fetchUsers();
    }
    render() {
        const { users } = this.state;
        console.log('users ', users);
        return (
            <div className='dashboard'>
              Welcome to EasyVote !!
                {
                    users.map(user => <User details={user} />)
                }
            </div>
        )
    }
}

const mapStateToProps = store => ({
    'users': state.users,
})

const mapDispatchToProps = dispatch => ({
    'fetchUsers': () => dispatch(fetchUsers()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);