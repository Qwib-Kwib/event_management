import './demo.css';

function Demo() {
  return (
    <div className='body'>
      <div className='container'>
        <div className='logo-form'>
          <img src='logo.png' alt='Event Logo' className='logo-image' />
        </div>

        <div className='form'>
          <form>
            <h1>PUBLISH YOUR EVENT</h1>
            <h3>Step 1</h3>
            <div className='form-group'>
              <label>Name</label>
              <div className='name-inputs'>
                <input type='text' placeholder='First Name' required />
                <input type='text' placeholder='Last Name' required />
              </div>
            </div>

            <div className='form-group'>
              <label>Event Name *</label>
              <input type='text' placeholder='Event Name' required />
            </div>

            <div className='form-group'>
              <label>Email *</label>
              <input type='email' placeholder='Email' required />
            </div>

            <div className='form-group'>
              <label htmlFor='eventType'>Event Type *</label>
              <select id='eventType' required>
                <option value='' disabled selected>
                  Select Here
                </option>
                <option value='venue'>
                  Venue - Host event at a physical location and manage check-ins at the door
                </option>
                <option value='online'>
                  Online - Host event at any online platform and easily share joining instructions with ticket buyers
                </option>
              </select>
            </div>

            <div className='form-group'>
              <label>Please share a bit about your event(s) + event requirements. *</label>
              <textarea placeholder='Event details' required></textarea>
            </div>

            <button type='submit' className='submit-button'>
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Demo;
