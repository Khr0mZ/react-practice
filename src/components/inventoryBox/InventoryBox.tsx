import React from 'react'

import './InventoryBox.css'

const InventoryBox = (props: any) => {
    function displayItems(inventory: any) {
        return inventory.map((oneItem: any, index: number) => <li key={index}>{oneItem}</li>)
    }

    function displayEntries(inventoryEntries: any) {
        return inventoryEntries.map((oneEntry: any, index: number) => {
            return (
                <div key={index}>
                    <h5 className={'LowMargin'}>{oneEntry.category}</h5>
                    <ul className={'InventoryBoxList'}>{displayItems(oneEntry.items)}</ul>
                </div>
            )
        })
    }

    return (
        <div className={'InventoryBox'}>
            <p className={'InventoryBoxTitle'}>Inventory</p>
            {displayEntries(props.inventory)}
        </div>
    )
}

export default InventoryBox
