import React, { useState } from 'react';
import { Button, Box } from '@material-ui/core';
import { Add, Remove } from '@material-ui/icons';

function App() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100vh"
    >
      <Box marginRight={2}>
        <Button variant="contained" color="primary" onClick={handleIncrement}>
          <Add />
        </Button>
      </Box>
      <Box>
        <h1>{count}</h1>
      </Box>
      <Box marginLeft={2}>
        <Button variant="contained" color="secondary" onClick={handleDecrement}>
          <Remove />
        </Button>
      </Box>
    </Box>
  );
}

export default App;
