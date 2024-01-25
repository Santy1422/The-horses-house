import clubSchema from "../databases/mongodb/schemas/ClubSchema"


const newClub = async (req, res) => {
    const {
        nombre,
        pais,
        provincia,
        federado,
        ubicacion
    } = req.body.newClub

    const existingClub = await clubSchema.findOne({ nombre });

    if (existingClub) {
        return res.status(404).json({ error: 'Ya existe un club con este nombre', payload: true });
    }

    const club = new clubSchema({
        nombre,
        pais,
        provincia,
        federado,
        ubicacion
    })

    await club.save();

    res.status(201).json(club)
}

const editClub = (req, res) => {

}

const deleteClub = (req, res) => {

}

const searchClubsByName = async (req, res) => {
    const clubName = req.params.clubName

    const regex = new RegExp(clubName, 'i')

    const clubs = await clubSchema.find({ nombre: { $regex: regex } }).select("nombre")

    if (clubs.length === 0) {
        return res.status(404).json({ error: 'Club no encontrado' });
    }

    res.status(200).json(clubs);
}

const getClubById = async (req, res) => {
 const clubId = req.params.clubId

 const club = await clubSchema.findById(clubId)

 if (!club) {
    return res.status(404).json({ error: 'Club no encontrado'})
 }

 res.status(200).json(club)
}

const controller = {
    newClub,
    editClub,
    deleteClub,
    searchClubsByName,
    getClubById
}


export default controller