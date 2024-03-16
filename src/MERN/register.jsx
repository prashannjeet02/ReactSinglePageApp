import { useFormik } from "formik";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const Register = () => {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      userId: "",
      UserName: "",
      password: "",
      email: "",
      mobile: "",
    },
    onSubmit: (values) => {
      axios({
        method: "post",
        url: "http://127.0.0.1:5000/addcustomer",
        data: values,
      });
      alert("Registration Successfull");
      navigate("/login");
    },
  });
  return (
    <div className="container-fluid">
      <h2>User Registration</h2>
      <form onSubmit={formik.handleSubmit}>
        <dl>
          <dt>UserId</dt>
          <dd>
            <input type="text" name="userId" onChange={formik.handleChange} />
          </dd>
          <dt>Name</dt>
          <dd>
            <input type="text" name="UserName" onChange={formik.handleChange} />
          </dd>
          <dt>Password</dt>
          <dd>
            <input type="text" name="password" onChange={formik.handleChange} />
          </dd>
          <dt>Email</dt>
          <dd>
            <input type="text" name="email" onChange={formik.handleChange} />
          </dd>
          <dt>Mobile</dt>
          <dd>
            <input type="text" name="mobile" onChange={formik.handleChange} />
          </dd>
        </dl>
        <button>Register</button>
      </form>
    </div>
  );
};
