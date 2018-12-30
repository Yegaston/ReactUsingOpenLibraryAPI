import React, {Component} from 'react';

import Heading from './Heading';
import Row from './Row'

class App extends Component {
    render (){
        console.log(this.props.data)
        return(
            <div className="container p-4">
                <h1>{this.props.title}</h1>
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            {
                                this.props.headings.map((heading, i) => {
                                    return <Heading key={i} heading={heading} />
                                })
                            }
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.props.data.map((row, i) => {
                                return <Row key={i} change={row} />
                            })
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}

export default App;