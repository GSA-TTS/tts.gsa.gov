require("@uswds/uswds");

const applyMessage = () => {
  // This looks chaotic but every '\' needs escaped
  const message = `
      ___           ___           ___     
     /\\  \\         /\\  \\         /\\  \\    
     \\:\\  \\        \\:\\  \\       /::\\  \\   
      \\:\\  \\        \\:\\  \\     /:/\\ \\  \\  
      /::\\  \\       /::\\  \\   _\\:\\~\\ \\  \\
     /:/\\:\\__\\     /:/\\:\\__\\ /\\ \\:\\ \\ \\__\\   join.tts.gsa.gov
    /:/  \\/__/    /:/  \\/__/ \\:\\ \\:\\ \\/__/
   /:/  /        /:/  /       \\:\\ \\:\\__\\  
   \\/__/         \\/__/         \\:\\/:/  /  
                                \\::/  /   
                                 \\/__/
`;
  console.log(message);
};

applyMessage();

// Hide an info session if it's in the past.
function hidePastInfoSessions() {
  const now = new Date().getTime();
  const infoSessions = document.querySelectorAll(".info-sessions-list li");
  infoSessions.forEach(session => {
    const session_timestamp = session.getAttribute('data-session-end-timestamp');
    if ( session_timestamp > now ) {
      session.style.display = 'none';
    }
  });
}
hidePastInfoSessions();
