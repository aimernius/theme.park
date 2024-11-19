
 //Custom Text Header //
 // ACSII slant font

// Needs to be inside <section id="login" class="shadow">
// YOU MUST ESCAPE ANY SINGLE BACKSLASHES LIKE SO: \\

let custom_text_header = `
<div class="custom-text-header"> <pre>
////////////////////////////////////////////////////////////////////////////
// _____   ______         _______  _    _   _____  _______         _____  //
//|  __ \ |  ____|    /\ |__   __|| |  | | / ____||__   __| /\    |  __ \ //
//| |  | || |__      /  \   | |   | |__| || (___     | |   /  \   | |__) |//
//| |  | ||  __|    / /\ \  | |   |  __  | \___ \    | |  / /\ \  |  _  / //
//| |__| || |____  / ____ \ | |   | |  | | ____) |   | | / ____ \ | | \ \ //
//|_____/ |______|/_/    \_\|_|   |_|  |_||_____/    |_|/_/    \_\|_|  \_\//
////////////////////////////////////////////////////////////////////////////                                                                                                     
</pre> </div>
`;
document.getElementById("login").innerHTML += custom_text_header
