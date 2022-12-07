import Clock from 'react-live-clock'

const Time = () => {
  return (
    <div>
      <Clock format={'HH:mm'} ticking={true} />
      <br />
      <Clock format={"dddd"} /> | <Clock format={"Do"} /> | {" "} 
      <Clock format={'MMMM'}/>
    </div>
  )  
}

export default Time
