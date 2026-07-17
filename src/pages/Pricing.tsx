import "../styles/pricing.css";

import PricingCard from "../components/PricingCard";

const pricingPlans = [

{
id:1,
plan:"Starter",
price:"₹4,999",
features:[
"5 Pages",
"Responsive Design",
"Contact Form"
]
},

{
id:2,
plan:"Pro",
price:"₹8,999",
features:[
"10 Pages",
"Booking System",
"Blog",
"SEO"
]
},

{
id:3,
plan:"Growth",
price:"₹13,999",
features:[
"Unlimited Pages",
"E-Commerce",
"Admin Panel",
"Premium Support"
]
}

];

function Pricing(){

return(

<section className="pricing">

<h1>Pricing Plans</h1>

<p>

Choose the plan that best suits your business.

</p>

<div className="pricing-container">

{

pricingPlans.map((plan)=>(

<PricingCard

key={plan.id}

plan={plan.plan}

price={plan.price}

features={plan.features}

/>

))

}

</div>

</section>

);

}

export default Pricing;