import React from 'react'
import "./MoreActionsTrips.css"

function MoreActionsTrips() {
    return (
        <div className="container">
            <div className="row  moreAction2 mx-auto">
                <div className="col bg-white moreAction">
                    <div className="px-3">
                    <p className="moreactionsItems mt-4 ">Veiw trips</p>
                    <p className="moreactionsItems ">Reassign Trips</p>
                    <p className="moreactionsItems deleteDriver">Cancel trip</p>
                </div>
                </div>
            </div>
        </div>
    )
}

export default MoreActionsTrips
