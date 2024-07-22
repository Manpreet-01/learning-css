import imgMobile from '../images/image-product-mobile.jpg';
import imgDesktop from '../images/image-product-desktop.jpg';
import cartIcon from '../images/icon-cart.svg';

function Card() {

    const perfumeStyles = {
        letterSpacing: '5px'
    };

    return (
        <div className="montserrat flex flex-col md:flex-row mt-6 md:mt-0 overflow-hidden rounded-lg max-w-80 md:max-w-[600px] h-fit md:h-[450px]">
            <img src={imgMobile} alt="Product" className="block md:hidden" /> {/* Mobile Image */}
            <img src={imgDesktop} alt="Product" className="hidden md:block" /> {/* Desktop Image */}

            <div className='bg-white border px-6 pb-6 h-full flex flex-col gap-y-4 md:gap-y-6'>
                <span className='uppercase mt-6 md:mt-8 font-semibold text-xs text-gray-400' style={perfumeStyles}>Perfume</span>

                <h1 className='fraunces text-3xl md:max-w-48'>Gabrielle Essence Eau De Parfum</h1>
                <p className='text-gray-400 font-semibold text-[13px] leading-5'>A floral, solar and voluptuous interpretation composed by Olivier Polge, Perfumer-Creator for the House of CHANEL.</p>

                <div className="flex items-center gap-x-4">
                    <span className='text-[#3d8168] fraunces text-3xl font-extrabold'>$149.99</span>
                    <span className='text-xs text-gray-500 line-through'>$169.99</span>
                </div>

                <button className='bg-[#3d8168] hover:bg-[#1a4031] md:mt-1 rounded-xl text-white font-bold px-4 py-3 md:py-3.5 flex items-center justify-center gap-x-4 hover:scale-[102%]'>
                    <img src={cartIcon} alt="cart" />
                    <span className='text-sm'>Add to Cart</span>
                </button>
            </div>
        </div>
    );
}

export default Card;