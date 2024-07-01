
import { Label } from "@/components/ui/label"

function FieldForm({ field, label, placeholder, type, as: Comp, value, setField }) {
    const onChange = (e) => {

        setField((fieldState) => ({ ...fieldState, [field]: e.target.value }))
    }
    return (
        <div className="grid gap-2">
            <Label htmlFor={field} >{label}</Label>
            <Comp id={field} placeholder={placeholder} value={value} onChange={onChange} type={type} />
        </div >
    )
}

export default FieldForm
