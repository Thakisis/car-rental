
import Vehicles from "@/components/Vehicles"
export default async function Vehiculos({ searchParams }) {

    return (
        <div className="pt-20">

            <div className="container mx-auto p-6 flex flex-col justify-start font-light">
                <h2 className="text-4xl  text-blue-800">Nuestra Flota de Vehículos de Alquiler</h2>
                <p className=" my-6 mb-8 text-xl" >En <span className="font-bold">[El nombre de la empresa]</span>, ofrecemos una amplia variedad de vehículos de alquiler para satisfacer todas tus necesidades de transporte. Ya sea que estés planeando un viaje familiar, una escapada de fin de semana o necesites un vehículo para un evento especial, tenemos el auto perfecto para ti. Explora nuestra flota y encuentra el vehículo ideal para tu próximo viaje.</p>

                <div className="hidden lg:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 [&>div]:shadow-lg [&>div]:p-6 [&>div]:rounded-lg [&>div]:flex [&>div]:flex-col [&>div]:bg-slate-100" >
                    <div className="">
                        <h3 className="text-xl font-semibold mb-2">Vehiculos Electricos</h3>
                        <p>Perfectos para viajes urbanos, económicos y fáciles de manejar.</p>
                    </div>
                    <div className="">
                        <h3 className="text-xl font-semibold mb-2">Berlinas Hibridas de alta gama</h3>
                        <p>Espaciosos y confortables, ideales para viajes largos y grupos grandes.</p>
                    </div>

                    <div className="">
                        <h3 className="text-xl font-semibold mb-2">Motos electricas</h3>
                        <p>Para quienes buscan la libertad de las dos ruedas con el respeto ambiental de los vehiculos electricos.</p>
                    </div>
                </div>


            </div>


            <Vehicles params={searchParams}></Vehicles>
            <div className="container mx-auto p-6 flex flex-col justify-start font-light">
                <p className=" mt-12 text-xl">Cada uno de nuestros vehículos está cuidadosamente mantenido y equipado con las últimas características de seguridad y comodidad. Además, ofrecemos opciones de alquiler flexibles para adaptarnos a tu horario y presupuesto. ¡Reserva hoy y disfruta de un viaje sin preocupaciones con <span className="font-bold">[El nombre de la empresa]</span>!</p>
            </div>

        </div>
    )
}
