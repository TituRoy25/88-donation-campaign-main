import swal from 'sweetalert';

const SingleCard = ({card}) => {

    const { id, picture, title, text_color, price, description } = card || {}

    const handleAddToDonation = ()=>{
        
        const addedDonationArray = [];
        const donationItems = JSON.parse(localStorage.getItem('donation'))
        if (donationItems){
            addedDonationArray.push(card)
            localStorage.setItem('donation',JSON.stringify(addedDonationArray))
            swal("Successfully Donated!", "You clicked the button!", "success");
        }
        else{
            addedDonationArray.push(...donationItems,card)
            localStorage.setItem('donation',JSON.stringify(addedDonationArray))
            swal("Successfully Donated!", "You clicked the button!", "success");
        }

    }

    return (
        <div>
            <div className="relative flex max-w-[24rem] flex-col  bg-white bg-clip-border text-gray-700 ">
                <div className="relative m-0 overflow-hidden  bg-transparent bg-clip-border text-gray-700 shadow-none">
                    <img
                        src={picture}
                        alt="ui/ux review check"
                    />
                    <button onClick={handleAddToDonation} style={{ background: text_color }} className="text-white rounded p-2">Donate ${price}</button>
                </div>
                <div className="">
                    <h4 className="block font-sans text-2xl font-semibold text-black leading-snug tracking-normal text-blue-gray-900 antialiased">
                        {title}
                    </h4>
                    <p className="mt-3 block font-sans text-sm font-normal leading-relaxed text-gray-700 antialiased">
                        {description}
                    </p>
                </div>
                <div className="flex items-center justify-between">

                </div>
            </div>
        </div>
    );
};

export default SingleCard;