import { useRef, useState } from "react"
import { AiOutlineDownload } from "react-icons/ai";
import { viewApplication, downloadFile } from "../services/operation/common";


import "../stylesheets/Profile.css"
import useOnClickOutside from "../customHooks/useOnClickOutside"


const Menu = ({ applicationID, data, icon }) => {

    const [open, setOpen] = useState(false)
    const ref = useRef(null)

    useOnClickOutside(ref, () => setOpen(false))
    if (!true) return null

    const renderFilter = () => (
        <>

            {
                data.map(item => (
                    <div className="linkAtDropDown_22" onClick={() => item.function(applicationID)}>
                        {item.name}
                    </div>
                ))
            }
        </>
    )


    return (
        <button className="relative removerBtnCss" onClick={() => setOpen(!open)}>
            <div className="ProfileDrop_22">
                {icon}
            </div>
            {open && (
                <div onClick={(e) => e.stopPropagation()} ref={ref} className="DropDownContainer_22" >
                    {renderFilter()}
                </div>
            )}
        </button>
    )
}

export default Menu