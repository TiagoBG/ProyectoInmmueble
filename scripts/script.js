const INMUEBLESDB = [{
    ownerData: {
        name: "Pedro",
        id: 1037453489,
        genre: "Masculino",
        birthDate: "1984-10-25"
    },
    monthData: [{
            squareMeters: 150,
            type: "A",
            habNum: 3,
            monthDate: "2020-10"
        }, {
            squareMeters: 170,
            type: "A",
            habNum: 4,
            monthDate: "2020-11"
        }

    ]
}, {
    ownerData: {
        name: "Raquel",
        id: 1037452739,
        genre: "Femenino",
        birthDate: "1991-03-15"
    },
    monthData: [{
        squareMeters: 80,
        type: "C",
        habNum: 2,
        monthDate: "2020-10"
    }]
}]

document.querySelector('#btn-guardar-mensualidad').addEventListener("click", e => {
    if (document.querySelector('#frm-mensualidad').reportValidity()) {
        let name = document.querySelector('#nombre_propietario').value
        let docNum = document.querySelector('#doc_propietario').value
        let squareMeters = document.querySelector('#metros_cuadrados').value
        let type = document.querySelector("[name='tipo_inmueble']:checked").value

        //let names = new Array("Tiago", "Andrea", "Cristian")
        //names.push(name)
        let ownerData = {
            name: name,
            id: docNum,
        }
        let inmbData = {
            squareMeters: squareMeters,
            type: type,

        }
        let dim = INMUEBLESDB.push({ ownerData: ownerData, monthData: [inmbData] })
        alert("Se agregó un nuevo registro. Totales: " + dim)
        console.log(INMUEBLESDB)
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