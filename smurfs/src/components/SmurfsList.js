import React from 'react';
import { connect } from 'react-redux';

import { getSmurfs } from '../actions';

const SmurfsList = props => {
    const fetchSmurfs = e => {
        e.preventDefault();
        props.getSmurfs();
    }

    return (
        <>
            <h1>Your Smurfs!</h1>
            <div>
                {props.smurfs.map(smurf => {
                    return (
                        <span>
                            <h3>{smurf.name}</h3>
                            <p>Age: {smurf.age}</p>
                            <p>Height: {smurf.height}</p>
                        </span>
                    )
                })}
                <button onClick={fetchSmurfs}>Fetch Smurfs</button>
            </div>
        </>
    )
}

const mapStateToProps = state => ({
    smurfs: state.smurfs,
    error: state.error
})

export default connect(mapStateToProps, { getSmurfs })(SmurfsList);