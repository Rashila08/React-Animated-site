import React, {useState} from 'react'

const Contact = () => {
const [data, setData] = useState({
    name:"",
    phone:"",
    email:"",
    message:""
})
    const FormSubmit = (e) =>{
        e.preventDefault();
            alert(`${data.name} ${data.phone} ${data.email} ${data.message}`);
    }

    const InputEvent = (event) =>{
     const  {name, value} = event.target;
     setData((preValue)=>{
         return{
             ...preValue, [name] : value,
         }
     })
    }
    return (
        <>
            <div className="my-5">
                <h1 className="text-center">Contact Us</h1>
            </div>
            <div className="container contact_div">
                <div className="row">
                    <div className="col-md-6 col-md-10 mx-auto">
                        <form onSubmit={FormSubmit}>
                            <div class="mb-3">
                                <label class="form-label">Name</label>
                                <input type="text" class="form-control" id="exampleFormControlInput1" name="name" value={data.name} onChange={InputEvent} placeholder="Enter your Name" required />
                            </div>
                            <div class="mb-3">
                                <label class="form-label">Phone</label>
                                <input type="number" class="form-control" id="exampleFormControlInput1" name="phone" value={data.phone} onChange={InputEvent} placeholder="Enter your Phone" required />
                            </div>
                            <div class="mb-3">
                                <label class="form-label">Email</label>
                                <input type="email" class="form-control" id="exampleFormControlInput1" name="email" value={ data.email} onChange={InputEvent} placeholder="Enter your Email" required />
                            </div>
                            <div class="mb-3">
                                <label class="form-label">Message</label>
                                <textarea class="form-control" id="exampleFormControlTextarea1" name="message" value={data.message} onChange={InputEvent} rows="3" required></textarea>
                            </div>

                            <div class="col-12">
                                <button class="btn btn-outline-primary" type="submit">Submit form</button>
                            </div>
                        </form>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Contact