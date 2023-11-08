import { WatchesProp } from "../types"
import WatchItem from "../watchItem/watchItem"
import './watchesInfo.css'

export default function WatchesInfo(prop: WatchesProp) {
    const {watches, deleteWatch} = prop
    return (
        <div className='watchesInfo'>
            <div className='watchesItems'>
                {watches.map((el)=>{
                    return <WatchItem watch={el} key={el.id} deleteWatch={deleteWatch}/>
                })}
            </div>
        </div>
    )
}