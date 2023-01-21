let images = [{
    title: 'Rostov-on-Don, Admiral',
	  city: 'Rostov-on-Don <br/> LCD admiral',
	  apartArea: '81 m2',
	  repairTime: '3.5 months',
	  repairCost: 'Upon request',
    url: './images/completed-img1.jpg',
  }, {
    title: 'Sochi Thieves',
	  city: 'Sochi <br/> Thieves',
	  apartArea: '105 m2',
	  repairTime: '4 months',
	  repairCost: 'Upon request',
    url: './images/completed-img2.jpg',
  }, {
    title: 'Rostov-on-Don Patriotic',
	  city: 'Rostov-on-Don <br/> Patriotic',
	  apartArea: '93 m2',
	  repairTime: '3 months',
	  repairCost: 'Upon request',
    url: './images/completed-img3.jpg',
}];

function initSlider() {
  if (!images || !images.length) return;
  
  let sliderImages = document.querySelector('.completed-projects-img');
  let sliderImagesMobile = document.querySelector('.completed-img-mobile');
  let sliderTools = document.querySelector('.sliderTools');
  let sliderToolsMobile = document.querySelector('.sliderToolsMobile');
  let sliderDots = document.querySelector('.dots');
  let sliderTitles = document.querySelector('.project-titles');
  let sliderCity = document.querySelector('.info.info-city');
	let sliderApartArea = document.querySelector('.info.info-apart');
	let sliderRepairTime = document.querySelector('.info.info-time');
  let sliderRepairCost = document.querySelector('.info.info-cost');

  initImages();
  initArrows();
  initDots();
  initTitles();
  initInfo();
  initAutoplay();
  initButtons();

  function initImages() {
    images.forEach((image, index) => {
      let imageDiv = `<div class='image n${index} ${index === 0 ? 'active' : ''}' style='background-image:url(${images[index].url});' data-index='${index}'></div>`;
      sliderImages.innerHTML += imageDiv;
      sliderImagesMobile.innerHTML += imageDiv;
    });
  }

  function initInfo() {
    images.forEach((image, index) => {
      let city = `<div class='info city n${index} ${index === 0 ? 'active' : ''}' data-index='${index}'>${images[index].city}</div>`;
      sliderCity.innerHTML += city;
      let apartArea = `<div class='info apartArea n${index} ${index === 0 ? 'active' : ''}' data-index='${index}'>${images[index].apartArea}</div>`;
      sliderApartArea.innerHTML += apartArea;
      let repairTime = `<div class='info repairTime n${index} ${index === 0 ? 'active' : ''}' data-index='${index}'>${images[index].repairTime}</div>`;
      sliderRepairTime.innerHTML += repairTime;
      let repairCost = `<div class='info repairCost n${index} ${index === 0 ? 'active' : ''}' data-index='${index}'>${images[index].repairCost}</div>`;
      sliderRepairCost.innerHTML += repairCost;
    });
}

  function initArrows() {
    sliderTools.querySelectorAll('.arrow').forEach(arrow => {
      arrow.addEventListener('click', function() {
        console.log('click');
        let currentNum = +sliderImages.querySelector('.active').dataset.index;
        let nextNum;
        if (arrow.classList.contains('arrow-left')) {
          nextNum = currentNum === 0 ? images.length - 1 : currentNum - 1;
        } else {
          nextNum = currentNum === images.length - 1 ? 0 : currentNum + 1;
        }
        moveSlider(nextNum);
      });
      });
    }

    function initButtons() {
      sliderToolsMobile.querySelectorAll('.round-button').forEach (btn => {
        btn.addEventListener('click', function() {
          console.log('click');
          let currentNum = +sliderImagesMobile.querySelector('.active').dataset.index;
          let nextNum;
          if (btn.classList.contains('left')) {
            nextNum = currentNum === 0 ? images.length - 1 : currentNum - 1;
          } else {
            nextNum = currentNum === images.length - 1 ? 0 : currentNum + 1;
          }
          moveSlider(nextNum);
        });
      });
      }

    function initDots() {
      images.forEach((image, index) => {
        let dot = `<div class='dot n${index} ${index === 0 ? 'active' : ''}' data-index='${index}'></div>`;
        sliderDots.innerHTML += dot;
      });
      sliderDots.querySelectorAll('.dot').forEach(dot => {
        dot.addEventListener('click', function() {
          moveSlider(this.dataset.index);
        });
      });
    }

    function initTitles() {
      images.forEach((image, index) => {
        let title = `<div class='title n${index} ${index === 0 ? 'active' : ''}' data-index='${index}'>${images[index].title}</div>`;
        sliderTitles.innerHTML += title;
      });
      sliderTitles.querySelectorAll(".title").forEach(title => {
        title.addEventListener('click', function() {
          moveSlider(this.dataset.index);
        });
      });
    }

    function moveSlider(num) {
      sliderImages.querySelector('.active').classList.remove('active');
      sliderImages.querySelector('.n' + num).classList.add('active');
      sliderImagesMobile.querySelector('.active').classList.remove('active');
      sliderImagesMobile.querySelector('.n' + num).classList.add('active');
      sliderDots.querySelector('.active').classList.remove('active');
      sliderDots.querySelector('.n' + num).classList.add('active');
      sliderTitles.querySelector('.active').classList.remove('active');
      sliderTitles.querySelector('.n' + num).classList.add('active');
      sliderCity.querySelector('.active').classList.remove('active');
      sliderCity.querySelector('.n' + num).classList.add('active');
      sliderApartArea.querySelector('.active').classList.remove('active');
      sliderApartArea.querySelector('.n' + num).classList.add('active');
      sliderRepairTime.querySelector('.active').classList.remove('active');
      sliderRepairTime.querySelector('.n' + num).classList.add('active');
      sliderRepairCost.querySelector('.active').classList.remove('active');
      sliderRepairCost.querySelector('.n' + num).classList.add('active');
    }

    function initAutoplay() {
      setInterval(() => {
        let currentImg = +sliderImages.querySelector('.active').dataset.index;
        let nextImg = currentImg === images.length - 1 ? 0 : currentImg + 1;
        moveSlider(nextImg);
      }, 15000);
    }
  }

document.addEventListener('DOMContentLoaded', initSlider);