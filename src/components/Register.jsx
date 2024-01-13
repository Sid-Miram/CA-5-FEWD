import { useForm } from 'react-hook-form';
import styles from './Register.module.css';
import { Link } from 'react-router-dom';

const Register = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    window.confirm('Registration successful');
    console.log(data);
  };

  return (
    <div>
      <h1 className={styles.head}>Create Account</h1>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <div>
          <input
            type="text"
            className={styles.inputs}
            placeholder="Your Name"
            {...register('yourName', {
              required: 'Name is required',
              minLength: {
                value: 3,
                message: 'Name should be more than 3 characters',
              },
              maxLength: {
                value: 30,
                message: 'Name should be less than 30 characters',
              },
            })}
          />
          <p>{errors.yourName?.message}</p>
        </div>
        <br />
        <input
          type="type"
          className={styles.inputs}
          placeholder="Your Email"
          {...register('email', {
            required: 'Email is required',
            pattern: {
              value: /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-z]+/,
              message: 'Enter a valid Email',
            },
          })}
        />
        <p>{errors.email?.message}</p>
        <br />
        <input
          type="Password"
          className={styles.inputs}
          placeholder="Password"
          {...register('password', {
            required: 'Password is required',
            minLength: {
              value: 10,
              message: 'Password must be more than 10 characters',
            },
            pattern: {
              value: /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/,
              message: 'Password must contain at least one special character',
            },
          })}
        />
        <p>{errors.password?.message}</p>
        <br />
        <input
          type="Password"
          className={styles.inputs}
          placeholder="Re-Enter your password"
          {...register('reEnter', {
            required: 'Re-Enter your password',
            validate: (value) =>
              value === watch('password') || 'Password does not match',
          })}
        />
        <p>{errors.reEnter?.message}</p>
        <br />
        <button className={styles.btn} type="submit">
          SIGN UP
        </button>
        <p className={styles.bottom}>
          If you have already registered?{' '}
          <Link to="/" className={styles.click}>
            Click Here!
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Register;
