//
type pizza = { id: number; name: string; price: number };
type order = { id: number; selected: pizza; status: "orderd" | "completed" };

const menu: pizza[] = [
  { id: 0, name: "margherita", price: 100 },
  { id: 1, name: "veggie", price: 150 },
];
let cashInRegister: number = 100;
let orederQueue: order[] = [];

function addNewPizza(newPizza: Omit<pizza,"id">):pizza {
  let pizzaid = menu.length;
  let newpizza: pizza = {
    id: pizzaid,
    ...newPizza
  };
  menu.push(newpizza);
  return newpizza;
}
let orderId = 0;
function placeOrder(name: string) {
  const selectedPizza = menu.find((menu) => menu.name == name);
  if (selectedPizza) {
    cashInRegister += selectedPizza.price;
    //let status:status="orderd";
    let newOrder: order = {
      id: orderId++,
      selected: selectedPizza,
      status: "orderd",
    };
    if (newOrder) {
      orederQueue.push(newOrder);
    }
  } else {
    console.log("not found");
  }
}

function completeOrder(orderId: number) {
  const order = orederQueue.find((order) => order.id == orderId);

  if (order) {
    order.status = "completed";
  }
}

addNewPizza({ name: "cheese", price: 350 });
placeOrder("cheese");

console.log(menu);
console.log(cashInRegister);
console.log(orederQueue);

type user = "admin" | "cashier";
let casier: user = "admin";

function getPizzaDetails(identifier: string | number): pizza {
  let pizza_details:pizza={id:0,name:"",price:0};
  if (typeof identifier == "string") {
    const pizza_info = menu.find((pizza) => pizza.name == identifier);
    if (pizza_info) {
      pizza_details=pizza_info;
    }
  } else if (typeof identifier == "number") {
    const pizza_info = menu.find((pizza) => pizza.id == identifier);
    if (pizza_info) {
     pizza_details=pizza_info;
    }
  }
  return pizza_details;
 
  type User={
    id:number
    name:string
    role:string
  }
  const users:User[]=[
    {id:0,name:"john",role:"admin"}
  ]
  function addNewUser(newUser:Omit<User,"id">):User{
        let id=users.length;
        const newuser:User={id:id,...newUser};
        users.push(newuser);
        return newuser;
  }
  addNewUser({name:"tom",role:"cashier"});

}
const names=["alice","bob"];
const age=[23,25];

function getArray<T>(arr:T[]){
    return arr[arr.length-1];
}
getArray(names);

function addItems<T>(array:T[],items:T){
    array.push(items);
    return array;
}
addItems<order>(orederQueue,{id:5,selected:{id:5,name:"dd",price:100},status:"orderd"})
addItems(menu,{id:5,name:"",price:100});