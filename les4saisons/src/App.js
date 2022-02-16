import { lazy, Suspense } from "react";
import Modal from "./components/Modal";

//import NextSeason from "./components/NextSeason";
import Season from "./components/Season" ;
import data from "./data.json"

const NextSeason = lazy(() => import("./components/NextSeason"));

const currentSeason = data.seasons['winter'] ;

function App(){
    return (
        <div>
            <main>
                <div>
                    <Season name={currentSeason.name}/>
                </div>
                <div>
                    <Modal label={"Et après ?"}>
                        <Suspense fallback={<div>Loading...</div>}>
                            <NextSeason name={currentSeason.name}/>
                        </Suspense>
                    </Modal>
                </div>
            </main>
        </div>
    ) ;
}

export default App ;