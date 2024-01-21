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

function make_frame(klass, src){
  let element = document.createElement('IFRAME')
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

function fill_card(card, project, data) {
    // Equip person name
  card.appendChild(make_element('H1', null, project))
  
  card.appendChild(make_element('HR', null, null))
  
  // Equip robot description 
  if (data['desc'] != null) card.appendChild(make_element('P', null, data['desc']))

  card.appendChild(make_element('HR', null, null))
  
  // When was the project started
  if (data['since'] != null) card.appendChild(make_element('P', null, "Since: " + data['since']))

  // When will it be completed
  if (data['eta'] != null) card.appendChild(make_element('P', null, "Planned Completion: " + data['eta']))
}

$.getJSON('./files/projects.json', function(json_data) {
  let container = document.getElementsByClassName('dyna_container') 

  for (project in json_data) {
    let data = json_data[project]

    let section_container = document.createElement('DIV')
    section_container.setAttribute('class', 'section')
    section_container.setAttribute('style', 'background-color: ' + data['bg_color'] + '; color:' + data['color'])

    section_container.appendChild(make_element('BR', null, null))
    
    let table_cont = document.createElement('TABLE')
    let row_cont1 = document.createElement('TR')
    let row_cont2 = document.createElement('TR')
    let img_col = document.createElement('TD')

    let img_cont = make_img('pad15', data['img'])
    img_cont.setAttribute('style', 'width: 50%; border-radius: 9%;')

    img_col.appendChild(img_cont)
    img_col.setAttribute('style', 'width: 40%')

    let frame_col= document.createElement('TD')
    frame_col.setAttribute('colspan', '2')
    let frame_cont = make_frame('pad15',data['frame'])
    frame_cont.setAttribute('style', 'width: 90%; height: 700px; border-style:none; border-radius: 2.5%;')

    frame_col.appendChild(frame_cont)
    frame_col.setAttribute('style', 'width: 100%;')  


    let txt_col = document.createElement('TD')
    fill_card(txt_col, project, data)
    txt_col.setAttribute('style', 'text-align: left; padding-right: 5%;')

    row_cont1.appendChild(img_col)

    row_cont1.appendChild(txt_col)
    row_cont2.appendChild(frame_col)
    table_cont.appendChild(row_cont1)
    table_cont.appendChild(row_cont2)
    section_container.appendChild(table_cont)
    
    section_container.appendChild(make_element('BR', null, null))

    container[0].appendChild(section_container)

    container[0].appendChild(make_element('DIV', 'section', null).appendChild(make_element('DIV', 'divider', null)))
  }
})

  