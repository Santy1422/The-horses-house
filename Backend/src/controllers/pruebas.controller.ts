import pruebasSchema from "../databases/mongodb/schemas/pruebasSchema"

const modificarPrueba = async (req, res) => {

    try {
        const pruebaID = req.params.id;
        const prueba = await pruebasSchema.findById(pruebaID.toString()); 
        
        if (!prueba) {
            return res.status(404).json({ error: 'Prueba no encontrada' });
        }
        
        prueba.tiempoAcordadoR1 = req.body.tiempoAcordado1
        prueba.tiempoAcordadoR2 = req.body.tiempoAcordado2
        prueba.corralDobleR1 = req.body.corralDoble1
        prueba.corralDobleR2 = req.body.corralDoble2
        prueba.corralTripleR1 = req.body.corralTriple1
        prueba.corralTripleR2 = req.body.corralTriple2
        prueba.VallasR1 = req.body.vallas1
        prueba.VallasR2 = req.body.vallas2
        prueba.tiempoOptimo = req.body.tiempoOptimo

        const pruebaActualizada = await prueba.save()

        res.status(200).json(pruebaActualizada)
        
    } catch (error) {
        console.error('Error al modificar la prueba:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }

}

const controller = {
    modificarPrueba,
}
  
  
export default controller