import type { State } from "../shared/context"
export default function Display({count}: State){
    return (
        <div className="display">
            {count}
        </div>
    )
}