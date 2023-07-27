import { DefaultLayout } from '../../layout/DefaultLayout';

export const SignUp = () => {
  return (
    <DefaultLayout>
      <form className='form'>
        <h1>Signup</h1>

        <label htmlFor='name'>Name</label>
        <input type='text' id='name' name='name' placeholder='Your name' />

        <label htmlFor='username'>Username</label>
        <input type='text' id='username' name='username' placeholder='Your username' />

        <label htmlFor='password'>Password</label>
        <input type='password' id='password' name='password' placeholder='Your password' />

        <button>Create user</button>
      </form>
    </DefaultLayout>
  );
};
