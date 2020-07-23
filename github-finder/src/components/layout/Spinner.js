import React,{Fragment} from 'react'
import loading from './spinner.gif'

const Spinner = () => {
    return (
        <Fragment>
            <img src={loading} alt="Loading..." style={{display:'block', margin:'auto', width:'200px'}}></img>
        </Fragment>
    )
}

export default Spinner

