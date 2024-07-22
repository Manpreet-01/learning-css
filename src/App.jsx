import Card from "./components/Card";


export default function App() {
  return (
    <div
      className="relative bg-[#19a1ad] w-screen h-screen flex justify-center items-center"
    >

      <div className="absolute top-0 -left-[100px] md:left-[0px] w-[400px] md:w-[600px] h-[400px] md:h-[500px] rotate-[175deg] md:rotate-[180deg] pattern-top"></div>

      <Card />

      <div className="absolute bottom-0 -right-[100px] md:right-0 w-[400px] md:w-[600px] h-[400px] pattern-bottom"></div>
      
    </div>
  );
}