import React from 'react'

import './BasicInfoBox.css'

const BasicInfoBox = (props: any) => (
    <div className={'BasicInfoBox'}>
        <img src={props.src} alt="Darth Kitty" className={'CharacterAvatar'} />
        <div className={'MarginLeft5'}>
            <p className={'BasicInfoBoxText'}>{props.name}</p>
            <p className={'BasicInfoBoxText'}>City: {props.location}</p>
        </div>
    </div>
)

export default BasicInfoBox
