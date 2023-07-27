import { DefaultLayout } from '../../layout/DefaultLayout';

export const Login = () => {
  return (
    <DefaultLayout>
      <form className='form'>
        <h1>Login</h1>
        <label htmlFor='username'>Username</label>
        <input type='text' id='username' name='username' placeholder='Your username' />

        <label htmlFor='password'>Password</label>
        <input type='password' id='password' name='password' placeholder='Your password' />

        <button>Login</button>
      </form>
    </DefaultLayout>
  );
};
