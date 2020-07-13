import React from 'react'

import './BioBox.css'

const BioBox = (props: any) => (
    <div className={'BioBox'}>
        <p className={'BioBoxTitle'}>Bio</p>
        <p className={'BioBoxText'}>{props.bio}</p>
    </div>
)

export default BioBox
