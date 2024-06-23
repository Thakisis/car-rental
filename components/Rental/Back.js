"use client"

import { useRouter } from "next/navigation";
function Back(props) {
        const router = useRouter();
        const goBack=()=>{
            router.back()
        }
    return (
        <div>
            <button onClick={goBack}>back</button>
        </div>
    );
}

export default Back;
