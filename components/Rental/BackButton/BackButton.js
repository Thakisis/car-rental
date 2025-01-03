"use client"
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
function BackButton(props) {
        const router = useRouter();
        const goBack=()=>{
            router.back()
        }
    return (
        <div>
            <Button variant="outline" onClick={goBack}>Volver Atras</Button>
        </div>
    );
}

export default BackButton;
