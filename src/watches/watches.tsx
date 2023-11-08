import { useState, useEffect } from "react"
import WatchesForm from "./watchesForm/watchesForm"
import WatchesInfo from "./watchesInfo/wathcesInfo"
import { WatchItemType } from "./types"
import './watches.css'

export default function Watches() {
    const [watches, addWatches] = useState([
        {
            id: 1699447313900,
            name: 'Moscow',
            timeZone: 3
        },
        {
            id: 1699447315877,
            name: 'London',
            timeZone: 2
        }])

    function newWatch(el: WatchItemType){
        addWatches(prevState => [...prevState, {id: Date.now(), name: el.name, timeZone: el.timeZone}])
    }

    let [deleteWatch, setDeleteWatch] = useState(0)
    function deleteWatchFunc(el: number) {
        setDeleteWatch(el)
    }
    useEffect(() => {
        if(deleteWatch !==0){
            const oldArray = JSON.parse(JSON.stringify(watches))
            for (let i = 0; i < oldArray.length; i++){
                if (oldArray[i].id === deleteWatch){
                    oldArray.splice(i,1)
                }
            }
            addWatches(oldArray);
        }
    },
    [deleteWatch])

    return (
        <div className="watches">
            <WatchesForm newWatch={newWatch}/>
            <WatchesInfo watches={watches} deleteWatch={deleteWatchFunc}/>
        </div>
    )
}