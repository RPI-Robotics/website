function make_element(type, klass, text) {
  let element = document.createElement(type)
  element.setAttribute('class', klass)
  element.innerHTML = text
  
  return element
}

function make_img(klass, src) {
  let element = document.createElement('IMG')
  element.setAttribute('class', klass)
  element.setAttribute('src', src)
  
  return element
}

function make_list(klass, header, items) {
  let element = document.createElement('DIV')
  element.setAttribute('class', klass)

  let list = document.createElement('UL')

  for (var i = 0; i < items.length; i++) {
    let course = document.createElement('LI')
    course.innerHTML = items[i]
    list.appendChild(course)
  }

  element.innerHTML = header + '\n <ul>' + list.innerHTML;
  
  return element
}

function make_link(klass, text, link) {
  let element = document.createElement('A')
  element.setAttribute('class', klass)
  element.setAttribute('href', link)
  element.setAttribute('target', '_blank')
  element.innerHTML = text
  
  return element
}

function fill_card(card, person, data) {
    // Equip person name
  card.appendChild(make_element('H2', null, person))
  
  card.appendChild(make_element('p', null, data['major'] + ' ' + data['grad_year']))
}

$.getJSON('./files/team.json', function(json_data) {
  let container = document.getElementsByClassName('dyna_container')
  
  let section_container = document.createElement('DIV')
  section_container.setAttribute('class', 'section cherry')

  section_container.appendChild(make_element('BR', null, null))
  
  let table_cont = document.createElement('TABLE')

  let row_cont = document.createElement('TR')

  let counter = 0;
  let index = 0;

  for (person in json_data) {
    let data = json_data[person]

    let cell = document.createElement('TD')
    if (counter != 2) cell.setAttribute('style', 'width: 30%; color: #fff; border-right: solid 1px #fff; padding: 15px;')
    else cell.setAttribute('style', 'width: 30%; color: #fff; padding: 15px;')

    fill_card(cell, person, data)

    if (counter == 2 || (index + 1) == Object.keys(json_data).length) {
      row_cont.appendChild(cell)
      let row_copy = row_cont.cloneNode(true)
      table_cont.appendChild(row_copy)
      console.log(row_copy)
      row_cont = document.createElement('TR')
      counter = -1
    } else {
      row_cont.appendChild(cell)
    }

    counter++;
    index++;
  }
   
  section_container.appendChild(table_cont)
    
  section_container.appendChild(make_element('BR', null, null))

  container[0].appendChild(section_container)

  container[0].appendChild(make_element('DIV', 'section', null).appendChild(make_element('DIV', 'divider', null)))

})

  