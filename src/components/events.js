import React from 'react'

    const Events = ({ events }) => {
      return (
        <div>
          <center><h1>Event List</h1></center>
          {events.map((event) => (
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">{event.name}</h5>
                <h6 class="card-subtitle mb-2 text-muted">{event.location}</h6>
                <p class="card-text">{event.start_time}</p>
                <p class="card-text">{event.end_time}</p>
              </div>
            </div>
          ))}
        </div>
      )
    };

    export default Events
