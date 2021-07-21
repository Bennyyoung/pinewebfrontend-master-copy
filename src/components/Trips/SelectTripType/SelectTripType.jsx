import React from 'react'
import "./SelectTripType.css"

function SelectTripType() {
    return (
        <div className="container">
        <div className="row selecttrip mx-auto">
            <div className="col bg-white selecttrip2">
                <div className="px-3">
                <p className="moreactionsItems mt-3 Select">Select trip type</p>
                <p className="moreactionsItems mt-4">All trips</p>
                <i class="fas fa-check text-warning Atrips"></i>
                <p className="moreactionsItems">Queued trips</p>
                <p className="moreactionsItems">Ongoing trips</p>
                <p className="moreactionsItems">Delivered trips</p>
            </div>
            </div>
        </div>
    </div>
    )
}

export default SelectTripType
