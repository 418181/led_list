let list = [
[
10,
50,
100,
150,
255
],
[
255,
150,
100,
50,
10
],
[
255,
255,
255,
255,
255
],
[
150,
150,
150,
150,
150
],
[
10,
10,
10,
10,
10
]
]
for (let y = 0; y <= 4; y++) {
    for (let x = 0; x <= 4; x++) {
        led.plotBrightness(x, y, list[y][x])
    }
}
basic.forever(function () {
	
})
