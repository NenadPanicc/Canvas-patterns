let canvas = document.querySelector("canvas")

let c = canvas.getContext("2d")
c.lineWidth= 5



for(i = 0; i < 5; i++) {
    for (j = 0; j < 4; j++) {
        c.beginPath()
        c.moveTo(100+i*300,50+j*300)
        c.lineTo(150+i*300,50+j*300)
        c.arcTo(200+i*300,50+j*300,200+i*300,100+j*300,50)
        c.lineTo(150+i*300,100+j*300)
        c.lineTo(150+i*300,200+j*300)
        c.lineTo(100+i*300,200+j*300)
        c.arcTo(50+i*300,200+j*300,50+i*300,150+j*300,50)
        c.lineTo(100+i*300,150+j*300)
        c.lineTo(100+i*300,50+j*300)
        c.stroke()
        c.fillStyle = "yellow"
        c.fill()
        //DRUGI
        c.beginPath()
        c.moveTo(200+i*300,100+j*300)
        c.arcTo(200+i*300,50+j*300,250+i*300,50+j*300,50)
        c.lineTo(300+i*300,50+j*300)
        c.lineTo(300+i*300,150+j*300)
        c.lineTo(350+i*300,150+j*300)
        c.arcTo(350+i*300,200+j*300,300+i*300,200+j*300,50)
        c.lineTo(250+i*300,200+j*300)
        c.lineTo(250+i*300,100+j*300)
        c.lineTo(200+i*300,100+j*300)
        c.stroke()
        c.fillStyle = "green"
        c.fill()
        //TRECI
        c.beginPath()
        c.moveTo(50+i*300,250+j*300)
        c.arcTo(50+i*300,200+j*300,100+i*300,200+j*300,50)
        c.lineTo(150+i*300,200+j*300)
        c.lineTo(150+i*300,300+j*300)
        c.lineTo(200+i*300,300+j*300)
        c.arcTo(200+i*300,350+j*300,150+i*300,350+j*300,50)
        c.lineTo(100+i*300,350+j*300)
        c.lineTo(100+i*300,250+j*300)
        c.lineTo(50+i*300,250+j*300)
        c.stroke()
        c.fillStyle = "aqua"
        c.fill()
        //CETVRTI
        c.beginPath()
        c.moveTo(250+i*300,200+j*300)
        c.lineTo(300+i*300,200+j*300)
        c.arcTo(350+i*300,200+j*300,350+i*300,250+j*300,50)
        c.lineTo(300+i*300,250+j*300)
        c.lineTo(300+i*300,350+j*300)
        c.lineTo(250+i*300,350+j*300)
        c.arcTo(200+i*300,350+j*300,200+i*300,300+j*300,50)
        c.lineTo(250+i*300,300+j*300)
        c.lineTo(250+i*300,200+j*300)
        c.stroke()
        c.fillStyle = "purple"
        c.fill()
    }
}