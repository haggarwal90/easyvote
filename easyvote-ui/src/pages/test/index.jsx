import React from 'react';
import MyLabel from './components/mylabel';
import TestItem from './components/test-item';

const data = ["A", "B", "C"];

class Test extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            'selectedItem': "Selected None"
        }
        this.onItemSelect = this.onItemSelect.bind(this);
    }
    onItemSelect(value) {
        this.setState({
            'selectedItem': value,
        })
    }
    render() {
        return (
            <div className="test-page">
                <MyLabel data={this.state.selectedItem} />
                <div className="my-test-list">
                    {
                        data.map(ele => (
                            <TestItem 
                                data={ele}
                                onItemSelect={this.onItemSelect}
                            />
                        ))
                    }
                </div>
            </div>
        )
    }
}

export default Test;