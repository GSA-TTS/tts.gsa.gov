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
