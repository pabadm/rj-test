import { useState } from 'react';
import Alert from '../components/Alert';
import QrBox from '../components/QrBox';
import Tabs from '../components/Tabs';
import StateContext from '../components/StateContext';

const Home = () => {
  const tabData = () => [
    <QrBox userAccountCode={'8662794092'} key={8662794092} />,
    <QrBox userAccountCode={'1896194979'} key={1896194979} />,
    <QrBox userAccountCode={'8465321568'} key={8465321568} />,
    <QrBox userAccountCode={'3286126548'} key={3286126548} />,
  ];

  const [state, setState] = useState(0);
  const context = { state, setState };

  return (
    <div className="p-5 max-w-[max-content]">
      <StateContext.Provider value={context}>
        <StateContext.Consumer>
          {({ state }) => <Alert>Selected Tab: {state}</Alert>}
        </StateContext.Consumer>
        <div className="h-20" />
        <Tabs navItems={[0, 1, 2, 3]}>{tabData()}</Tabs>
      </StateContext.Provider>
    </div>
  );
};

export default Home;
