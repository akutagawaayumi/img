'use strict'

async function itemsJson(requestURL) {
  const request = new Request(requestURL)
  const response = await fetch(request)
  const jsonIndex = await response.text()
  const index = JSON.parse(jsonIndex)
  items(index)
}

function shuffle(arrays) {
  const array = arrays.slice();
  for (let i = array.length - 1; i >= 0; i--) {
    const shuffleArr = Math.floor(Math.random() * (i + 1));
    [array[i], array[shuffleArr]] = [array[shuffleArr], array[i]];
  }
  return array;
}

function items(obj) {
  const items = shuffle(obj.items)
  const thebest = document.querySelector('#items')

  for (const i of items) {
    const item = document.createElement('section')
    item.id = `abi-${i.id}`
    thebest.appendChild(item)

    const tags = i.tag
    for (const ii of tags) {
      item.classList.add(ii)
    }

    item.style.backgroundImage = `url(${i.img[0]})`
    item.addEventListener('click', function () {
      openModal()

      const info = document.querySelector('#info'),
        name = document.querySelector('#name'),
        text = document.querySelector('#text'),
        pre = document.querySelector('#pre'),
        next = document.querySelector('#next');

      info.style.backgroundImage = `url(${i.img[0]})`

      if (i.img.length == 1) {
        pre.hidden = true
        next.hidden = true
      } else {
        pre.hidden = false
        next.hidden = false
      }

      let num = 0

      pre.addEventListener('click', function () {
        if (num == 0) {
          num = i.img.length - 1;
        } else if (num < i.img.length - 1) {
          num--;
        } else if (num == i.img.length - 1) {
          num--;
        }
        info.style.backgroundImage = `url('${i.img[num]}')`;
      }, false)

      next.addEventListener('click', function () {
        if (num == 0) {
          num++;
        } else if (num < i.img.length - 1) {
          num++;
        } else if (num == i.img.length - 1) {
          num = 0;
        }
        info.style.backgroundImage = `url('${i.img[num]}')`;
      }, false)

      name.textContent = i.name
      text.innerHTML = i.text
    }, false)
  }
}

document.addEventListener('DOMContentLoaded', function () {
  const dialogModal = document.querySelector('#info')
  const closeModal = document.querySelector('#back')
  closeModal.addEventListener('click', () => {
    dialogModal.close()
  })
});

function openModal() {
  const dialogModal = document.querySelector('#info')
  if (typeof dialogModal.showModal === "function") {
    dialogModal.showModal()
  } else {
    alert("The <dialog> API is not supported by this browser")
  }
}