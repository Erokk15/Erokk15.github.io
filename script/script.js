//Arreglo con paises iniciales
const paises = [
    {
        nombre: "Guatemala",
        bandera: "https://bit.ly/3Bwr2rm",
        capital: "Ciudad de Guatemala",
        idioma_oficial: "Español",
        moneda: "Quetzal"
    },
    {
        nombre: "Argentina",
        bandera: "https://bit.ly/3BEJC0y",
        capital: "Buenos Aires",
        idioma_oficial: "Español",
        moneda: "Peso"
    },
    {
        nombre: "Francia",
        bandera: "https://bit.ly/3HFZ7t5",
        capital: "Paris",
        idioma_oficial: "Frances",
        moneda: "Euro"
    },
    {
        nombre: "El Salvador",
        bandera: "https://bit.ly/3uRN5F6",
        capital: "San Salvador",
        idioma_oficial: "Español",
        moneda: "Dolar"
    },
    {
        nombre: "Honduras",
        bandera: "https://bit.ly/3UWcrMM",
        capital: "Tegucigalpa",
        idioma_oficial: "Español",
        moneda: "Lempira"
    }
];

agregarMonitores();

//funcion para agregar listeners a los botones
function agregarMonitores() {
    const mostrar = document.getElementById("mostrarPaises");
    const agregar = document.getElementById("agregarPais");

    mostrar.addEventListener("click", mostrarPaises);
    agregar.addEventListener("click", agregarPais);
}


//funcion que mostrara las paises en la pagina
function mostrarPaises() {
    let stringTabla = "";

    for (pais of paises) {
    stringTabla +=
    `<div class="col-12 col-lg-12">
        <table class="table table-sm table-striped bg-gradient-warning">
            <tbody>
                <tr>
                    <th>Nombre</th>
                    <th>Capital</th>
                    <th>Idioma</th>
                    <th>Moneda</th>
                </tr>
                <tr>
                    <td>${pais.nombre}</td>
                    <td>${pais.capital}</td>
                    <td>${pais.idioma_oficial}</td>
                    <td>${pais.moneda}</td>
                </tr>
            </tbody>
            <tfoot>
                <tr>
                    <td colspan="4" class="text-center">
                    <img src="${pais.bandera}" alt="Bandera de ${pais.nombre}">
                    </td>
                </tr>
            </tfoot>
        </table>
    </div>`;

    document.getElementById("paises").innerHTML = stringTabla;

    }
}

//funcion que permite agregar un pais al arreglo
function agregarPais() {
    let nombre = prompt("Ingrese el nombre del pais");
    let capital = prompt("Ingrese la capital del pais");
    let idioma = prompt("Ingrese el idioma del pais");
    let moneda = prompt("Ingrese la moneda del pais");
    let bandera = prompt("Ingrese la bandera del pais");

    let pais = {
        nombre: nombre,
        bandera: bandera,
        capital: capital,
        idioma_oficial: idioma,
        moneda: moneda
    }

    paises.unshift(pais);
    }


