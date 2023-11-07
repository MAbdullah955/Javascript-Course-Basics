function BackpackNew (
    Name,
    color,
    volume,
    strapLengthL,
    strapLengthR,
    zipOpen
)
{
    this.name = Name,
    this.color = color,
    this.volume = volume,
    this.strapLength = {
        left: strapLengthL,
        Right: strapLengthR
    }
    this.zipOpen = zipOpen

}
    const newPack = new BackpackNew (
        "BAG",
        "White",
        90,
        12,
        11,
        true
    )

console.log(newPack)