const defineSpinner = () => {
  const divSpineer =document.createElement("div");
  const spinner = document.createElement("span");
  divSpineer.className = "spinner-border text-light"; 
  divSpineer.id = "loading";
  divSpineer.role = "status";
  spinner.className = "visually-hidden";
  spinner.innerText = "Loading..."
  divSpineer.appendChild(spinner );

  return divSpineer;
}

function showSpinner() {
  const loadingDiv = document.getElementById('loading');
  loadingDiv.style.visibility = 'visible';
}

function hideSpinner() {
  const loadingDiv =  document.getElementById('loading');
  loadingDiv.style.visibility = 'hidden';
}

const spinnner = (element) => {
   element.appendChild(defineSpinner());
    hideSpinner();
  }

export {showSpinner, hideSpinner,spinnner}