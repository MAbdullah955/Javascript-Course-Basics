class backpack {
    constructor (
        name,
        color,
        volume,
        zipOpen,
        strapLengthL,
        strapLengthR
    )
    {
        this.name = name,
        this.color = color,
        this.volume = volume,
        this.zipOpen = zipOpen,
        this.strapLength = {
            Left: strapLengthL,
            Right: strapLengthR
        }
    }

    toggleZip (lidStatus){
    this.ZipOpen = zipStatus
    }

    newStrapLength (lengthLeft, lengthRight){
    this.strapLength.Left = lengthLeft,
    this.strapLength.Right = lengthRight
    }
}

export default backpack;