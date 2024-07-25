import iconLuxury from '../images/icon-luxury.svg';
import iconSedans from '../images/icon-sedans.svg';
import iconSuvs from '../images/icon-suvs.svg';

function CardItem({ icon, title, para, color, bgClass, btnClass }) {
    return (
        <div className={`w-fit p-10 md:pt-8 md:max-w-[250px] ${bgClass}`}>
            <img src={icon} alt='icon' />
            <h1 className='font-big-shoulders-display font-bold text-3xl my-8 uppercase'>{title}</h1>
            <p className='text-xs text-[#c9c8c8] leading-5'>{para}</p>
            <button className={`mt-8 md:mt-16 py-2 px-6 text-sm bg-white hover:bg-transparent hover:outline-2 hover:outline hover:text-white ${btnClass} rounded-3xl`}>Learn More</button>
        </div>
    );
}

function Card() {
    const para1 = "Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip.";
    const para2 = "Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures.";
    const para3 = "Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style.";

    return (
        <div
            className="m-8 font-lexend-deca flex flex-col md:flex-row rounded-md overflow-hidden text-white"
        >
            <CardItem
                title='Sedans'
                para={para1}
                icon={iconSedans}
                bgClass='bg-[#e28525]'
                btnClass="text-[#e28525]"
            />
            <CardItem
                title='Suvs'
                para={para2}
                icon={iconSuvs}
                bgClass='bg-[#016972]'
                btnClass="text-[#016972]"
            />
            <CardItem
                title="Luxury"
                para={para3}
                icon={iconLuxury}
                bgClass='bg-[#00403f]'
                btnClass="text-[#00403f]"
            />
        </div>
    );
}

export default Card;