const jobs=[
    {id:1,Name:'Aliya',isActive:true},
    {id:2,Name:'Alina',isActive:false},
    {id:3,Name:'Aliza',isActive:false}
];
const result=jobs.filter(function(j){
    return !j.isActive; 
});
// Arrow Fnct
const result1=jobs.filter(j=> j.isActive);   
console.log(result1);

const result2=jobs.filter(j=> j.Name=='Aliza');   
console.log(result2);
