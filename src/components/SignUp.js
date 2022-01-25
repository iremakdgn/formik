import React from 'react';
import { useFormik} from 'formik';

import validationSchema from './validation';

function SignUp() {
    const formik = useFormik({
        initialValues: {
          email: '',
          password:'',
          passwordConfirm:""
        },
        onSubmit: values => {
          console.log(values);
        },

        validationSchema,
      });
  return <div>
      <form onSubmit={formik.handleSubmit}>
        <label>Email</label>
        <input
          name="email"
          placeholder="jane@acme.com"
          type="email"
          onChange={formik.handleChange}
        />
        <br></br>
        <br></br>
        <label>Password</label>
        <input
          name="password"
          type="password"
          onChange={formik.handleChange}
        />
        <br></br>
        <br></br>

        <label>Confirm Password</label>
        <input
          name="passwordConfirm"
          type="passwordConfirm"
          onChange={formik.handleChange}
        />
        
        <br></br>
        <button type="submit">Submit</button>

        <br></br>

        {JSON.stringify(formik.values)}
      </form>

  </div>;
}

export default SignUp;
