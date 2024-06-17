"use client"
import { useState, Children } from 'react'
import * as Icons from '@/components/Icons'
function ContentCardClient({ children, tipo }) {
    const [selectedContent, setSelectedContent] = useState(0)
    const classSelected = ['info', 'vehicle', 'engine']
    const childrenArray = Children.toArray(children)
    const content = childrenArray[selectedContent]
    const IconSide = [{ icon: "Information", value: 0, content: 0 }, { icon: "Car", value: 1, props: { tipo }, content: 1 }, { icon: "Engine", value: 2, content: 2 }]
    const IconSidebar = IconSide.map(({ icon, value, props, content }) => {
        const Icono = Icons[icon]
        //console.log(props)
        return (<div key={value} data-content={content} className={`flex-1 p-2 pl-2 transition-all	${selectedContent === value ? "bg-slate-300" : "bg-slate-200"} `} ><Icono selected={selectedContent === value} {...props} className="w-6 h-6 text-black transition-all pointer-events-none" /></div>)

    })
    const selectedContentHandler = (e) => {
        if (!e.target.dataset.content) return
        setSelectedContent(parseInt(e.target.dataset.content))

    }
    return (
        <div className={classSelected[selectedContent]} id="">
            {content}

            <div className={`absolute cursor-pointer -bottom-10 flex lg:-right-10  lg:flex-col lg:top-0 lg:bottom-[inherit] bg-slate-200 divide-y divide-dashed divide-slate-400 rounded-b-lg lg:rounded-none lg:rounded-r-lg  overflow-hidden`}
                onClick={selectedContentHandler}
            >
                {IconSidebar}
            </div>
        </div>
    )
}

export default ContentCardClient
