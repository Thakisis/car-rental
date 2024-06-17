import Rental from "@/components/Rental"

function page({ params, searchParams }) {

    return (
        <div className="flex  w-full min-h-screen  justify-center color-black ">
            <Rental carId={params.carId} searchParams={searchParams} />
        </div>
    )
}

export default page
