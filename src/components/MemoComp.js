import React from 'react'

function MemoComp({name}) {
    console.log('Memo Comp')
    return (
        <div>
            Memo Component: {name}
        </div>
    )
}

// Higher Order Component
export default React.memo(MemoComp)
