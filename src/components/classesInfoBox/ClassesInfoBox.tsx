import React from 'react'

import './ClassesInfoBox.css'

const ClassesInfoBox = (props: any) => {
    function displayClasses(classes: any) {
        return classes.map((oneClass: any, index: number) => (
            <li key={index}>
                {oneClass.rank} {oneClass.class}
            </li>
        ))
    }

    return (
        <div className={'ClassesInfoBox'}>
            <p className={'ClassesInfoBoxTitle'}>Classes</p>
            <ul className={'ClassesInfoBoxList'}>{displayClasses(props.classes)}</ul>
        </div>
    )
}

export default ClassesInfoBox
