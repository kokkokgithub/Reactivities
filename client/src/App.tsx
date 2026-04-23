import { List, ListItem, ListItemText, Typography } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [activities, setActivities] = useState<ACtivity[]>([]);

  useEffect(() => {
    axios.get<ACtivity[]>('https://localhost:5001/api/activities')
      .then(response => setActivities(response.data))
  }, [])

  return (
    <>
      <Typography variant = 'h3'>Reactivities</Typography>
      <List>
        {activities.map((activities) => (
          <ListItem key={activities.id}>
            <ListItemText>{activities.title}</ListItemText>
          </ListItem>
        ))}
      </List>
    </>
  )
}

export default App