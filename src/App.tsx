import React from 'react'

import './App.css'
import BasicInfoBox from './components/basicInfoBox/BasicInfoBox'
import BioBox from './components/bioBox/BioBox'
import ClassesInfoBox from './components/classesInfoBox/ClassesInfoBox'
import AchievementsBox from './components/achievementsBox/AchievementsBox'
import SkillsBox from './components/skillsBox/SkillsBox'
import InventoryBox from './components/inventoryBox/InventoryBox'
import GrowthMapBox from './components/growthMapBox/GrowthMapBox'

const character = {
    name: 'Darth Kitty',
    location: 'Hamburg',
    avatar: 'assets/profile.jpg',
    bio:
        'I am a strong fan of Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc id lobortis orci, a ullamcorper arcu. Ut ultrices libero rhoncus nibh molestie mattis. Phasellus tempus gravida nibh, vitae posuere massa aliquet sit amet. Mauris semper sit amet quam nec suscipit. Vivamus vitae est mauris. Nullam dapibus libero ac tortor mattis, quis molestie lorem convallis. Etiam dapibus, urna ut fringilla ornare, justo tellus cursus ipsum, et finibus quam risus eget sem. Suspendisse congue fermentum neque, eu scelerisque orci convallis sit amet. Vivamus sagittis vitae risus sit amet tincidunt.',
    classes: [
        { class: 'UX', rank: 'Neophyte' },
        { class: 'Backend', rank: 'Journeyman' },
        { class: 'Frontend', rank: 'Adept' },
    ],
    skilltree: [
        {
            category: 'UX',
            skills: [
                { name: 'Hotgloo', xp: '800' },
                { name: 'Figma', xp: '1800' },
            ],
        },
        {
            category: 'Frontend',
            skills: [
                { name: 'HTML', xp: '45600' },
                { name: 'CSS', xp: '23040' },
                { name: 'Less', xp: '3040' },
                { name: 'SCSS', xp: '300' },
            ],
        },
        {
            category: 'Frontend development',
            skills: [
                { name: 'JS', xp: '42200' },
                { name: 'Typescript', xp: '21000' },
                { name: 'React', xp: '19940' },
                { name: 'Angular', xp: '30' },
            ],
        },
    ],
    inventory: [
        {
            category: 'Hardware',
            items: ['LG Gram 17', 'iPhone 11', 'Oculus quest', 'NES'],
        },
        {
            category: 'Books',
            items: ['Programming in GO', 'Code complete'],
        },
    ],
    goals: [
        {
            category: 'Adventures',
            items: [
                'Climb mount Kilimandscharo once',
                'Go to the Maledives',
                'Live on a sailboat in the Mediterranean for two weeks',
            ],
        },
        {
            category: 'Health',
            items: ['Eat more veggies and meat, less sugar', 'Work out three times per week', 'Get to 8% bodyfat once'],
        },
        {
            category: 'Skills',
            items: ['Learn to speak spanish', 'Learn to play the piano', 'Get better at Figma'],
        },
        {
            category: 'Finances',
            items: ['Have a paid off house', 'Earn over 10k€ per month'],
        },
        {
            category: 'Relationships',
            items: ['Hold a family retrospective once a week', 'Spend each saturday with the family'],
        },
    ],
    achievements: [
        { img: 'assets/achievement1.png', label: 'Slayer of a thousand bugs' },
        { img: 'assets/achievement2.png', label: 'Attended 250+ standup meetings' },
        { img: 'assets/achievement3.png', label: '50 Retros' },
        { img: 'assets/achievement4.png', label: '100 Merge requests' },
    ],
}

function App() {
    const portraitpath = require('./' + character.avatar)

    return (
        <div className={'Container'}>
            <div className={'Row'}>
                <div className={'RowVertical'}>
                    <BasicInfoBox src={portraitpath} name={character.name} location={character.location} />
                    <BioBox bio={character.bio} />
                </div>
                <div className={'RowVertical2'}>
                    <ClassesInfoBox classes={character.classes} />
                </div>
            </div>
            <AchievementsBox achievements={character.achievements} />
            <div className={'Row3'}>
                <div className={'RowVertical'}>
                    <SkillsBox skilltree={character.skilltree} />
                </div>
                <div className={'RowVertical2'}>
                    <InventoryBox inventory={character.inventory} />
                </div>
            </div>
            <GrowthMapBox goals={character.goals} />
        </div>
    )
}

export default App
