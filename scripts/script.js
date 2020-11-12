document.querySelector('#btn-guardar-mensualidad').addEventListener("click", e => {
    if (document.querySelector('#frm-mensualidad').reportValidity()) {
        let name = document.querySelector('#nombre_propietario').value
        let docNum = document.querySelector('#doc_propietario').value
        let names = new Array("Tiago", "Andrea", "Cristian")
        names.push(name)
        console.log(`ID: ${docNum}`)
        console.log(`Registros: ${names}`)

    }
});

let guardarMensualidad = event => {
    let a, b, sum
    a = 3
    b = 5
    sum = a + b
    console.log(event);
    console.log("La suma de a y b es " + sum);
    return sum
}