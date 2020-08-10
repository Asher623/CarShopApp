/* Add any JavaScript you need to this file. */

(function() {
  let cars = {
    all: window.carsData,
    getByCategory: function(category) {
      return window.carsData.filter(car => {
        if (car.category === category) {
          return Object.assign({}, car);
        }
      });
    },

    getByBrand: function(brand) {
      return window.carsData.filter(car => {
        if (car.brand === brand) {
          return Object.assign({}, car);
        }
      });
    }
  };

  let tableHelper = {
    clearTable: function() {
      let body = document.querySelector('#table-rows');
      body.innerHTML = '';
    },

    carToRow: function(car) {
      let tr = document.createElement('tr');

      let tdImage = document.createElement('td');
      let img = document.createElement('img');
      img.src = car.image;
      img.onload = function() {
        console.log('Loaded');
      };
      img.onerror = function() {
        this.remove();
      };
      img.style.width = '375px';
      img.style.height = '230px';
      tdImage.appendChild(img);
      tr.appendChild(tdImage);

      let trBrand = document.createElement('tr');
      let brandH2 = document.createElement('h2');
      let textBrand = document.createTextNode(car.brand);
      brandH2.appendChild(textBrand);
      trBrand.appendChild(brandH2);
      tr.appendChild(trBrand);

      let trModel = document.createElement('tr');
      let modelH2 = document.createElement('p');
      let textModel = document.createTextNode(car.model + ' ' + car.category);
      modelH2.setAttribute('id', 'model');
      modelH2.appendChild(textModel);
      trModel.appendChild(modelH2);
      tr.appendChild(trModel);

      let trPrice = document.createElement('tr');
      let textPrice = document.createTextNode('Price: ' + new Intl.NumberFormat('en-US', {style: 'currency', currency: 'CAD', maximumSignificantDigits: 1}).format(car.price));
      let priceP = document.createElement('p');
      priceP.setAttribute('id', 'price');
      priceP.appendChild(textPrice);
      trPrice.appendChild(priceP);
      tr.appendChild(trPrice);

      let trDesc = document.createElement('tr');
      let textDesc = document.createTextNode(car.description);
      let descP = document.createElement('p');
      descP.setAttribute('id', 'text');
      descP.appendChild(textDesc);
      trDesc.appendChild(descP);
      tr.appendChild(trDesc);

      let body = document.querySelector('#table-rows');
      body.appendChild(tr);
    },

    carToTable: function(cars) {
      tableHelper.clearTable();
      var car;
      for (car of cars) {
        tableHelper.carToRow(car);
      }
    }
  };

  function setupMenuHandlers() {
    tableHelper.carToTable(cars.all);
    let menuElectric = document.querySelector('#electric_category');
    menuElectric.addEventListener('click', function() {
      tableHelper.carToTable(cars.getByCategory('Electric'));
    });
    let menuGas = document.querySelector('#gas_category');
    menuGas.addEventListener('click', function() {
      tableHelper.carToTable(cars.getByCategory('Gas'));
    });
    let menuTesla = document.querySelector('#Tesla');
    menuTesla.addEventListener('click', function() {
      tableHelper.carToTable(cars.getByBrand('Tesla'));
    });

    let menuNissan = document.querySelector('#Nissan');
    menuNissan.addEventListener('click', function() {
      tableHelper.carToTable(cars.getByBrand('Nissan'));
    });

    let menuMercedes = document.querySelector('#Mercedes-Benz');
    menuMercedes.addEventListener('click', function() {
      tableHelper.carToTable(cars.getByBrand('Mercedes-Benz'));
    });

    let menuPorsche = document.querySelector('#Porsche');
    menuPorsche.addEventListener('click', function() {
      tableHelper.carToTable(cars.getByBrand('Porsche'));
    });
    let menuToyota = document.querySelector('#Toyota');
    menuToyota.addEventListener('click', function() {
      tableHelper.carToTable(cars.getByBrand('Toyota'));
    });
    let menuBMW = document.querySelector('#BMW');
    menuBMW.addEventListener('click', function() {
      tableHelper.carToTable(cars.getByBrand('BMW'));
    });
    let menuAll = document.querySelector('#logo-cars');
    menuAll.addEventListener('click', function() {
      tableHelper.carToTable(cars.all);
    });
  }

  let table = document.querySelector('#table-rows');
  let m = cars.getByBrand('Mercedes-Benz');
  let node = document.createTextNode(m.model);

  let pp = document.createElement('p');
  pp.appendChild(node);
  table.appendChild(node);

  window.onload = setupMenuHandlers;
})();
