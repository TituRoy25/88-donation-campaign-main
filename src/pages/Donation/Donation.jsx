import { useEffect, useState } from "react";
import SingleCard from "../Card/SingleCard";
import DonationCard from "./DonationCard";


const Donation = () => {

    const [donation, setDonation] = useState([]);
    const [noFound, setNoFound] = useState(false);

    useEffect(()=>{
        const donationItems = JSON.parse(localStorage.getItem('donation'));
        
        if(donationItems){
            setDonation(donationItems);
        }
        else{
            setNoFound('No Data Found');
        }
    },[])

    console.log(donation);

    return (
        <div>
            {noFound? <p className="h-[80vh] flex justify-center items-center">{noFound}</p> 
            : 
            <div>
                
                <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-5">
                    {donation.map(card=> <DonationCard key={card.id} card={card}></DonationCard>)}
                </div>

            </div>}
        </div>
    );
};

export default Donation;