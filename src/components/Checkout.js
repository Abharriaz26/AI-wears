import StripeCheckout from 'react-stripe-checkout';

const Checkout = ({price}) => {
    const handler = (token)=>{
        console.log(token)
    }
  return (
    <StripeCheckout
    amount={price*100}
    token={handler}

name="Three Comma Co." // the pop-in header title
  description="Big Data Stuff" // the pop-in header subtitle
  image="https://www.vidhub.co/assets/logos/vidhub-icon-2e5c629f64ced5598a56387d4e3d0c7c.png" // the pop-in header image (default none)
  ComponentClass="div"
  panelLabel="Give Money" // prepended to the amount in the bottom pay button
  amount={price} // cents
  currency="USD"
  stripeKey="pk_test_51Oo4K0HVu7vz5Br29riqHBblaA0lZTHeC0ktdNgMAlZr83heFGSKVoU24bM1QRXYAfBX3dtCkQQ7GVC8aFTeh4J300kLtV63kC"
  email="info@vidhub.co"
  // Note: Enabling either address option will give the user the ability to
  // fill out both. Addresses are sent as a second parameter in the token callback.
  shippingAddress

  >

    Pay Now

    </StripeCheckout>
  )
}

export default Checkout