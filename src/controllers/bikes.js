const getAllBikes = (req,res)=>{
    const {filter} = req.query;

    if (filter){
        const filteredBikes = bikes.filter((bike)=>{
                return bike.type.toUpperCase() === filter.toUpperCase();
        });

        res.status(200).json({data: filteredBikes});
    } else{
        res.status(200).json({data: bikes});
    }
}

const getBikeById = (req,res)=>{
    const {id} = req.params;

    const bike = bikes.find((bike)=>{
            return bike.id.toString=== id;
    });
    res.status(200).json({data: bike})
}

const createBike = (req, res)=>{
    const newBike ={
        name: req.body.name,
        id: Date.now(),
    };
    
    bikes.push(newBike)
    res.status(201).json({data: newBike})
}

const updatedBikeById = (req, res)=>{
    const {id}= req.params;
    const {name}= req.body;
    //añadir codigo para asegurar los campos requeridos y controlar errores
    //simulacion actualizacion db?
    bikes = bikes.map((bike)=>{
        if (bike.id.toString() === id){
            return{
                ...bike,
                name,
            };
        } else{
            return bike;
        }
    });
    //simulacion busqueda db actualizado?
    const updatedBike = bikes.find((bike)=> bike.id.toString() === id);
    res.status(200).json({data: updatedBike});
}

const deleteBike = (req, res)=>{
    const {id}= req.params;

    bikes = bikes.filter((bike)=> {
        return bike.id.toString() !==id;
    });

    res.status(200).json({data: 'ok'})
}

module.exports = {
    getAllBikes, getBikeById, createBike, updatedBikeById, deleteBike
}