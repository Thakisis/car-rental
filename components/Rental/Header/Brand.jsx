"use client"
import { useRef, useEffect } from "react"
import './brand.css'

function Brand({ brand }) {
    const elementRef = useRef(null)
    useEffect(() => {
        if (!elementRef.current)
            return
        const sizeBox = elementRef.current?.parentNode.parentNode.getBoundingClientRect().width
        const sizeBrand = brand.length * -280 - 1500
        const animtime = brand.length * 5
        console.log(brand.length, brand, sizeBrand, animtime)
        elementRef.current.style.setProperty("--text-size", `${sizeBrand}px`)
        elementRef.current.style.setProperty("--box-size", `${sizeBox}px`)
        elementRef.current.style.setProperty("--anim-time", `${animtime}`)
        elementRef.current.style.setProperty("opacity", 1)
    }, [brand])
    return (
        <div className="absolute -translate-y-[180px]  left-0 top-0 z-9  color-white   " >
            <div ref={elementRef} className="text-[30rem]   text-blue-400 font-bold brand  whitespace-nowrap" >{brand}</div>
        </div>
    )
}

export default Brand
