import Card from "./components/Card";

import bgTopMob from './images/bg-pattern-top-desktop.svg';
import bgBottomMob from './images/bg-pattern-bottom-mobile.svg';

import bgTopDesktop from './images/bg-pattern-top-desktop.svg';
import bgBottomDesktop from './images/bg-pattern-bottom-desktop.svg';


export default function App() {
  return (
    <div
      className="relative w-screen min-h-screen flex justify-center items-center"
    >
      <img className="block md:hidden absolute top-0 left-0" src={bgTopMob} alt="pattern" />
      <img className="hidden md:block absolute top-0 left-0" src={bgTopDesktop} alt="pattern" />
      
      <Card />

      <img className='block md:hidden absolute bottom-0 right-0' src={bgBottomMob} alt="pattern" />
      <img className="hidden md:block absolute bottom-0 right-0" src={bgBottomDesktop} alt="pattern" />

    </div>
  );
}