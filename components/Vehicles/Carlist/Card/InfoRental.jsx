import Tooltip from '@/components/Tooltip'
import * as Icons from '@/components/Icons'
function InfoRental({ cajaCambios, cancelacion, descripcion, maletero, plazas, limiteKm, tipoMotor, tipo }) {
    const iconEngines = {
        BEV: { icon: Icons.Electric, text: "100% Eléctrico", value: "BEV" },
        HEV: { icon: Icons.Fuel, text: "Híbrido no enchufable", value: "HEV" },
        MHEV: { icon: Icons.Fuel, text: "Hibrido ligero", value: "MHEV" },
        PHEV: { icon: Icons.FuelElectric, text: "Híbrido Enchufable", value: "PHEV" },  // text es el tooltip=hover
        SHEV: { icon: Icons.Fuel, text: "Híbrido Puro", value: "SHEV" },



    }
    const IconsValues = [
        { text: `Caja de cambios de tipo ${cajaCambios} `, Icon: cajaCambios === "Manual" ? Icons.GearManual : Icons.GearAutomatic, value: cajaCambios[0] },
        { text: tipo === "Coche" ? `${maletero} bolsas en maletero` : "no aplicable", Icon: Icons.Luggage, value: maletero === 0 ? "-" : maletero, disabled: tipo !== "Coche" },
        { text: "Plazas del Vehiculo", Icon: Icons.Seat, value: plazas },
        { text: limiteKm < 100 ? `limite de ${limiteKm} kilometros` : "kilometraje ilimitado", Icon: Icons.Limite, value: limiteKm < 100 ? `${limiteKm}km` : "Ilimitado" },
        { text: iconEngines[tipoMotor].text, Icon: iconEngines[tipoMotor].icon, value: iconEngines[tipoMotor].value }
    ]

    const InfoIcons = IconsValues.map(({ text, Icon, value, disabled }) => <Tooltip tooltip={text} key={text} className='flex' dark><div className={`flex items-center ${disabled ? "text-slate-500" : "text-slate-900"}`}><Icon className=" w-5 h-5 " style={{ verticalSlign: "text-bottom" }} /> <span className={`ml-2 mr-4 text-base font-semibold`}>{value}</span></div></Tooltip>)
    const cancelacionDiv = cancelacion ? <div className="text-green-600 flex gap-2 mt-2" > <Icons.Free className=" w-5 h-5" /> Cancelacion Gratuita  </div> : <Tooltip title="Añada el seguro de cancelación durante el proceso de pago"><div className="text-slate-800 flex gap-2 mt-2" > <Icons.Optional className=" w-5 h-5" /> Cancelacion opcional  </div></Tooltip>
    return (
        <div className={`flex flex-col w-full flex-1 `}>
            <div className=" flex items-center  mt-1">
                {InfoIcons}
            </div>
            {cancelacionDiv}


            <div className="flex-1 mt-3">
                {descripcion}
            </div>
        </div>
    )
}

export default InfoRental


