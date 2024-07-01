"use client"
import { useState, useMemo } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useElements, useStripe, PaymentElement } from "@stripe/react-stripe-js"

import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import FieldForm from "./FieldForm"
import { ArrowRightIcon } from "lucide-react"
import { CreditCard } from "lucide-react"
import { ArrowLeftIcon } from "lucide-react"


function Steps() {
    const stripe = useStripe()
    const elements = useElements()
    const [selected, setSelected] = useState(0)
    const [formState, setField] = useState({ name: "", secondName: "", email: "", address: "" })
    const tabstrigger = [{ value: 0, label: "Datos" }, { value: 1, label: "Pago" }, { value: 2, label: "Completado" }]

    const tabsButton = tabstrigger.map((tab, index) => {

        const classSel = tab.value <= selected ? "border-t-4 border-primary" : "border-t-4 border-[#E5E7EB]"
        return (
            <TabsTrigger className={classSel} value={tab.value} key={index}>{tab.label}</TabsTrigger>
        )
    })
    const changeSelected = (e) => {

        setSelected(e)
    }
    const step2Memo = useMemo(() => <Step2 key={1} onClick={changeSelected} ></Step2>, [])

    return (
        <form className=" relative flex flex-1 flex-col mb-3 h-full pr-[1.3rem] pb-[1.3rem] " >
            <Tabs value={selected} selected={selected} onValueChange={changeSelected} className=" h-full">
                <TabsList className="grid w-full grid-cols-3 ">
                    {tabsButton}
                </TabsList>
                <TabsContent asChild={false} className={`flex flex-col flex-1 ${selected === 0 ? "h-full" : ""} `} value={0}>
                    <Step1 onClick={changeSelected} formState={formState} setField={setField} />
                </TabsContent>
                <TabsContent asChild={false} className={`flex flex-col  flex-1 ${selected === 1 ? "h-full" : ""} `} value={1}>
                    {step2Memo}
                </TabsContent>
                <TabsContent asChild={false} value={2}>
                    tres
                </TabsContent>
            </Tabs>
        </form>
    )
}
export default Steps
function Step1({ onClick: handleSelected, formState, setField }) {
    const fields = [
        { field: "name", label: "Nombre", placeholder: "introduzca su nombre", type: "text", as: Input },
        { field: "secondname", label: "Apellidos", placeholder: "introduzca sus apellidos", type: "text", as: Input },
        { field: "email", label: "Correo electronico", placeholder: "email@midominio.com", type: "email", as: Input },
        { field: "address", label: "Direcciòn", placeholder: "....direcciòn", type: "text", as: Textarea }
    ]
    const fieldsList = fields.map((input) => (<FieldForm value={formState[input.field]} setField={setField} key={input.field} {...input} />))
    return (
        < >
            <div className="  flex  flex-col h-auto space-y-4">

                <h3 className="pb-[1.3rem] font-light text-2xl text-primary">Datos Personales</h3>
                {fieldsList}

                <div className="absolute bottom-2 right-2" style={{ bottom: "0", right: "1rem" }} >
                    <Button onClick={() => handleSelected(1)}>Mètodo de pago <ArrowRightIcon className="ml-4 w-4 h-4" /></Button>
                </div>
            </div >

        </>
    )
}
function Step2({ onClick: handleSelected, formState, setField }) {
    const paymentElementOptions = {
        layout: 'tabs',

    }
    const handleSubmit = async (event) => {
        event.preventDefault()
    }
    return (
        <>
            <div className="  flex  flex-col h-auto space-y-4 pr-[1.3rem] pb-[1.3rem]">
                <h3 className="pb-[1.3rem] font-light text-2xl text-primary">Metodo de pago</h3>
                <PaymentElement id="payment-element" options={paymentElementOptions} />
                <div className="absolute flex  gap-8" style={{ bottom: "0", right: "1rem" }} >
                    <Button onClick={() => handleSelected(0)}> <ArrowLeftIcon className="mr-4 w-4 h-4" />Datos Personales</Button>
                    <Button onClick={() => handleSelected(0)}>Pagar <CreditCard className="ml-4 w-4 h-4" /></Button>
                </div>
            </div>


        </>
    )
}

/*

<div className="grid gap-2">
                    <Label Label htmlFor="name" > Nombre</Label>
                    <Input id="name" placeholder="introduzca su nombre" />
                </div >
                <div className="grid gap-2">
                    <Label Label htmlFor="name" > Apellidos</Label>
                    <Input id="secondname" placeholder="introduzca sus apellidos" />
                </div >
                <div className="grid gap-2">
                    <Label htmlFor="email">Correo electronico</Label>
                    <Input id="email" type="email" placeholder="email@midominio.com" />
                </div>
                <div className="flex flex-col gap-2  ">
                    <Label htmlFor="address">Direccion</Label>
                    <Textarea id="address" placeholder="....direccion" rows={3} />
                </div>
                */
