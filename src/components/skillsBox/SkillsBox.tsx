import React from 'react'

import './SkillsBox.css'

const SkillsBox = (props: any) => {
    function displaySkills(skills: any) {
        return skills.map((oneSkill: any, index: number) => (
            <li key={index}>
                {oneSkill.name}: {oneSkill.xp} XP
            </li>
        ))
    }

    function displayEntries(skilltreeEntries: any) {
        return skilltreeEntries.map((oneEntry: any, index: number) => {
            const totalXP = oneEntry.skills.reduce((a: number, b: any) => a + Number(b.xp), 0)
            return (
                <div key={index}>
                    <h5 className={'LowMargin'}>
                        {oneEntry.category} - {totalXP} XP
                    </h5>
                    <ul className={'SkillsBoxList'}>{displaySkills(oneEntry.skills)}</ul>
                </div>
            )
        })
    }

    return (
        <div className={'SkillsBox'}>
            <p className={'SkillsBoxTitle'}>Skills</p>
            {displayEntries(props.skilltree)}
        </div>
    )
}
export default SkillsBox
