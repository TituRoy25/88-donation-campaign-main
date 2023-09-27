import { useEffect, useState } from "react";
import DonationCard from "./DonationCard";


const Donation = () => {

    const [donation, setDonation] = useState([]);
    const [noFound, setNoFound] = useState(false);
    const [isShow, setIsShow] = useState(false);

    useEffect(() => {
        const donationItems = JSON.parse(localStorage.getItem('donation'));

        if (donationItems) {
            setDonation(donationItems);
        }
        else {
            setNoFound('No Data Found');
        }
    }, [])

    // console.log(donation);
    // const handleRemove = ()=>{
    //     // localStorage.clear();
    //     // setDonation([]);
    //     // setNoFound('No Data Found');
    // }

    return (
        <div>
            {noFound ? (<p className="h-[80vh] flex justify-center items-center">{noFound}</p>)
                : 
                (<div>
                    {/* {donation.length > 0 && <button onClick={handleRemove()} className="px-2 mb-5 rounded text-white font-semibold bg-[#ed3131] mx-auto justify-center items-center">Deleted All</button>} */}

                    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5">
                        {
                            isShow ? donation.map((card) => (<DonationCard key={card.id} card={card}></DonationCard>))
                                : donation.slice(0, 4).map((card) => (<DonationCard key={card.id} card={card}></DonationCard>))
                        }
                    </div>
                        {
                            donation.length > 4 && <button onClick={() => setIsShow(!isShow)} className="px-2 mt-2 text-white font-semibold bg-[#009444] block mx-auto rounded">{isShow ? "" : "See All"}</button>
                        }
                    
                </div>)}
        </div>
    );
};

export default Donation;