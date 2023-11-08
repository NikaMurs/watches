export type WatchItemType = {
    id: number,
    name: string,
    timeZone: number,
}

export type WatchItemProp = {
    watch: WatchItemType
    deleteWatch: CallableFunction
}

export type WatchesProp = {
    watches: Array<WatchItemType>
    deleteWatch: CallableFunction

}

export type WatchesFormProp = {
    newWatch: CallableFunction
}