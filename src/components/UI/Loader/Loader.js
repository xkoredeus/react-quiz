import React from 'react'
import classes from './Loader.module.scss'
const Loader = props => (
    <div className={classes['Loader__wrp']}>
        <div className={classes['Loader']}>
            <div /><div /><div /><div /><div /><div /><div /><div />
        </div>
    </div>
)

export default Loader