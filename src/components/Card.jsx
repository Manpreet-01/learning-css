import supervisorIcon from '../images/icon-supervisor.svg';
import calculatorIcon from '../images/icon-calculator.svg';
import karmaIcon from '../images/icon-karma.svg';
import teamBuilderIcon from '../images/icon-team-builder.svg';


function MiniCard({ title, para, icon, className }) {
    return (
        <div className={`space-y-4 md:space-y-3 md:w-[300px] p-8 md:pr-4 md:pb-2 border-t-4 rounded-xl shadow-2xl ${className}`}>
            <h2 className='text-2xl md:text-sm font-semibold'>{title}</h2>
            <p className='text-gray-500 md:text-xs pr-20 md:pr-4'>{para}</p>
            <div className='flex justify-end pr-4 pt-8 md:py-4'>
                <img src={icon} alt="icon" className='h-20 md:h-12' />
            </div>
        </div>
    );
}

function Card() {
    return (
        <div className="pt-20 md:pt-8 px-8 md:px-0 font-poppins md:flex md:flex-col md:items-center">
            <h1 className="text-2xl space-y-2 my-6 md:m-4">
                <span className="block text-gray-500">Reliable, efficient delivery</span>
                <span className="font-bold">Powered by Technology</span>
            </h1>

            <p className="md:text-center md:w-[700px] text-xl md:text-sm text-gray-500">Our Artificial Intelligence powered tools use millions of project data points to ensure that your project is successful</p>

            <div className='mt-36 md:mt-0 pb-16 space-y-8 md:flex md:items-center md:gap-8'>
                <MiniCard className={"border-t-sky-500"} title={"Supervisor"} para={"Monitors activity to identify project roadblocks"} icon={supervisorIcon} />
                <div className='space-y-4'>
                    <MiniCard className={"border-t-red-500"} title={"Team Builder"} para={"Scans our talent network to create the optimal team for your project"} icon={teamBuilderIcon} />
                    <MiniCard className={"border-t-yellow-500"} title={"Karma"} para={"Regularly evaluates our talent to ensure quality"} icon={karmaIcon} />
                </div>
                <MiniCard className={"border-t-sky-500"} title={"Calculator"} para={"Uses data from past projects to provide better delivery estimates"} icon={calculatorIcon} />
            </div>
        </div>
    );
}

export default Card;