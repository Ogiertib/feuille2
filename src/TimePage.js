import React, { useState } from 'react';

function TimeTracker() {
  const [monday, setMonday] = useState({ start: '', end: '', lunchStart: '', lunchEnd: '' });
  const [tuesday, setTuesday] = useState({ start: '', end: '', lunchStart: '', lunchEnd: '' });
  const [wednesday, setWednesday] = useState({ start: '', end: '', lunchStart: '', lunchEnd: '' });
  const [thursday, setThursday] = useState({ start: '', end: '', lunchStart: '', lunchEnd: '' });
  const [friday, setFriday] = useState({ start: '', end: '', lunchStart: '', lunchEnd: '' });

  const calculateTotalHours = () => {
    const days = [monday, tuesday, wednesday, thursday, friday];
    let totalHours = 0;
    for (const day of days) {
      const startTime = new Date(`2024-05-06T${day.start}`);
      const endTime = new Date(`2024-05-06T${day.end}`);
      const lunchStart = new Date(`2024-05-06T${day.lunchStart}`);
      const lunchEnd = new Date(`2024-05-06T${day.lunchEnd}`);
      
      if (!isNaN(startTime.getTime()) && !isNaN(endTime.getTime()) && startTime <= endTime) {
        let hoursWorked = (endTime.getTime() - startTime.getTime()) / (1000 * 60 * 60);

        if (!isNaN(lunchStart.getTime()) && !isNaN(lunchEnd.getTime()) && lunchStart <= lunchEnd) {
          const lunchHours = (lunchEnd.getTime() - lunchStart.getTime()) / (1000 * 60 * 60);
          hoursWorked -= lunchHours;
        }
        
        totalHours += hoursWorked;
      }
    }
    return totalHours;
  };

  return (
    <div>
      <h2>Enter le temps de travail de la semaine</h2>
      <div>
        <p>
         <label>Monday</label>
           temps de travail : 
          <input type="time" value={monday.start} onChange={(e) => setMonday({ ...monday, start: e.target.value })} />
          <input type="time" value={monday.end} onChange={(e) => setMonday({ ...monday, end: e.target.value })} />
          Pause repas : 
          <input type="time" value={monday.lunchStart} onChange={(e) => setMonday({ ...monday, lunchStart: e.target.value })} />
          <input type="time" value={monday.lunchEnd} onChange={(e) => setMonday({ ...monday, lunchEnd: e.target.value })} />
        </p>
      </div>
      <div>
        <label>Tuesday</label>
        <input type="time" value={tuesday.start} onChange={(e) => setTuesday({ ...tuesday, start: e.target.value })} />
        <input type="time" value={tuesday.end} onChange={(e) => setTuesday({ ...tuesday, end: e.target.value })} />
        <input type="time" value={tuesday.lunchStart} onChange={(e) => setTuesday({ ...tuesday, lunchStart: e.target.value })} />
        <input type="time" value={tuesday.lunchEnd} onChange={(e) => setTuesday({ ...tuesday, lunchEnd: e.target.value })} />
      </div>
      <div>
        <label>Wednesday</label>
        <input type="time" value={wednesday.start} onChange={(e) => setWednesday({ ...wednesday, start: e.target.value })} />
        <input type="time" value={wednesday.end} onChange={(e) => setWednesday({ ...wednesday, end: e.target.value })} />
        <input type="time" value={wednesday.lunchStart} onChange={(e) => setWednesday({ ...wednesday, lunchStart: e.target.value })} />
        <input type="time" value={wednesday.lunchEnd} onChange={(e) => setWednesday({ ...wednesday, lunchEnd: e.target.value })} />
      </div>
      <div>
        <label>Thursday</label>
        <input type="time" value={thursday.start} onChange={(e) => setThursday({ ...thursday, start: e.target.value })} />
        <input type="time" value={thursday.end} onChange={(e) => setThursday({ ...thursday, end: e.target.value })} />
        <input type="time" value={thursday.lunchStart} onChange={(e) => setThursday({ ...thursday, lunchStart: e.target.value })} />
        <input type="time" value={thursday.lunchEnd} onChange={(e) => setThursday({ ...thursday, lunchEnd: e.target.value })} />
      </div>
      <div>
        <label>Friday</label>
        <input type="time" value={friday.start} onChange={(e) => setFriday({ ...friday, start: e.target.value })} />
        <input type="time" value={friday.end} onChange={(e) => setFriday({ ...friday, end: e.target.value })} />
        <input type="time" value={friday.lunchStart} onChange={(e) => setFriday({ ...friday, lunchStart: e.target.value })} />
        <input type="time" value={friday.lunchEnd} onChange={(e) => setFriday({ ...friday, lunchEnd: e.target.value })} />
      </div>
      <div>
        <h3>Total Work Hours: {calculateTotalHours()} hours</h3>
      </div>
    </div>
  );
}

export default TimeTracker;
