let header = document.querySelector('#header-container');
header.style.backgroundColor = '#00b16f';

let emergencyTasks = document.querySelector('.emergency-tasks');
emergencyTasks.style.backgroundColor = '#ff9a88';

let titleEmergencyTasks = document.querySelectorAll('.emergency-tasks h3');
for (let index = 0; index < titleEmergencyTasks.length; index += 1) {
  titleEmergencyTasks[index].style.backgroundColor = '#ac1fec';
}

let noEmergencyTasks = document.querySelector('.no-emergency-tasks');
noEmergencyTasks.style.backgroundColor = '#ffd86e';

let titleNoEmergencyTasks = document.querySelectorAll('.no-emergency-tasks h3');
for (let index = 0; index < titleNoEmergencyTasks.length; index += 1) {
  titleNoEmergencyTasks[index].style.backgroundColor = '#232525';
}

let footerContainer = document.querySelector('#footer-container');
footerContainer.style.backgroundColor = '#003633';




