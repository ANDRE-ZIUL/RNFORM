import { AccountFormProvider } from './src/contexts/AccoutFormContext';
import { Routes } from './src/routes';

export default function App() {
  return (
    <AccountFormProvider>
      <Routes />
    </AccountFormProvider>
  );
}
