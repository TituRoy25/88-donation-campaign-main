import CatagoryCard from "./CatagoryCard";


const Cards = ({cards}) => {
    console.log(cards);
    return (
        <div>
            <h1>Cards....</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 py-5">
                {
                    cards?.map(card =><CatagoryCard key={card.id} card={card}></CatagoryCard> )
                }
            </div>
        </div>
    );
};

export default Cards;