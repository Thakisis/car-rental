import HeroRightClient from "./HeroRightClient"
import Widget from "../Widget"
function HeroRight(props) {
    return (
        <HeroRightClient>
            <h2 className="mt-0 mb-12 text-5xl font-bold tracking-tight md:text-6xl xl:text-7xl text-primary [text-shadow:_5px_5px_10px_rgb(0_0_0_/_90%)]">
                Tu mejor oferta en <br />
                <span className="text-[hsl(0,0%,100%)]">Vehiculos de alquiler</span>
            </h2>
        </HeroRightClient>
    )
}

export default HeroRight
