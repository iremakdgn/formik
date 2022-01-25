import './App.css';
import { useFormik} from 'formik';

function App() {
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      gender:'female',
      hobiex:[], //tipi array olacak çünkü birden fazla seçebilir.
      country:"Turkey"
    },
    onSubmit: values => {
      console.log(values);
    },
  });

  return (
    <div className="App">
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="firstName">First Name</label>
        <input name="firstName" placeholder="Jane" onChange={formik.handleChange} />

        <br></br>
        <br></br>

        <label htmlFor="lastName">Last Name</label>
        <input name="lastName" placeholder="Doe" onChange={formik.handleChange} />

<br></br>
<br></br>
        <label htmlFor="email">Email</label>
        <input
          name="email"
          placeholder="jane@acme.com"
          type="email"
          onChange={formik.handleChange}
        />
        <br></br>
        <br></br>

        <div>
          Football
          <input type="checkbox" name='hobies' value="Play Football"  onChange={formik.handleChange}/>
        </div>

        <div>
          Cinema
          <input type="checkbox"  name='hobies' value="Cinema"  onChange={formik.handleChange} />
        </div>

        <div>
          Photography
          <input type="checkbox"  name='hobies' value="Photography"  onChange={formik.handleChange} />
        </div>
        
        <br></br>
        <br></br>


        <select name='country' value={formik.values.country} onChange={formik.handleChange}>
          <option value="turkey">Turkey</option>
          <option value="england">England</option>
          <option value="franche">Franche</option>
        </select>
        <br></br>
        <br></br>

        <span>Male</span>
        <input type="radio" name="gender" value="male" onChange={formik.handleChange} checked={formik.values.gender==="male"} />
        <span >Female</span>
        <input type="radio" name="gender" value="female" onChange={formik.handleChange} checked={formik.values.gender==="female"} />

        <br></br>
        <button type="submit">Submit</button>

        <br></br>

        {JSON.stringify(formik.values)}
      </form>

      {/* <Form>
        <label htmlFor="firstName">First Name</label>
        <Field id="firstName" name="firstName" placeholder="Jane" />

        <br></br>
        <br></br>

        <label htmlFor="lastName">Last Name</label>
        <Field id="lastName" name="lastName" placeholder="Doe" />

<br></br>
<br></br>
        <label htmlFor="email">Email</label>
        <Field
          id="email"
          name="email"
          placeholder="jane@acme.com"
          type="email"
        />
        <br></br>
        <button type="submit">Submit</button>
      </Form> */}
    </div>
  );
}

export default App;
