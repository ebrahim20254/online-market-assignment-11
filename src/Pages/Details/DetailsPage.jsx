import Swal from "sweetalert2";


const DetailsPage = () => {

    const handleBookService = event =>{
        event.preventDefault()

        const form = event.target;
        const price = form.price.value;
        const date = form.date.value;
        const yourEmail = form.yourEmail.value;
        const buyerEmail = form.buyerEmail.value;
       console.log(price, date, yourEmail, buyerEmail);

        const bid = {
            price, date, yourEmail, buyerEmail
       }
       console.log(bid);

        // send bidding to server 
        fetch('http://localhost:5000/bid',{
            method: 'POST',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(bid)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);

            if(data.insertedId){
                Swal.fire({
                    title: 'success',
                    text: 'add job successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })
            }
        })

   }
    return (
        <div className="bg-[#F4F3F0] w-[60%] mx-auto text-center text-3xl my-6 card-body rounded-xl">
            <form  onSubmit={handleBookService }>
               <div className=" grid grid-cols-1 md:grid-cols-2 gap-6">
               <div className="form-control">
                    <label className="label">
                        <span className="label-text">Price</span>
                    </label>
                    <input type="text" name="price" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">date</span>
                    </label>
                    <input type="date" name="date" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email"  name="yourEmail"className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Buyer Email</span>
                    </label>
                    <input type="email" name="buyerEmail" className="input input-bordered" required />
                </div>
               </div>
                <div className="form-control mt-6">
                    <input className="btn btn-warning" type="submit" value="Posted Job" />
                </div>
            </form>
    </div>
    );
};

export default DetailsPage;