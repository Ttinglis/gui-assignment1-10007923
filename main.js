const {app, BrowserWindow} = require('electron')
const path = require('path')
const url = require('url')

let win

function createWindow () {
  win = new BrowserWindow({width: 800, height: 600})
  win.loadURL(url.format({
    pathname: path.join(__dirname, 'index.html'),
    protocol: 'file:',
    slashes: true
  }))

  //win.webContents.openDevTools()

  win.on('closed', () => {
    win = null
  })
}

app.on('ready', createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (win === null) {
    createWindow()
  }
})

function backgroundColor(){
    var input = document.querySelectorAll("input");
            var red = document.getElementById("red").value,
                green = document.getElementById("green").value,
                blue = document.getElementById("blue").value;
                document.body.style.backgroundColor = "rgb(" + red + ", " + green + ", " + blue + ")";
}

function resetColor(){
  document.body.style.backgroundColor = "white";
  document.getElementById("red").value=255;
  document.getElementById("green").value=255;
  document.getElementById("blue").value=255;
  document.getElementById("display").style.background="white";
  document.getElementById('RedOutput').value=255; 
  document.getElementById('BlueOutput').value=255; 
  document.getElementById('GreenOutput').value=255; 

}
function updateRedOutput(val) {
          document.getElementById('RedOutput').value=val; 
}
function updateBlueOutput(val) {
          document.getElementById('BlueOutput').value=val; 
}
function updateGreenOutput(val) {
          document.getElementById('GreenOutput').value=val; 
}
        
        