

const DonationCard = ({ card }) => {
    const { picture, title, category, card_bg_color, text_color, price } = card || {}
    return (
        <div className="flex justify-center items-center">
            <div style={{ background: card_bg_color, color: text_color }} className="relative flex w-full max-w-[48rem] flex-row rounded bg-white bg-clip-border text-gray-700">
                <div className="relative m-0 w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700">
                    <img
                        src={picture}
                        alt="image"
                        className="h-full w-full object-cover"
                    />
                </div>
                <div className="p-6">
                    <h5 className="w-[75px] h[20px] text-center font-semibold rounded" style={{ background: card_bg_color }}>{category}</h5>
                    <h4 className="block font-sans text-2xl font-semibold text-black leading-snug tracking-normal text-blue-gray-900 antialiased">
                        {title}
                    </h4>
                    <h5 style={{ color: text_color }} className="text-white font-semibold rounded p-2">${price}</h5>
                    <button style={{ background: text_color }} className="text-white rounded p-2">View Details</button>

                </div>
            </div>
        </div>
    );
};

export default DonationCard;