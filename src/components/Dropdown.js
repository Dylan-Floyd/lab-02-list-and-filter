import React, { Component } from 'react'

export default class Dropdown extends Component {
    render() {
        return (
            <select onChange={this.props.changeHandler}>
                <option value="">Any</option>
                {this.props.optionList.map(optionEntry => <option value={optionEntry} key={optionEntry}>{optionEntry}</option>)}
            </select>
        )
    }
}
