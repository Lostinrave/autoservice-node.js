const fs=require('fs');

const getServices=()=>{
    const data=fs.readFileSync('./data/services.json').toString();
    const services=JSON.parse(data);
    return services;
};

module.exports={getServices};