// pages/_app.js
import Head from 'next/head';
import InputForm from '../components/InputForm';

function App() {
  return (
    <div>
      <Head>
        <title>YOUR_ROLL_NUMBER</title>
      </Head>
      <InputForm />
    </div>
  );
}

export default App;