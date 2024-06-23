import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import Toggles from "./Toggles"
import LinkSearch from "./LinkSearch"
import MarcasInput from "./MarcasInput"
import DateButton from "./DatePicker/DateButton"
import CityPicker from "@/components/Citypicker"
const Widget = () => {
    return (
        <Card className="w-full">
            <CardHeader>
                <CardTitle>Alquilar Vehiculo</CardTitle>
                <Separator className="bg-zinc-800 m"></Separator>
            </CardHeader>
            <CardContent className="my-5">
                <div>
                    <Toggles />
                </div>
                <MarcasInput />
                <h3 className="mt-4 mb-2 text-white">Seleccione periodo de Alquiler</h3>
                <DateButton />
                <h3 className="mt-4 mb-2 text-white">Lugar de Alquiler <span>/ Entrega</span></h3>

                <CityPicker />
            </CardContent>
            <CardFooter className="flex justify-end">
                <LinkSearch></LinkSearch>
            </CardFooter>
        </Card>
    )
}

export default Widget
