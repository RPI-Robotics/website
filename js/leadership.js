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
  card.appendChild(make_element('H1', null, person))
  
  // Equip person major 
  if (data['major'] != null) card.appendChild(make_element('P', null, data['major']))

  // Equip person year 
  if (data['grad_year'] != null) card.appendChild(make_element('P', null, 'Class of ' + data['grad_year']))

  card.appendChild(make_element('HR', null, null))

  // Equip person ROLE
  if (data['role'] != null) card.appendChild(make_element('P', null, data['role']))

  // Equip person bio 
  if (data['bio'] != null) card.appendChild(make_element('P', null, data['bio']))

  card.appendChild(make_element('HR', null, null))

  // Equip person email 
  if (data['email'] != null) card.appendChild(make_element('P', null, 'Contact ' + person + ': ' +data['email']))
}

$.getJSON('./files/leadership.json', function(json_data) {
  let container = document.getElementsByClassName('dyna_container') 

  for (person in json_data) {
    let data = json_data[person]

    let section_container = document.createElement('DIV')
    section_container.setAttribute('class', 'section')
    section_container.setAttribute('style', 'background-color: ' + data['bg_color'] + '; color:' + data['color'])

    section_container.appendChild(make_element('BR', null, null))
    
    let table_cont = document.createElement('TABLE')

    let row_cont = document.createElement('TR')
  
    let img_col = document.createElement('TD')

    let img_cont = make_img('pad15', data['img'])
    img_cont.setAttribute('style', 'width: 90%; border-radius: 9%;')

    img_col.appendChild(img_cont)
    img_col.setAttribute('style', 'width: 40%')

    let txt_col = document.createElement('TD')
    fill_card(txt_col, person, data)
    txt_col.setAttribute('style', 'text-align: left; padding-right: 5%;')

    row_cont.appendChild(img_col)

    row_cont.appendChild(txt_col)

    table_cont.appendChild(row_cont)
    
    section_container.appendChild(table_cont)
    
    section_container.appendChild(make_element('BR', null, null))

    container[0].appendChild(section_container)

    container[0].appendChild(make_element('DIV', 'section', null).appendChild(make_element('DIV', 'divider', null)))
  }
})

  