const packageDisplay = document.getElementById('package-list');

let heavy = false;
let fragile = false;
let priority = false;

const packages = [{
  priorityLevel: 'express',
  isFragile: false,
  weight: 2,
  to: 'Sir Harrington IV',
  trackingNumber: '1324kjs'
},
{
  priorityLevel: 'standard',
  isFragile: true,
  weight: .5,
  to: 'Master Mercutio',
  trackingNumber: '1325sdk'
},
{
  priorityLevel: 'free',
  isFragile: true,
  weight: .5,
  to: 'Mistress Ravenfeather',
  trackingNumber: 'jffd147'
},
{
  priorityLevel: 'standard',
  isFragile: false,
  weight: 4,
  to: 'B. Robert Brown',
  trackingNumber: 'acdc145'
},
{
  priorityLevel: 'express',
  isFragile: true,
  weight: 6,
  to: 'Chancellor Wallace'
},
{
  priorityLevel: 'standard',
  isFragile: false,
  weight: 5,
  to: 'Sarah Sharm',
  trackingNumber: '8081baz'
},
{
  priorityLevel: 'free',
  isFragile: true,
  weight: 12,
  to: 'Tae Lien',
  trackingNumber: 'suz2367'
}]

function drawPackages(packageList) {
  packageList.forEach(package => {
    if (package.isFragile) {
      packageDisplay.innerHTML += `
<div class="row package mb-3 mx-2">
  <div class="col-3 d-flex flex-column align-items-center">
    <p class="bold-text">To: ${package.to}</p>
    <p class="bold-text">ID: ${package.trackingNumber}</p>
  </div>

  <div class="col-3 d-flex align-items-center justify-content-center">
    <p class="bold-text">LBS: ${package.weight}</p>
  </div>

  <div class="col-3 d-flex align-items-center justify-content-center">
    <p class="bolder-text">${package.priorityLevel}</p>
  </div>

  <div class="col-3 d-flex align-items-center flex-column justify-content-center">
    <p class="bold-text text-danger">FRAGILE</p>
  </div>
</div>
  `
    } else {
      packageDisplay.innerHTML += `
<div class="row package mb-3 mx-2">
  <div class="col-3 d-flex flex-column align-items-center">
    <p class="bold-text">To: ${package.to}</p>
    <p class="bold-text">ID: ${package.trackingNumber}</p>
  </div>

  <div class="col-3 d-flex align-items-center justify-content-center">
    <p class="bold-text">LBS: ${package.weight}</p>
  </div>

  <div class="col-3 d-flex align-items-center justify-content-center">
    <p class="bolder-text">${package.priorityLevel}</p>
  </div>
  `
    }

  })


  // packageDisplay.innerHTML
}

function emptyList() {
  packageDisplay.innerHTML = '';
}

function activateHeavy(weight) {
  resetButtons()
  fragile = false;
  priority = false;
  if (!heavy) {
    getHeavyPackages(weight);
    heavy = true;
    let button = document.getElementById('heavyButton');
    button.className = 'btn btn-light';
  } else {
    heavy = false;
    Draw(packages);
  }
}

function activatePriority() {
  resetButtons()
  fragile = false;
  heavy = false;
  if (!priority) {
    getPriorityPackages();
    priority = true;
    let button = document.getElementById('priorityButton');
    button.className = 'btn btn-light';
  } else {
    priority = false;
    Draw(packages);
  }
}

function activateFragile() {
  resetButtons()
  heavy = false;
  priority = false;
  if (!fragile) {
    getFragilePackages();
    fragile = true;
    let button = document.getElementById('fragileButton');
    button.className = 'btn btn-light';
  } else {
    fragile = false;
    Draw(packages);
  }
}

function getHeavyPackages(weight) {
  heavyPackages = packages.filter(package => package.weight >= weight);

  Draw(heavyPackages)
}

function getFragilePackages() {
  fragilePackages = packages.filter(package => package.isFragile);

  Draw(fragilePackages)
}

function getPriorityPackages() {
  priorityPackages = packages.filter(package => package.priorityLevel == 'standard' || package.priorityLevel == 'express');


  Draw(priorityPackages)
}

function Draw(packages) {
  emptyList()
  drawPackages(packages);
}

function resetButtons() {
  let buttons = ["heavyButton", "priorityButton", "fragileButton"]

  buttons.forEach(btn => {
    let selectedbtn = document.getElementById(btn);
    // console.log(selectedbtn)
    selectedbtn.className = 'btn btn-dark';
  })
}

Draw(packages);

{/* <div class="row package">
  <div class="col-3 d-flex flex-column align-items-center">
    <p class="bold-text">To: Name</p>
    <p class="bold-text">ID: 1234567</p>
  </div>

  <div class="col-3 d-flex align-items-center justify-content-center">
    <p class="bold-text">LBS: 12</p>
  </div>

  <div class="col-3 d-flex align-items-center justify-content-center">
    <p class="bolder-text">Standard</p>
  </div>

  <div class="col-3 d-flex align-items-center flex-column justify-content-center">
    <p class="bold-text text-danger">FRAGILE</p>
  </div>
</div> */}