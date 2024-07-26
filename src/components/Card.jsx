import star from '../images/icon-star.svg';
import anneImg from '../images/image-anne.jpg';
import coltonImg from '../images/image-colton.jpg';
import ireneImg from '../images/image-irene.jpg';

function Stars({ text, className }) {
    return (
        <div className={`flex w-[380px] px-6 py-4 flex-col md:flex-row md:gap-4 items-center gap-y-2 bg-[#f7f2f8] ${className}`}>
            <div className='flex gap-x-2'>
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
            </div>
            <p className='text-sm md:text-xs font-bold text-violet-900'>{text}</p>
        </div>
    );
}


function SubCards({ img, name, para, className }) {
    return (
        <div className={`p-8 rounded-md bg-[#511f50] ${className}`}>
            <div className='flex items-center gap-x-6'>
                <img className='w-12 rounded-full aspect-square' src={img} alt="profile-pic" />
                <div className='flex flex-col text-sm font-bold'>
                    <span className='text-white'>{name}</span>
                    <span className='text-[#c978ad]'>Verified Buyer</span>
                </div>
            </div>
            <p className='leading-5 my-4 pr-4 md:pr-0 text-gray-200 font-semibold text-xs'>{para}</p>
        </div>
    );

}

function Card() {
    return (
        <div className='m-8 md:mx-12 w-full font-poppins'>
            <div className='mb-4 md:mb-8 flex w-full flex-col md:flex-row md:justify-around'>
                <div className='flex flex-col items-center md:items-start md:w-[30%] text-center'>
                    <h1 className="w-[280px] md:w-[400px] my-6 md:pr-24 text-center md:text-left text-3xl md:text-4xl font-extrabold text-[#522352]">10,000+ of our users love our products.</h1>
                    <p className="w-[320px] md:w-[440px] md:text-left font-semibold text-sm my-4 md:my-2 text-[#948693]">We only provide great products combined with excellent customer service. See what our satisfied customers are saying about our services.</p>
                </div>

                <div className='mt-8 md:mt-0 mb-10 md:w-[500px] flex flex-col items-center justify-center space-y-4'>
                    <Stars className="md:ml-0" text="Rated 5 Stars in Reviews" />
                    <Stars className="md:ml-8" text="Rated 5 Stars in Report Guru" />
                    <Stars className="md:ml-16" text="Rated 5 Stars in BestTech" />
                </div>
            </div>

            <div className='px-6 md:pl-24 md:pr-32 flex flex-col gap-6 md:flex-row md:items-start'>
                <SubCards
                    name="Colton Smith"
                    img={coltonImg}
                    para='"We needed the same printed design as the one we had ordered a week prior. Not only did they find the original order, but we also received it in time. Excellent!"'
                    className='md:mt-0'
                />
                <SubCards
                    name="Irene Roberts"
                    img={ireneImg}
                    para='"Customer service is always excellent and very quick turn around. Completely delighted with the simplicity of the purchase and the speed of delivery."'
                    className='md:mt-4'
                />
                <SubCards
                    name="Anne Wallace"
                    img={anneImg}
                    para='"Put an order with this company and can only praise them for the very high standard. Will definitely use them again and recommend them to everyone!"'
                    className='md:mt-8'
                />
            </div>
        </div>
    );
}

export default Card;