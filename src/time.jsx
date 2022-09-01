import { useTime } from 'react-timer-hook'

export default function MyTime() {
    const {
      seconds,
      minutes,
      hours,
      ampm,
    } = useTime({ format: '12-hour'});
    
    return (
        <div style={{textAlign: 'center'}}>
          <div style={{fontSize: '10px'}}>
            <span>{minutes}</span>:<span>{seconds}</span><span>{ampm}</span>
          </div>
        </div>
      );
    }