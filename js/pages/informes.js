// Verificar si hay registros en localStorage
if (localStorage.getItem('Informes')) {
    // Obtener los datos del localStorage
    const informes = JSON.parse(localStorage.getItem('informes'));

    // Verificar si hay informes guardados
    if (informes.length === 0) {
        // Mostrar mensaje de no hay informes
        alert('No hay informes guardados para mostrar');
    } else {
        // Recorrer los informes
        informes.forEach((informe) => {
            // Obtener datos del informe
            const { provincia, eleccion, estadoRecuento, agrupaciones } = informe;

            // Crear el título y subtitulo
            const titulo = `Elecciones ${eleccion.ano} | ${eleccion.tipo}`;
            const subtitulo = `${eleccion.ano} > ${eleccion.tipo} > ${eleccion.cargo} > ${eleccion.distrito} > ${eleccion.seccion}`;

            // Mostrar el título y subtitulo en la consola
            console.log('Título:', titulo);
            console.log('Subtítulo:', subtitulo);

            // Mostrar datos generales
            console.log('Mesas Escrutadas:', estadoRecuento.mesasTotalizadas);
            console.log('Electores:', estadoRecuento.cantidadElectores);
            console.log('Participación sobre escrutado:', estadoRecuento.participacionPorcentaje);

            // Mostrar datos por agrupación
            agrupaciones.forEach((agrupacion) => {
                console.log(`${agrupacion.nombreAgrupacion} ${agrupacion.votosPorcentaje}% ${agrupacion.votos} Votos`);
            });
        });
    }
} else {
    // Mostrar mensaje de no hay informes
    alert('No hay informes guardados para mostrar');
}