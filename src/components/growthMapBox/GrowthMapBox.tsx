import React from 'react'

import './GrowthMapBox.css'

const GrowthMapBox = (props: any) => {
    function displayItems(goals: any) {
        return goals.map((oneItem: any, index: number) => <li key={index}>{oneItem}</li>)
    }

    function displayEntries(goalsEntries: any) {
        return goalsEntries.map((oneEntry: any, index: number) => {
            return (
                <div className={'NumPerRow'} key={index}>
                    <h5 className={'LowMargin'}>{oneEntry.category}</h5>
                    <ul className={'GrowthMapBoxList'}>{displayItems(oneEntry.items)}</ul>
                </div>
            )
        })
    }

    return (
        <div className={'GrowthMapBox'}>
            <p className={'GrowthMapBoxTitle'}>Growth Map</p>
            <div className={'ListAlign'}>{displayEntries(props.goals)}</div>
        </div>
    )
}

export default GrowthMapBox
