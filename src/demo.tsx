import './demo.css';

function Demo() {
  return (
    <div className='body'>
      <div className='container'>
        <div className='logo'>
          <img src='logo.png' alt='Event chuchu ' className='logo-image' />
        </div>
        <div className='form'>
          <form>
            <div className='form-group'>
              <label>Name</label>
              <div className='name-inputs'>
                <input type='text' placeholder='First Name' />
                <input type='text' placeholder='Last Name' />
              </div>
            </div>

            <div className='form-group'>
                <div className='org_name'>
                    <label>Event Name *</label>
                    <input type='text' placeholder='Event Name' required />
                </div>
            </div>

            <div className='form-group'>
                <div className='email'>
                    <label>Email *</label>
                    <input type='email' placeholder='Email' required />
                </div>
            </div>

            <div className='form-group'>
              <label>Please share a bit about your event(s) + event requirements. *</label>
              <textarea placeholder='Event details' required></textarea>
            </div>


            <button type='submit' className='submit-button'>Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Demo;