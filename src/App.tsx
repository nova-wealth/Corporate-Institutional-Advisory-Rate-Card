import { useState } from 'react';
import CorporateRateCard from './CorporateRateCard';
import LoadingSplash from './components/LoadingSplash';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {isLoading && <LoadingSplash onComplete={() => setIsLoading(false)} />}
      <CorporateRateCard />
    </>
  );
}

export default App;
