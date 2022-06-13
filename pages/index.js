import Alert from '../components/Alert';
import QrBox from '../components/QrBox';
import Tabs from '../components/Tabs';
import StateContext from '../components/StateContext';
import React from 'react';

const homeFunction = () =>
  class Home extends React.Component {
    constructor(props) {
      super(props);

      this.tabData = () => [
        <QrBox userAccountCode={'8662794092'} key={8662794092} />,
        <QrBox userAccountCode={'1896194979'} key={1896194979} />,
        <QrBox userAccountCode={'8465321568'} key={8465321568} />,
        <QrBox userAccountCode={'3286126548'} key={3286126548} />,
      ];

      this.changeState = (state) => {
        this.setState(() => ({ state: state }));
      };

      this.state = {
        state: 0,
        setState: this.changeState,
      };
    }

    render() {
      return (
        <div className="p-5 max-w-[max-content]">
          <StateContext.Provider value={this.state}>
            <StateContext.Consumer>
              {({ state }) => <Alert>Selected Tab: {state}</Alert>}
            </StateContext.Consumer>
            <div className="h-20" />
            <Tabs navItems={[0, 1, 2, 3]}>{this.tabData()}</Tabs>
          </StateContext.Provider>
        </div>
      );
    }
  };

export default homeFunction();
