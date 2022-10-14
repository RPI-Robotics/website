/* eslint-disable */
var MOCK_CALENDARS = [
  {
    id: '1',
    name: 'Gen Meetings',
    color: '#ffffff',
    borderColor: '#31c9c6',
    backgroundColor: '#31c9c6',
    dragBackgroundColor: '#31c9c6',
  },
  {
    id: '2',
    name: 'Open Shop Hours',
    color: '#ffffff',
    borderColor: '#eb3f67',
    backgroundColor: '#eb3f67',
    dragBackgroundColor: '#eb3f67',
  },
  {
    id: '3',
    name: 'PD Workshops',
    color: '#ffffff',
    borderColor: '#fcbb30',
    backgroundColor: '#fcbb30',
    dragBackgroundColor: '#fcbb30',
  },
  {
    id: '4',
    name: 'Other Events',
    color: '#ffffff',
    borderColor: '#8545d8',
    backgroundColor: '#8545d8',
    dragBackgroundColor: '#8545d8',
  }
];

var EVENT_CATEGORIES = ['milestone', 'task'];

var events = [
  {
    "id": 0,
    "attendees": ["Team"],
    "body": null,
    "calendarId": "1",
    "start": "2022-09-15T18:00:00",
    "end": "2022-09-15T19:30:00",
    "title": "General Meeting",
    "location": "Walker 5113",
    "state": "Free"
  },
  {
    "id": 0,
    "attendees": ["Team"],
    "body": null,
    "calendarId": "1",
    "start": "2022-09-22T18:00:00",
    "end": "2022-09-22T19:30:00",
    "title": "General Meeting",
    "location": "Walker 6113",
    "state": "Free"
  },
  {
    "id": 0,
    "attendees": ["Team"],
    "body": null,
    "calendarId": "1",
    "start": "2022-09-29T18:00:00",
    "end": "2022-09-29T19:30:00",
    "title": "General Meeting",
    "location": "Walker 6113",
    "state": "Free"
  },
  {
    
    "id": 0,
    "attendees": ["Amar Maksumić"],
    "body": "Unboxing the Hello Robot Stretch RE1 machines with graduate students and Head of ECSE Dep. John Wen.",
    "calendarId": "4",
    "start": "2022-10-05T12:00:00",
    "end": "2022-10-05T13:45:00",
    "title": "RE1 Unboxing",
    "location": "Low 8214",
    "state": "Free"
  },
  {
    
    "id": 0,
    "attendees": ["Amar Maksumić, Thomas Byrne"],
    "body": "Members can come to the shop to work on their projects or experiment with the robots we have.",
    "calendarId": "2",
    "start": "2022-10-06T16:00:00",
    "end": "2022-10-06T17:45:00",
    "title": "Open Shop Hours (Amar, Thomas)",
    "location": "Low 8214",
    "state": "Free"
  },
  {
    
    "id": 1,
    "attendees": ["Team"],
    "body": null,
    "calendarId": "1",
    "start": "2022-10-06T18:00:00",
    "end": "2022-10-06T19:30:00",
    "title": "General Meeting",
    "location": "Walker 6113",
    "state": "Free"
  },
  {
    "id": 2,
    "attendees": ["Amar Maksumić"],
    "body": "We will start work on setting up the Hello Robot Stretch RE1 machine.",
    "calendarId": "4",
    "start": "2022-10-11T16:30:00",
    "end": "2022-10-11T17:00:00",
    "title": "RE1 Setup",
    "location": "Low 8214",
    "state": "Free"
  },
  {
    
    "id": 2,
    "attendees": ["Amar Maksumić"],
    "body": "Members can come to the shop to work on their projects or experiment with the robots we have.",
    "calendarId": "2",
    "start": "2022-10-12T12:00:00",
    "end": "2022-10-12T17:45:00",
    "title": "Open Shop Hours (Amar)",
    "location": "Low 8214",
    "state": "Free"
  },
  {
    
    "id": 2,
    "attendees": ["Amar Maksumić"],
    "body": "We will continue setting up the Hello Robot Stretch RE1 machine.",
    "calendarId": "4",
    "start": "2022-10-12T12:00:00",
    "end": "2022-10-12T17:45:00",
    "title": "RE1 Setup",
    "location": "Low 8214",
    "state": "Free"
  },
  {
    "id": 3,
    "attendees": ["Amar Maksumić, Thomas Byrne"],
    "body": "Members can come to the shop to work on their projects or experiment with the robots we have.",
    "calendarId": "2",
    "start": "2022-10-13T16:00:00",
    "end": "2022-10-13T17:45:00",
    "title": "Open Shop Hours (Amar, Thomas)",
    "location": "Low 8214",
    "state": "Free"
  },
  {
    "id": 4,
    "attendees": ["Team"],
    "body": null,
    "calendarId": "1",
    "start": "2022-10-13T18:00:00",
    "end": "2022-10-13T19:30:00",
    "title": "General Meeting",
    "location": "Walker 6113",
    "state": "Free"
  },
  {
    "id": 5,
    "attendees": ["Amar Maksumić, Cullen Sheridan"],
    "body": "Members can come to the shop to work on their projects or experiment with the robots we have.",
    "calendarId": "2",
    "start": "2022-10-17T16:00:00",
    "end": "2022-10-17T18:00:00",
    "title": "Open Shop Hours (Amar, Cullen)",
    "location": "Low 8214",
    "state": "Free"
  },
  {
    "id": 5,
    "attendees": ["Amar Maksumić"],
    "body": "Setting up ROS Melodic on our personal PCs to be able to work on the Stretch RE1.",
    "calendarId": "4",
    "start": "2022-10-18T16:30:00",
    "end": "2022-10-18T17:30:00",
    "title": "ROS Melodic Setup",
    "location": "Low 8214",
    "state": "Free"
  },
  {
    "id": 6,
    "attendees": ["Thomas Byrne"],
    "body": "Members can come to the shop to work on their projects or experiment with the robots we have.",
    "calendarId": "2",
    "start": "2022-10-19T14:00:00",
    "end": "2022-10-19T16:00:00",
    "title": "Open Shop Hours (Thomas)",
    "location": "Low 8214",
    "state": "Free"
  },
  {
    "id": 7,
    "attendees": ["Amar Maksumić, Thomas Byrne"],
    "body": "Members can come to the shop to work on their projects or experiment with the robots we have.",
    "calendarId": "2",
    "start": "2022-10-20T16:00:00",
    "end": "2022-10-20T17:45:00",
    "title": "Open Shop Hours (Amar, Thomas)",
    "location": "Low 8214",
    "state": "Free"
  },
  {
    "id": 8,
    "attendees": ["Team"],
    "body": null,
    "calendarId": "1",
    "start": "2022-10-20T18:00:00",
    "end": "2022-10-20T19:30:00",
    "title": "General Meeting",
    "location": "Walker 6113",
    "state": "Free"
  },
  {
    "id": 8,
    "attendees": ["Amar Maksumić"],
    "body": "If you would like to learn how to use Git, GitHub, and GitHub Desktop, please join us for this workshop. We will cover the basics of Git and GitHub, and how to use GitHub Desktop to manage your repositories.",
    "calendarId": "3",
    "start": "2022-10-22T14:00:00",
    "end": "2022-10-22T15:30:00",
    "title": "Git Workshop",
    "location": "Low 8214",
    "state": "Free"
  },
  {
    "id": 9,
    "attendees": ["Amar Maksumić, Cullen Sheridan"],
    "body": "Members can come to the shop to work on their projects or experiment with the robots we have.",
    "calendarId": "2",
    "start": "2022-10-24T16:00:00",
    "end": "2022-10-24T18:00:00",
    "title": "Open Shop Hours (Amar, Cullen)",
    "location": "Low 8214",
    "state": "Free"
  },
  {
    "id": 10,
    "attendees": ["Thomas Byrne"],
    "body": "Members can come to the shop to work on their projects or experiment with the robots we have.",
    "calendarId": "2",
    "start": "2022-10-26T14:00:00",
    "end": "2022-10-26T16:00:00",
    "title": "Open Shop Hours (Thomas)",
    "location": "Low 8214",
    "state": "Free"
  },
  {
    "id": 11,
    "attendees": ["Amar Maksumić, Thomas Byrne"],
    "body": "Members can come to the shop to work on their projects or experiment with the robots we have.",
    "calendarId": "2",
    "start": "2022-10-27T16:00:00",
    "end": "2022-10-27T17:45:00",
    "title": "Open Shop Hours (Amar, Thomas)",
    "location": "Low 8214",
    "state": "Free"
  },
  {
    "id": 12,
    "attendees": ["Team"],
    "body": null,
    "calendarId": "1",
    "start": "2022-10-27T18:00:00",
    "end": "2022-10-27T19:30:00",
    "title": "General Meeting",
    "location": "Walker 6113",
    "state": "Free"
  },
  {
    "id": 13,
    "attendees": ["Amar Maksumić, Cullen Sheridan"],
    "body": "Members can come to the shop to work on their projects or experiment with the robots we have.",
    "calendarId": "2",
    "start": "2022-10-31T16:00:00",
    "end": "2022-10-31T18:00:00",
    "title": "Open Shop Hours (Amar, Cullen)",
    "location": "Low 8214",
    "state": "Free"
  },
  {
    "id": 14,
    "attendees": ["Thomas Byrne"],
    "body": "Members can come to the shop to work on their projects or experiment with the robots we have.",
    "calendarId": "2",
    "start": "2022-11-02T14:00:00",
    "end": "2022-11-02T16:00:00",
    "title": "Open Shop Hours (Thomas)",
    "location": "Low 8214",
    "state": "Free"
  },
  {
    "id": 15,
    "attendees": ["Amar Maksumić, Thomas Byrne"],
    "body": "Members can come to the shop to work on their projects or experiment with the robots we have.",
    "calendarId": "2",
    "start": "2022-11-03T16:00:00",
    "end": "2022-11-03T17:45:00",
    "title": "Open Shop Hours (Amar, Thomas)",
    "location": "Low 8214",
    "state": "Free"
  },
  {
    "id": 16,
    "attendees": ["Team"],
    "body": null,
    "calendarId": "1",
    "start": "2022-11-03T18:00:00",
    "end": "2022-11-03T19:30:00",
    "title": "General Meeting",
    "location": "Walker 6113",
    "state": "Free"
  }
]

function generateRandomEvents(viewName, renderStart, renderEnd) {
  return events;
}