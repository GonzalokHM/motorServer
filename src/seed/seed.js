const seed = {
    cars: [{
        name: 'Chaser (JZX100)',
        Brand: 'Toyota',
        country: 'Japan',
        Transmision: 'FR',
        Year: '1996',
        engine:'1JZ-GTE',
        weigh: '1450 kg',
        _vehicleId: 1,
        _driver: 1
    },{
        name: 'RX-7 fc3s',
        Brand: 'Mazda',
        country: 'Japan',
        Transmision: 'FR',
        Year: '1989',
        engine:'13B T',
        weigh: '1220 kg',
        _vehicleId: 2,
        _driver: 1
    },{
        name: 'Sprinter Trueno (AE86)',
        Brand: 'Toyota',
        country: 'Japan',
        Transmision: 'FR',
        Year: '1996',
        engine:'4A-GEU',
        weigh: '960 kg',
        _vehicleId: 3,
        _driver: 2
    },{
        name: 'Silvia 200sx (s14)zenki',
        Brand: 'Nisan',
        country: 'Japan',
        Transmision: 'FR',
        Year: '1989',
        engine:'SR20 DET',
        weigh: '1253 kg',
        _vehicleId:4,
        _driver: 2
    }],

    bikes: [{
        name: 'Ninja ZX6-R',
        Brand: 'Kawasaki',
        country: 'Japan',
        weigh: '190 kg',
        HP: '128 cv',
        Year: '2010',
        _vehicleId: 5,
        _driver: 1
    },{
        name: 'Ninja ZX10-R',
        Brand: 'Kawasaki',
        country: 'Japan',
        weigh: '206 kg',
        HP: '210 cv',
        year: '2016',
        _vehicleId: 6
    }],

    drivers: [{
        name:'Gonzalo',
        surname: 'Hernando',
        country: 'spain',
        _driverId: 1,
        _cars:[1,2],
        _bikes: [5]
    },{
        name: 'Keiichi' ,
        surname: 'Tsuchiya',
        country: 'Japan',
        _driverId: 2,
        _cars: [3,4],
        _bikes: [6]
    }
]
}

module.exports= seed;