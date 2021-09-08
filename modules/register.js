const fs=require('fs');

const getRegister=()=>{
   const data=fs.readFileSync('./data/register.json').toString();
   const register=JSON.parse(data);
   return register;
};

const addRegister=(brand,model,year,phone,date,message)=>{
    let register=getRegister();
    register.push({
       brand:brand,
       model:model,
       year:year,
       phone:phone,
       date:date,
       message:message
    });
    fs.writeFileSync('./data/register.json', JSON.stringify(register));
};

const deleteRegister=(nr)=>{
   let register=getRegister();
   register.splice(nr,1);
   fs.writeFileSync('./data/register.json', JSON.stringify(register));
}

module.exports={getRegister, addRegister, deleteRegister};