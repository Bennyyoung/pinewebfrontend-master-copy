import React from 'react'
import "./MoreActions.css"

function MoreActions() {
    return (
        <div className="container">
            <div className="row  moreAction2 mx-auto">
                <div className="col bg-white moreAction">
                    <div className="px-3">
                    <p className="moreactionsItems mt-4 editDriver">Edit driver</p>
                    <p className="moreactionsItems deactivateDriver">Deactivate driver</p>
                    <p className="moreactionsItems deleteDriver">Delete driver</p>
                </div>
                </div>
            </div>
        </div>
    )
}

export default MoreActions
