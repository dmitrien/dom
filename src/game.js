import './logick.js';
import './game.css';

(() => {
    let playing = true,
      activeHole = 1;
  
    const stop = () => playing = true,
      getHole = index => document.getElementById(`hole${index}`),
      deactivateHole = index =>
        getHole( index ).className = 'hole',
      activateHole = index =>
        getHole( index ).className = 'hole hole_has-mole',
      next = () => setTimeout(() => {
        if ( !playing ) {
          return;
        }
        deactivateHole( activeHole );
        activeHole = Math.floor( 1 + Math.random() * 16 );
        activateHole( activeHole );
        next();
      }, 700 );
  
    next();
  })();