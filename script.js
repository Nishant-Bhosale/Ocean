const trashContainer = document.querySelector('.trash-container');

const moneyElem = document.querySelector('.money');

const currencyFormatter = new Intl.NumberFormat("en-us", {
   style: "currency",
   currency: "USD",
   maximumFractionDigits: 0
})

const trashFormatter = new Intl.NumberFormat("en-us", {
   minimumIntegerDigits: 8,
   maximumFractionDigits: 0,
   useGrouping: false
})
const MAX_MONEY_RAISED = 30000000;

setupTrash();

async function setupTrash(){
   const amountRaised = await fetch("https://tscache.com/donation_total.json").then(res => 
      res.json()
   ).then(data => 
      data.count
   )

   moneyElem.innerText = currencyFormatter.format(amountRaised );

   const amountLeftToRaise = Math.max(MAX_MONEY_RAISED - amountRaised, 0);

   const stringifiedAmount = trashFormatter.format(amountRaised);

   const trashAmount = {
      xxl: {
         amount: parseInt(`${stringifiedAmount[0]}${stringifiedAmount[1]}`),
         icon: "bag"
      },
      xl:{
         amount: parseInt(stringifiedAmount[2]),
         icon: "takeout"
      },
      lg:{
         amount: parseInt(stringifiedAmount[3]),
         icon: "headphones"
      },
      md:{
         amount: parseInt(stringifiedAmount[4]),
         icon: "phone"
      },
      sm:{
         amount: parseInt(stringifiedAmount[4]),
         icon: "toy-car"
      },
      xs:{
         amount: parseInt(stringifiedAmount[4]),
         icon: "bottle"
      },
   }

   console.log(amountLeftToRaise, trashAmount)
}