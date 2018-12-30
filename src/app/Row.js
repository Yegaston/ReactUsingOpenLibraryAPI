import React, {Component} from 'React';

class Row extends Component{
    render(){
        return(
            <tr>
                <td>
                    {this.props.change.when}
                    {this.props.change.who}
                    {this.props.change.description}
                </td>
            </tr>
        )
    }
}

export default Row