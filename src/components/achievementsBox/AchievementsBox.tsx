import React from 'react'

import './AchievementsBox.css'

const AchievementsBox = (props: any) => {
    const achievementsPath = props.achievements.map((achievement: any) => require('../../' + achievement.img))

    function displayAchievements(achievements: any, images: any) {
        return achievements.map((oneAchievement: any, index: number) => (
            <li className={'ListFixedWidth'} key={index}>
                <img className={'ListFixedWidth'} src={images[index]} alt={oneAchievement.mentlabel} />
                <h5 className={'AchievementsName'}>{oneAchievement.label}</h5>
            </li>
        ))
    }

    return (
        <div className={'AchievementsBox'}>
            <p className={'AchievementsBoxTitle'}>Achievements</p>
            <ul className={'AchievementsBoxList'}>{displayAchievements(props.achievements, achievementsPath)}</ul>
        </div>
    )
}

export default AchievementsBox
