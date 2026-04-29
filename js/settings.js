function openSettings(){
  settingsPanel.classList.remove("hidden");
}

function saveSettings(){
  localStorage.setItem("dark",darkModeToggle.checked);
  if(localStorage.getItem("dark")==="true"){
    document.body.classList.add("dark-mode");
  }
}
