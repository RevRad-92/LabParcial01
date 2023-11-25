const url = "https://dolarapi.com/v1/dolares"
const dolarValueCompra = document.querySelector('#dolarValueCompra')
const pesoValue = document.querySelector('#pesoValue')
let valorBlueCompra = 0
let valorBlueVenta = 0 
const formConvertirPesos = document.querySelector('#conversorPesos')
const formConvertirDolares = document.querySelector('#conversorDolares')
let info = document.querySelector('#info')

getValues()

function getValues() {    
    fetch(url)
        .then((response)=> {
            if (response.ok) {
                return response.json() 
            }
        })
        .then((data)=> {
            //console.log(data)
            valorBlueCompra = data[1].compra
            valorBlueVenta = data[1].venta
            // console.log("compra: $" + valorBlueCompra )
            // console.log("venta: $" + valorBlueVenta )
            info.innerHTML = `Dolar Blue - Compra: $${valorBlueCompra} / Venta: $${valorBlueVenta}`
        })
        .catch((error)=>{
            
            console.error("Se ha producido un error: ", error)
        })
}


formConvertirPesos.addEventListener("submit", function(e){
    e.preventDefault()
    const inputPesos = document.querySelector('#pesos').value
    const resultComprar = inputPesos / valorBlueCompra
    console.log(inputPesos)
    console.log(resultComprar)

    dolarValueCompra.innerHTML = "Convirtiendo a dólares blue..."
    
    setTimeout(()=>{
        dolarValueCompra.innerHTML = `USD${parseFloat(resultComprar).toFixed(2)}`
    }, 1000)
})

formConvertirDolares.addEventListener("submit", function(e){
    e.preventDefault()
    const inputDolares = document.querySelector('#dolares').value
    const result = valorBlueVenta * inputDolares
    console.log(inputDolares)
    console.log(result)

    pesoValue.innerHTML = "Convirtiendo a pesos..."
    
    setTimeout(()=>{
        pesoValue.innerHTML = `$${parseFloat(result).toFixed(2)}`
    }, 1000)
})

