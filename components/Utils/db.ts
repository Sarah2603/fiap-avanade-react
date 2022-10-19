import TypeDb from "../../types/TypeDb";
const db:Array<TypeDb> = [
{
        id: 1,
        type: "pix", 
        amount: 100,
        date: '2020-01-01',
        description: "Pizza Galera",
        operation: "debit"
},
{
    id: 2,
    type: "debit", 
    amount: 40,
    date: '2020-01-10',
    description: "Gasolina",
    operation: "debit"
},
{
    id: 3,
    type: "ted", 
    amount: 150000,
    date: '2020-01-10',
    description: "salário",
    operation: "credit"
},
]

export default db;


