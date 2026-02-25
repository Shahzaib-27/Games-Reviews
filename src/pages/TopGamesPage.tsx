
import { Game, gamesData } from "@/data/gamesData";

import Navbar from "@/components/Navbar";
import GameFooter from "@/components/GameFooter";
import TopRatedGames from "@/components/TopRatedGames";


const ReviewsPage = () => {
return (
<>
        <Navbar/>
    <div  className="min-h-screen text-foreground bg-gradient-to-b from-background/70 via-background/50 to-background bg-blue-950 flex ">
    <div className="mt-10 p-2 overflow-hidden"
     onClick={() => {window.scrollTo({ top: 0, behavior: "smooth" })}} >
        <TopRatedGames games={gamesData} />
    </div>
    </div>
        <GameFooter/>
</>    
)
}

export default ReviewsPage
