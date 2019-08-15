import React from 'react'
import {connect} from 'react-redux'
import {ronData} from '../actions/actions'
import Ron from './Ron'
import Loader from 'react-loader-spinner'
import Image from '../images/image'

const RonList = props => {
    console.log('what', props)
    
    return (
        <div>
            <h1>Welcome to the Ron Swanson Page!</h1>
            <Image/>
            {props.RonQuote.map(quote => <Ron quote={quote}/>)}
            <button onClick={props.ronData}>
                {props.isLoading ? (
                    <Loader
                        type="Puff"
                        color="#00BFFF"
                         height='800'
                        width='800'
                    />): ('More Ron')}</button>
                
         
        </div>
    )
}

const mapStateToProps = state => {
    return {
        RonQuote: state.RonQuote,
        isLoading: state.isLoading
    }
}

export default connect(mapStateToProps, {ronData})(RonList)