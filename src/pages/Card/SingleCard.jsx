import swal from 'sweetalert';

const SingleCard = ({ card }) => {

    const { id, picture, title, text_color, price, description } = card || {}

    const handleAddToDonation = () => {

        const addedDonationArray = [];
        const donationItems = JSON.parse(localStorage.getItem('donation'));

        if (!donationItems) {
            addedDonationArray.push(card);
            localStorage.setItem('donation', JSON.stringify(addedDonationArray));
            swal("Successfully Donated!", "You clicked the button!", "success");
        }
        else {
            const isExits = donationItems.find(card => card.id == id)

            if (!isExits) {
                addedDonationArray.push(...donationItems, card);
                localStorage.setItem('donation', JSON.stringify(addedDonationArray));
                swal("Successfully Donated!", "You clicked the button!", "success");
            }
            else {
                swal("Already Donated!", "You clicked the button!", "error");
            }


        }

    }

    return (

        <div>
            <div className="  ">
                <div className="relative m-0    bg-transparent bg-clip-border text-gray-700 shadow-none">
                    <div className="">
                        <img
                            className=" w-[1320px] h-[700px]"
                            src={picture}
                            alt="ui/ux review check"
                        />
                    </div>
                    <div className=" absolute inset-x-0 bottom-0 h-24 p-6 bg-[#0B0B0B80]">
                        <button
                            onClick={handleAddToDonation}
                            style={{ background: text_color }}
                            className=" p-3 top-8 text-white rounded"
                        >
                            Donate ${price}
                        </button>
                    </div>
                </div>
                <div className="mt-10">
                    <h4 className="block font-sans text-2xl font-semibold text-black leading-snug tracking-normal text-blue-gray-900 antialiased">
                        {title}
                    </h4>
                    <p className="mt-3 block font-sans text-sm font-normal leading-relaxed text-gray-700 antialiased">
                        {description}
                    </p>
                </div>
            </div>
        </div>

    );
};

export default SingleCard;