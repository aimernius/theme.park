
 //Custom Text Header //
 // ACSII slant font

// Needs to be inside <section id="login" class="shadow">
// YOU MUST ESCAPE ANY SINGLE BACKSLASHES LIKE SO: \\

let custom_text_header = `
<div class="custom-text-header"> <pre>

 _______   _______     ___   .___________. __    __       _______.___________.    ___      .______      
|       \ |   ____|   /   \  |           ||  |  |  |     /       |           |   /   \     |   _  \     
|  .--.  ||  |__     /  ^  \ `---|  |----`|  |__|  |    |   (----`---|  |----`  /  ^  \    |  |_)  |    
|  |  |  ||   __|   /  /_\  \    |  |     |   __   |     \   \       |  |      /  /_\  \   |      /     
|  '--'  ||  |____ /  _____  \   |  |     |  |  |  | .----)   |      |  |     /  _____  \  |  |\  \----.
|_______/ |_______/__/     \__\  |__|     |__|  |__| |_______/       |__|    /__/     \__\ | _| `._____|
                                                                                                        
</pre> </div>
`;
document.getElementById("login").innerHTML += custom_text_header
