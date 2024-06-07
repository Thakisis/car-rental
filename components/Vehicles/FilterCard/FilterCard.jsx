

function FilterCard({ id, alquilable, cajaCambio, descripcion, año, etiquetaECO, numPlazas, tipoVehiculo, tipo_vehiculo, marca_vehiculo, modelo_vehiculo, marcay_modelo_vehiculo, imagen_url }) {

    return (
        <div className="p-6 rounded-lg bg-white overflow-hidden flex flex-col gap-6 min-w-96  bg-slate-400">
            <div className="flex gap-4 sm:gap-6">
                <img
                    className="hidden sm:block rounded-lg"
                    style={{ width: 200, height: 100, objectFit: "contain" }}
                    src={imagen_url}

                    alt=""
                />
                <div className="flex flex-col items-center w-full gap-2 justify-between sm:w-auto sm:items-start">
                    <img
                        className="sm:hidden rounded-lg"
                        style={{ width: 100, height: 100 }}
                        src="https://placekitten.com/100/100"
                        alt=""
                    />
                    <h2 className="hf text-2xl leading-6 font-semibold">{marcay_modelo_vehiculo}</h2>
                    <div className="flex flex-wrap gap-3">
                        <div className="flex items-center text-xs text-gray-400 md:text-base">
                            <i className="las la-briefcase mr-1" />
                            <span>Slack</span>
                        </div>
                        <div className="flex items-center text-xs text-gray-400 md:text-base">
                            <i className="las la-globe mr-1" />
                            <span>London, UK</span>
                        </div>
                        <div className="hidden flex items-center text-xs text-gray-400 md:text-base sm:block">
                            <i className="las la-money-bill mr-1" />
                            <span>55k - 60k / year</span>
                        </div>
                    </div>
                    <div className="hidden flex-wrap gap-1 sm:flex">
                        <span className="text-xs flex-shrink-0 bg-green-200 py-1 px-2 rounded text-green-500">
                            tags
                        </span>
                        <div className="hidden text-xs flex-shrink-0 border-l-2 border-gray-200 mx-1 lg:block" />
                        <span className="hidden text-xs flex-shrink-0 bg-gray-200 py-1 px-2 rounded text-gray-500 lg:block">
                            tag2
                        </span>

                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-6 lg:hidden">
                <p className="sm:hidden">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio ut
                    excepturi a omnis culpa explicabo inventore hic odit placeat sequi natus
                    architecto repellat debitis laudantium vero, sunt dolorem eaque
                    accusantium adipisci, nemo corrupti fuga et eum veritatis. Dolor,
                    voluptatem totam aut ipsum voluptatibus natus iusto amet obcaecati ut
                    porro cumque!
                </p>
                <div className="flex justify-center flex-wrap gap-1 sm:justify-start">
                    <span className="text-xs flex-shrink-0 bg-green-200 py-1 px-2 rounded text-green-500 sm:hidden">
                        tag mobile
                    </span>
                    <div className="text-xs flex-shrink-0 border-l-2 border-gray-200 mx-1 sm:hidden" />
                    <span className="text-xs flex-shrink-0 bg-gray-200 py-1 px-2 rounded text-gray-500">
                        tag2
                    </span>

                </div>
            </div>
        </div>


    )
}

export default FilterCard
