import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"

function TabsDemo() {
    return (
        <Tabs defaultValue="account" className="">
            <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="datos">Datos </TabsTrigger>
                <TabsTrigger value="pago">Pago</TabsTrigger>
                <TabsTrigger value="confirmacion">confirmacion</TabsTrigger>
            </TabsList>
            <TabsContent value="datos">
                uno
            </TabsContent>
            <TabsContent value="pago">
                dos
            </TabsContent>
            <TabsContent value="confirmacion">
                tres
            </TabsContent>
        </Tabs>
    )
}
export default TabsDemo
