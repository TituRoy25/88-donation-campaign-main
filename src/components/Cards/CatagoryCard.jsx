import { NavLink } from "react-router-dom";


const CatagoryCard = ({ card }) => {

    const { id, picture, title, category, card_bg_color, text_color } = card || {}

    return (
        <div>


            <NavLink to={`/cards/${id}`}>
                <div style={{ background: card_bg_color, color: text_color }} className=" h-[280px] relative flex max-w-[24rem] flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                    <div className="relative m-0 overflow-hidden rounded-none bg-transparent bg-clip-border text-gray-700 shadow-none">
                        <img className="w-[312px] h-[190px]"
                            src={picture}
                            alt="ui/ux review check"
                        />
                    </div>
                    <div className="p-2">
                        <h5 className="w-[75px] h[20px] text-center rounded" style={{ background: card_bg_color }}>{category}</h5>
                        <h4 className="block font-sans text-[18px] leading-snug tracking-normal text-blue-gray-900 antialiased">
                            {title}
                        </h4>
                        <p className="mt-2 block text-sm leading-relaxed text-gray-700 antialiased">

                        </p>
                    </div>
                    <div className="flex items-center justify-between p-2">

                    </div>
                </div>
            </NavLink>


        </div>
    );
};

export default CatagoryCard;