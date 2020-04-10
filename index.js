class Coffee {
    constructor(obj = {}){
    this.bean = obj.bean,
    this.method = obj.method
    this.category = obj.category
    }
}

// class extend 
class Cafe extends Coffee {
    constructor(obj = {}){
        super(obj)
        this.name = obj.name 
    }
    
}
const detailCafe = new Cafe ({
    
})

console.log(detailCafe);

class Location extends Cafe {
    constructor(obj = {}){
    super(obj)
    this.long = obj.long
    this.lat = obj.lat
    }
}

const locationMap = new Location ({
    bean: ['Gayo red honey','Sidikalang' ,{robusta : 'Kapal Tanker'}],
    method : 'Manual Brewing ',
    category : 'Arabica',
    name: 'Seven Days',
    long : '-3444442333',
    lat: '322222 -2'
})

console.log(locationMap);
