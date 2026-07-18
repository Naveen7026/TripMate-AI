import Navbar from "../components/Navbar";
import FlightCard from "../components/FlightCard";
import WeatherCard from "../components/WeatherCard";
import StressScore from "../components/StressScore";
import RecoveryCard from "../components/RecoveryCard";
import SummaryCard from "../components/SummaryCard";
import ChatAssistant from "../components/ChatAssistant";


function Home() {

  return (

    <div className="min-h-screen bg-gray-100">

      <Navbar />


      <div className="p-8">

        <h1 className="text-4xl font-bold">
          TripMate AI ✈️
        </h1>

        <p className="text-gray-600 mt-2">
          Your Intelligent Enterprise Travel Co-Pilot
        </p>


        {/* Dashboard Cards */}

        <div className="grid md:grid-cols-3 gap-6 mt-8">

          <FlightCard />

          <WeatherCard />

          <StressScore />

          <RecoveryCard />

          <SummaryCard />

        </div>


        {/* AI Chat Section */}

        <ChatAssistant />


      </div>


    </div>

  )

}

export default Home;