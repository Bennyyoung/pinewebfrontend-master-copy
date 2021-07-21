import "./Profile.css";

function Profile() {
    return (
        // <div class="container">
        //     <div className="row bg-white mt-3 profileR">
        //         <div classsName="col">
        //             <div className="profilez px-3 mt-3">
        //         <div classsName="profileItem">
        //             <p className="profile">Jeremiah Righteous</p>
        //             <p className="profile">Owner</p>
        //             <hr></hr>
        //         </div>
        //         <div>
        //             <p className="profile2">My account</p>
        //             <p className="profile2">Settings</p>
        //             <hr></hr>
        //         </div>
        //         <div>
        //             <p className="profile3">Logout</p>
        //         </div>
        //         </div>
        //         </div>
        //     </div>
        // </div>
        <div className="container">
        <div className="row  moreAction2 mx-auto">
            <div className="col bg-white moreAction">
                <div className="px-1">
                <p className="moreactionsItems mt-4 editDriver">Jeremiah Righteous</p>
                <p className="owner">Owner</p>
                <hr className="ownline"></hr>
                <p className="moreactionsItems ">My account</p>
                <p className="moreactionsItems ">Settings</p>
                <hr className="ownline"></hr>
                <p className="moreactionsItems deleteDriver">Logout</p>
            </div>
            </div>
        </div>
    </div>
    )
}

export default Profile;
