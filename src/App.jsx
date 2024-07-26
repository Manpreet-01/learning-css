import Card from "./components/Card";
import logo from './images/logo.svg';
import bgMobile from './images/bg-mobile.svg'
import bgPc from './images/bg-desktop.svg'

export default function App() {
  return (
    <div
      className="relative w-screen h-screen z-[0] overflow-x-hidden"
      style={{ backgroundColor: 'hsl(257, 40%, 49%)' }}
    >      
      <img className="-z-[1] block md:hidden absolute inset-0 w-full h-full" src={bgMobile} alt="background-image" />
      <img className="-z-[1] hidden md:block absolute inset-0 w-full h-full" src={bgPc} alt="background-image" />

      <img className='p-8 h-[105px]' src={logo} alt="logo" />

      <Card />
    </div>
  );
}