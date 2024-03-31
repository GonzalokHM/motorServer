const getAllCars = (req,res)=>{
    const {filter} = req.query;

    if (filter){
        const filteredCars = cars.filter((car)=>{
                return car.type.toUpperCase() === filter.toUpperCase();
        });

        res.status(200).json({data: filteredCars});
    } else{
        res.status(200).json({data: cars});
    }
}

const getCarById = (req,res)=>{
    const {id} = req.params;

    const car = cars.find((car)=>{
            return car.id.toString=== id;
    });
    res.status(200).json({data: car})
}

const createCar = (req, res)=>{
    console.log(req.body);
    const newCar ={
        name: req.body.name,
        id: cars.length + 1,
    };
    
    cars.push(newCar)
    res.status(201).json({data: newCar})
}

const updatedCarById = (req, res)=>{
    const {id}= req.params;
    const {name}= req.body;
    //añadir codigo para asegurar los campos requeridos y controlar errores
    //simulacion actualizacion db?
    cars = cars.map((car)=>{
        if (car.id.toString() === id){
            return{
                ...car,
                name,
            };
        } else{
            return car;
        }
    });
    //simulacion busqueda db actualizado?
    const updatedCar = cars.find((car)=> car.id.toString() === id);
    res.status(200).json({data: updatedCar});
}

const deleteCar = (req, res)=>{
    const {id}= req.params;

    cars = cars.filter((car)=> {
        return car.id.toString() !==id;
    });

    res.status(200).json({data: 'ok'})
}

module.exports = {
    getAllCars, getCarById, createCar, updatedCarById, deleteCar
}