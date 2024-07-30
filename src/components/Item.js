const Item = ({ item, onClose }) => {
    if (!item) return null;

    const { name, category, price, description, imageId, ratings } = item.card.info;
    console.log(name)

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black text-primary bg-opacity-50 z-50">
            <div className="bg-tertiary p-6 rounded-lg shadow-lg lg:w-1/3 mx-auto relative w-10/12">
                <button
                    className="absolute top-0 right-0 m-4 px-2 rounded-md text-tertiary bg-primary"
                    onClick={onClose}
                >
                    X
                </button>
                <img className="h-1/6 w-10/12 my-1 rounded-md mx-auto" src={imageId} alt={name} />
                <h3 className="my-2 font-sans text-center font-bold">{name}</h3>
                <p className="text-center">
                    <span className="mx-2">Price: ₹{price / 100}</span> |
                    <span className="mx-2">Rating: {ratings?.aggregatedRating?.rating || 'N/A'}🌟</span>
                </p>
                <p className="my-2 text-pretty text-primary text-clip text-center">{description}</p>
                <div className="flex justify-center">
                    <button className="my-4 bg-primary text-tertiary px-4 py-2 rounded-md">Add to Cart 🛒</button>
                </div>
            </div>
        </div>

    );
};

export default Item;
