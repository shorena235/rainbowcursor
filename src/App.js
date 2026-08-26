import React from 'react';          // Import React (required in older React versions, optional in new ones but good practice)
import SplashCursor from './SplashCursor';

function App() {
  return (
    <div>
<SplashCursor
  DENSITY_DISSIPATION={3.5}
  VELOCITY_DISSIPATION={2}
  PRESSURE={0.1}
  CURL={3}
  SPLAT_RADIUS={0.2}
  SPLAT_FORCE={6000}
  COLOR_UPDATE_SPEED={10}
  SHADING
  RAINBOW_MODE={false}
  COLOR="#FFFFFF"
/>
    </div>
  );
}

export default App;
