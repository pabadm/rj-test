import Alert from '../components/Alert'
import QrBox from '../components/QrBox'
import Tabs from '../components/Tabs'

const homeFunction = () => 
 function Home() {

  const tabData = () => () => [
    <QrBox userAccountCode={"8662794092"} />,
    <QrBox userAccountCode={"1896194979"} />,
    <QrBox userAccountCode={"8465321568"} />,
    <QrBox userAccountCode={"3286126548"} />
  ]

  return (<div className="p-5 max-w-[max-content]"><Alert>Info</Alert>
  <div className='h-20'/>
  <Tabs navItems={[0,1,2,3]}>{tabData()()}</Tabs>
  </div>)
}

export default homeFunction()