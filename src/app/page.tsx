import Contactus from './CTA/Contactus'
import Customer from './Customer/Customer'
import Solutions from './Solutions/Solutions'
import WhyUs from './why-us/Whyus'

const page = () => {
  return (
    <div>
<div className="mt-[-100px] ">
         <Solutions />
         <WhyUs />
        <Customer />
        <Contactus/>
      </div>

    </div>
  )
}

export default page