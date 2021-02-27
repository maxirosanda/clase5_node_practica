module.exports = {
    crearNumerosAleatorios: function (min, max, redondeo, cantidadIter) {
        let i = 0
        let arrClaves = []
        do {
            // Redondeo a 4 dígitos.
            let clave = (Math.random() * (max - min) + min).toFixed(redondeo);
            arrClaves.push(clave)
            let valor = arrClaves.filter(c => c === clave).length;
            console.log(
                { clave: clave, valor: valor }
            )
            i++
        }
        while (i < cantidadIter)
    }
}
