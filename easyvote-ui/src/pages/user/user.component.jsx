import React, { PureComponent } from 'react';

class User extends PureComponent {
    render() {
        const { details } = this.props;
        return (
            <div className='user'>
                I am a user, my name is { details.name }
            </div>
        )
    }
}

export default User;