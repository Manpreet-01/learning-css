import img from '../assets/images/image-omelette.jpeg';

function Card() {
    return (
        <div
            className='bg-white w-full sm:w-[800px] sm:p-8 m-0 sm:m-16 sm:rounded-3xl'
        >

            <img
                className='sm:rounded-xl w-full sm:w-auto'
                src={img} alt="omelette image"
            />

            <h1
                className='my-9 ml-8 sm:ml-0  text-3xl font-thick_600 font-young-serif'
            >
                Simple Omelette Recipe
            </h1>

            <p className='ml-8 sm:ml-0 font-outfit text-gray-500 font-med_600'>
                An easy and quick dish, perfect for any meal. This classic omelette combines beaten eggs cooked
                to perfection, optionally filled with your choice of cheese, vegetables, or meats.
            </p>

            <section className='bg-rose-50 mx-8 sm:mx-0 my-8 p-6 rounded-xl'>
                <h2 className='mb-4 text-Rose_800 font-thick_700 text-lg'>
                    Preparation time
                </h2>

                <ul className='ml-6 space-y-2 text-md text-stone-700 list-disc list-inside'>
                    <li><b>Total</b>: Approximately 10 minutes</li>
                    <li><b>Preparation</b>: 5 minutes</li>
                    <li><b>Cooking</b>: 5 minutes</li>
                </ul>
            </section>

            <section className='mx-8 sm:mx-0'>
                <h2 className='text-2xl text-Brown_800 font-bold my-4'>
                    Ingredients
                </h2>

                <ul className='ml-6 list-inside list-disc space-y-2 text-stone-700'>
                    <li>2-3 large eggs</li>
                    <li>Salt, to taste</li>
                    <li>Pepper, to taste</li>
                    <li>1 tablespoon of butter or oil</li>
                    <li>Optional fillings: cheese, diced vegetables, cooked meats, herbs</li>
                </ul>
            </section>

            <hr className='my-8' />

            <section className='mx-8 sm:mx-0'>
                <h2 className='text-Brown_800 text-2xl font-bold my-4'>Instructions</h2>

                <ol className='ml-6 list-decimal list-outside text-stone-700 space-y-4'>
                    <li><b>Beat the eggs</b>: In a bowl, beat the eggs with a pinch of salt and pepper until they are well mixed. You can add a tablespoon of water or milk for a fluffier texture.</li>
                    <li><b>Heat the pan</b>: Place a non-stick frying pan over medium heat and add butter or oil.</li>
                    <li><b>Cook the omelette</b>: Once the butter is melted and bubbling, pour in the eggs. Tilt the pan to ensure the eggs evenly coat the surface.</li>
                    <li><b>Add fillings (optional)</b>: When the eggs begin to set at the edges but are still slightly runny in the middle, sprinkle your chosen fillings over one half of the omelette.</li>
                    <li><b>Fold and serve</b>: As the omelette continues to cook, carefully lift one edge and fold it over the fillings. Let it cook for another minute, then slide it onto a plate.</li>
                    <li><b>Enjoy</b>: Serve hot, with additional salt and pepper if needed.</li>
                </ol>
            </section>

            <hr className='my-8' />

            <section className='mx-8 sm:mx-0 mb-16 sm:mb-0'>
                <h2 className='text-Brown_800 text-2xl font-bold my-4'>Nutrition</h2>
                <p className='text-stone-700 text-sm'>The table below shows nutritional values per serving without the additional fillings.</p>


                <div className='m-6'>
                    <div className='grid grid-cols-2 border-b px-2 py-4 text-base'>
                        <span>Calories</span>
                        <span className='text-Brown_800 font-bold'>277kcal</span>
                    </div>
                    <div className='grid grid-cols-2 border-b px-2 py-4'>
                        <span>Carbs</span>
                        <span className='text-Brown_800 font-bold'>0g</span>
                    </div>

                    <div className='grid grid-cols-2 border-b px-2 py-4'>
                        <span>Protein</span>
                        <span className='text-Brown_800 font-bold'>20g</span>
                    </div>

                    <div className='grid grid-cols-2 px-2 py-4'>
                        <span>Fat</span>
                        <span className='text-Brown_800 font-bold'>22g</span>
                    </div>
                </div>
            </section>
        </div >
    );
}

export default Card;