

import * as Icons from '@/components/Icons'
import Tooltip from '@/components/Tooltip'
import { transformdata } from './TransformData'
import { getBlurData } from '@/server/getBlurData'
import Image from 'next/image'
import ContentCardClient from './ContentCardClient'
import InfoRental from './InfoRental'
import InfoCar from './InfoCar'
import InfoEngine from './InfoEngine'
import Link from 'next/link'
import { cn } from '@/lib/utils'


export default async function Card({ datesRental, ...props }) {
    const newData = transformdata(props)
    const { nombre, image, tipo } = newData



    const IconSide = [{ icon: "Information", value: 0, content: 0 }, { icon: "Car", value: 1, props: { tipo }, content: 1 }, { icon: "Engine", value: 2, content: 2 }]
    const selected = 0
    const blurData = await getBlurData(`/images/card/${image}`)

    const IconSidebar = IconSide.map(({ icon, value, props, content }) => {
        const Icono = Icons[icon]
        return (<div key={value} data-content={content} className={`flex-1 p-2 pl-2 transition-all	${selected === value ? "bg-slate-300" : "bg-slate-200"} `} ><Icono selected={selected === value} {...props} className="w-6 h-6 text-black transition-all pointer-events-none" /></div>)

    })
    const urlCar = {
        pathname: `/alquiler/${newData.id}`, query: datesRental
    }
    const isDisabled = false
    return (
        <div className="lg:h-80 mx-auto flex flex-wrap bg-slate-200 rounded-lg rounded-bl-none lg:rounded-lg lg:rounded-tr-none  shadow-2xl relative mb-9 lg:mb-0 select-none">
            <div className="relative lg:h-80  rounded-lg rounded-b-none lg:rounded-none lg:rounded-l-lg  overflow-hidden  ">
                <img src={`/images/ECO.webp`} className="absolute bottom-4 left-4 w-7 h-7 " />
                <Image src={`/images/card/${image}`} priority alt={"image"} placeholder='blur' blurDataURL={blurData.placeholder} width={1024} height={660} className=" h-full w-auto" />
            </div>
            <div
                className="flex flex-col  px-4 pb-4  justify-start w-full lg:w-[30vw] lg:px-10 lg:py-6 mt-6 lg:mt-0 "
            >
                <h1
                    className="text-gray-900 text-3xl title-font font-medium mb-1"
                >
                    {nombre} ({"año"})
                </h1>
                <div className="flex flex-col w-full flex-1">
                    <ContentCardClient icons={IconSidebar} tipo={newData.tipo}>
                        <InfoRental {...newData} key={0} />
                        <InfoCar {...newData} key={1} />
                        <InfoEngine {...newData} key={2} />

                    </ContentCardClient>
                </div>
                <div className="flex flex-row  justify-between w-full items-center">
                    <Precio {...newData} />

                    <Link href={urlCar} className={cn(`flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded`)}>Ver oferta </Link>


                </div>

            </div>
            <div className="absolute -bottom-10 flex lg:-right-10  lg:flex-col lg:top-0 lg:bottom-[inherit] bg-slate-200 divide-y divide-dashed divide-slate-400 rounded-b-lg lg:rounded-none lg:rounded-r-lg  overflow-hidden">
                {/*
                <div className="absolute -right-10 bg-slate-200 divide-y divide-dashed divide-slate-400  rounded-r-lg  overflow-hidden">
                <div className={`flex-1 p-2 pl-5 `} ><Icons.Information selected className="w-6 h-6 text-black" /></div>
                <div className={`flex-1 p-2 pl-5 `} ><Icons.Car className="w-6 h-6 text-black" /></div>
                <div className={`flex-1 p-2 pl-5 `} ><Icons.Engine className="w-6 h-6 text-black" /></div>
                */}

            </div>
        </div>







    )
}

function Precio({ precioDia, precioOferta, ofertaEspecial }) {
    if (ofertaEspecial)
        return <div className='text-xl'>Precio: <span className=" line-through text-gray-500">{precioDia}</span>€<span className="ml-3 font-bold text-green-700 ">{precioOferta} €</span> <span className='ml-2'> &#47; dia</span></div>

    return <div className='text-2xl'> <span className="font-bold">{precioDia} €</span> <span className='ml-2'> &#47; dia</span></div>
}




/*

function VehicleContent(props) {
    const { comfort, conservacion, extras } = props
    const comfortComp = comfort && <div ><span >Confort: </span><span className='font-bold'>Alto</span> </div>
    const estadoComp = conservacion && <div ><span >Estado: </span> <span className='font-bold'>Buen Estado</span></div>

    return (
        <div className={`pl-3 flex flex-col w-full flex-1`}>
            <h3 className='font-bold text-lg'>Caracteristicas:</h3>
            <div className='pl-2 text-sm'>
                {comfortComp}
                {estadoComp}
            </div>
            <h3 className='pt-3 font-bold text-lg'>Extras:</h3>
            <div className='pl-2 text-sm'>
                {Extras(extras)}
            </div>

        </div>
    )
}

function EngineContent({ tipoMotor, autonomia, prestaciones }) {
    const prestacionesComp = prestaciones && <div ><span > Gama:</span> <span className='font-bold'>Altas Prestaciones</span></div>
    return (
        <div className={`flex flex-col w-full flex-1 `}>
            <h3 className='font-bold text-lg'>Motor</h3>
            <div className='pl-2 text-sm'>
                <div ><span > Tipo: </span><span className='font-bold'>{tipoMotor}</span></div>
                <div ><span > Autonomia: </span><span className='font-bold'>{autonomia} km</span></div>
                {prestacionesComp}
            </div>
        </div>
    )
}


function Extras(listExtras) {


    const extrasString = {
        gps: { text: "GPS", tooltip: "Navegación GPS" },
        sillaBebe: { text: "Bebe", tooltip: "Silla para Bebes" },
        proteccionenCarretera: { text: "Prot. Carretera", tooltip: "Proteccion en carretera" },
        opcionSeguroTodoRiesgo: { text: "Opcion Todo riesgo", tooltip: "Seguro todo riesgo opcional" }
    }
    const extrasBadge = (nombre, value) => {
        if (nombre === "exenciondeFranquicia")
            return { text: `Exencion ${value}`, tooltip: `Exencion Franquicia ${value}` }
        return { "text": "añadir", "tooltip": "añadir" }

    }

    const listaTags = listExtras.map((extra) => typeof extra === "string" ?
        <Tooltip title={extrasString[extra].tooltip} key={extra} placement="top"> <Badge label={extrasString[extra].text} variant="outlined" /> </Tooltip> :
        <Tooltip title={`${extrasBadge(extra.nombre, extra.value).tooltip}`} key={`${extra.nombre}-${extra.value}`} placement="top">             <Badge label={`${extrasBadge(extra.nombre, extra.value).text}`} variant="outlined" />         </Tooltip>
    )


    return (<div className="flex  flex-wrap gap-3">

        {listaTags}
    </div>
    )

}

function Badge({ label }) {
    return <div className='inline-flex items-center rounded-full border border-black    px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2'>{label}</div>

}

function Tooltip({ title }) {
    return <div className="text-xs"> {title}</div>
}   
*/
