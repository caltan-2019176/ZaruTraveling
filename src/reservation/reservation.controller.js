import Reservation from '../reservation/reservation.model.js'

export const test = (req, res) => {
    console.log('Test is running')
    res.send({ message: 'test good' })
}

export const add = async (req, res) => {
    try {
        let data = req.body;

        // Verifica si algún parámetro está vacío
        if (!data.user || !data.hotel || !data.room || !data.entryDate || !data.exitDate) {
            return res.status(400).send({ message: 'All parameters are required' });
        }

        // Verifica si el usuario, hotel y habitación existen
        const userExists = await User.findById(data.user);
        const hotelExists = await Hotel.findById(data.hotel);
        const roomExists = await Room.findById(data.room);

        if (!userExists || !hotelExists || !roomExists) {
            return res.status(404).send({ message: 'User, hotel, or room not found' });
        }

        // Verifica que las fechas de entrada y salida sean válidas
        if (new Date(data.entryDate) >= new Date(data.exitDate)) {
            return res.status(400).send({ message: 'Entry date must be before exit date' });
        }

        // Verifica la disponibilidad de la habitación (aquí deberías agregar tu lógica de verificación)

        // Crea la reserva
        const reservation = new Reservation({
            user: data.user,
            hotel: data.hotel,
            room: data.room,
            entryDate: data.entryDate,
            exitDate: data.exitDate,
            status: 'pending'
        });

        // Guarda la reserva en la base de datos
        await reservation.save();

        return res.send({ message: 'Reservation created successfully' });
    } catch (error) {
        console.error(error);
        return res.status(500).send({ message: 'Error creating reservation' });
    }
};