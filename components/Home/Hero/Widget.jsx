import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import Toggles from "./Toggles"
import LinkSearch from "./LinkSearch"
import MarcasInput from "./MarcasInput"

const Widget = () => {
    return (
        <Card className="w-full">
            <CardHeader>
                <CardTitle>Alquilar Vehiculo</CardTitle>
                <Separator className="bg-zinc-800 m"></Separator>
            </CardHeader>
            <CardContent className="my-5">
                <div>
                    <Toggles></Toggles>
                </div>
                <MarcasInput></MarcasInput>
            </CardContent>
            <CardFooter className="flex justify-between">
                <Button variant="outline">Cancel</Button>
                <LinkSearch></LinkSearch>
            </CardFooter>
        </Card>
    )
}

export default Widget
