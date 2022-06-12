import { useState } from 'react';
import Dropdown from './components/Dropdown';
import Layout from './components/Layout';

const items = [
  {
    lang: 'First',
    id: 1,
  },
  {
    lang: 'Second',
    id: 2,
  },
  {
    lang: 'Third',
    id: 3,
  },
  {
    lang: 'Fourth',
    id: 4,
  },
  {
    lang: 'Fifth',
    id: 5,
  },
  {
    lang: 'Last One',
    id: 6,
  },
];

function App() {
  const [multiSelect, setMultiSelect] = useState<boolean>(true);

  return (
    <div className="app">
      <Layout>
        <div className="content-center">
          <h3
            className="multiselect-title"
             onClick={() => setMultiSelect(!multiSelect)}>
            Multiselect
          </h3>
        </div>
        <Dropdown items={items} multiSelect={multiSelect} />
      </Layout>
    </div>
  );
}

export default App;
