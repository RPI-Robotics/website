/* eslint-disable */
var MOCK_CALENDARS = [
  {
    id: '1',
    name: 'Gen Meetings',
    color: '#ffffff',
    borderColor: '#b02e26',
    backgroundColor: '#b02e26',
    dragBackgroundColor: '#b02e26',
  },
  {
    id: '2',
    name: 'Open Shop Hours',
    color: '#ffffff',
    borderColor: '#f9801d',
    backgroundColor: '#f9801d',
    dragBackgroundColor: '#f9801d',
  },
  {
    id: '3',
    name: 'PD Workshops',
    color: '#ffffff',
    borderColor: '#ffd83d',
    backgroundColor: '#ffd83d',
    dragBackgroundColor: '#ffd83d',
  },
  {
    id: '4',
    name: 'Robot Art Installation',
    color: '#ffffff',
    borderColor: '#80c71f',
    backgroundColor: '#80c71f',
    dragBackgroundColor: '#80c71f',
  },
  {
    id: '5',
    name: 'Other Events',
    color: '#ffffff',
    borderColor: '#3ab3da',
    backgroundColor: '#3ab3da',
    dragBackgroundColor: '#3ab3da',
  },
  {
    id: '6',
    name: 'Combat Robotics',
    color: '#ffffff',
    borderColor: '#8932b7',
    backgroundColor: '#8932b7',
    dragBackgroundColor: '#8932b7',
  },
  {
    id: '7',
    name: 'Robotic Arm',
    color: '#ffffff',
    borderColor: '#f38caa',
    backgroundColor: '#f38caa',
    dragBackgroundColor: '#f38caa',
  },
  {
    id: '8',
    name: 'Couch Bot',
    color: '#ffffff',
    borderColor: '#825432',
    backgroundColor: '#825432',
    dragBackgroundColor: '#825432',
  },
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
    "calendarId": "5",
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
    "calendarId": "5",
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
    "calendarId": "5",
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
    "calendarId": "5",
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
  },
  {
    "id": 17,
    "attendees": ["Amar Maksumić, Cullen Sheridan"],
    "body": "Members can come to the shop to work on their projects or experiment with the robots we have.",
    "calendarId": "2",
    "start": "2022-11-07T16:00:00",
    "end": "2022-11-07T18:00:00",
    "title": "Open Shop Hours (Amar, Cullen)",
    "location": "Low 8214",
    "state": "Free"
  },
  {
    "id": 18,
    "attendees": ["Thomas Byrne"],
    "body": "Members can come to the shop to work on their projects or experiment with the robots we have.",
    "calendarId": "2",
    "start": "2022-11-09T14:00:00",
    "end": "2022-11-09T16:00:00",
    "title": "Open Shop Hours (Thomas)",
    "location": "Low 8214",
    "state": "Free"
  },
  {
    "id": 19,
    "attendees": ["Amar Maksumić, Thomas Byrne"],
    "body": "Members can come to the shop to work on their projects or experiment with the robots we have.",
    "calendarId": "2",
    "start": "2022-11-10T16:00:00",
    "end": "2022-11-10T17:45:00",
    "title": "Open Shop Hours (Amar, Thomas)",
    "location": "Low 8214",
    "state": "Free"
  },
  {
    "id": 20,
    "attendees": ["Team"],
    "body": null,
    "calendarId": "1",
    "start": "2022-11-10T18:00:00",
    "end": "2022-11-10T19:30:00",
    "title": "General Meeting",
    "location": "Walker 6113",
    "state": "Free"
  },
  {
    "id": 20.5,
    "attendees": ["Amar Maksumić, Molly Vitkevich, Jayden Smith, Cullen Sheridan"],
    "body": "First meeting to talk about setting up our robotic art installation.",
    "calendarId": "4",
    "start": "2022-11-13T14:00:00",
    "end": "2022-11-13T15:00:00",
    "title": "R.A.I. Proposal Meeting",
    "location": "TBD",
    "state": "Free"
  },
  {
    "id": 21,
    "attendees": ["Amar Maksumić, Cullen Sheridan"],
    "body": "Members can come to the shop to work on their projects or experiment with the robots we have.",
    "calendarId": "2",
    "start": "2022-11-14T16:00:00",
    "end": "2022-11-14T18:00:00",
    "title": "Open Shop Hours (Amar, Cullen)",
    "location": "Low 8214",
    "state": "Free"
  },
  {
    "id": 22,
    "attendees": ["Thomas Byrne"],
    "body": "Members can come to the shop to work on their projects or experiment with the robots we have.",
    "calendarId": "2",
    "start": "2022-11-16T14:00:00",
    "end": "2022-11-16T16:00:00",
    "title": "Open Shop Hours (Thomas)",
    "location": "Low 8214",
    "state": "Free"
  },
  {
    "id": 23,
    "attendees": ["Amar Maksumić, Thomas Byrne"],
    "body": "Members can come to the shop to work on their projects or experiment with the robots we have.",
    "calendarId": "2",
    "start": "2022-11-17T16:00:00",
    "end": "2022-11-17T17:45:00",
    "title": "Open Shop Hours (Amar, Thomas)",
    "location": "Low 8214",
    "state": "Free"
  },
  {
    "id": 24,
    "attendees": ["Team"],
    "body": null,
    "calendarId": "1",
    "start": "2022-11-17T18:00:00",
    "end": "2022-11-17T19:30:00",
    "title": "General Meeting",
    "location": "Walker 6113",
    "state": "Free"
  },
  {
    "id": 25,
    "attendees": ["Team"],
    "body": null,
    "calendarId": "1",
    "start": "2023-01-19T18:00:00",
    "end": "2023-01-19T19:00:00",
    "title": "General Meeting",
    "location": "Walker 6113",
    "state": "Free"
  },
  {
    "id": 26,
    "attendees": ["Thomas Byrne, Amar Maksumić, John Lockwood"],
    "body": "Members can come to the shop to work on their projects or experiment with the robots we have.",
    "calendarId": "2",
    "start": "2023-01-20T15:00:00",
    "end": "2023-01-20T18:00:00",
    "title": "Open Shop Hours",
    "location": "Low 8214",
    "state": "Free"
  },
  {
    "id": 27,
    "attendees": ["RAI Team"],
    "body": "Member induction meeting, project setup",
    "calendarId": "4",
    "start": "2023-01-22T14:00:00",
    "end": "2023-01-22T15:00:00",
    "title": "RAI Meeting",
    "location": "Low 8214",
    "state": "Free"
  },
  {
    "id": 28,
    "attendees": ["Colton Ritchie, Cullen Sheridan"],
    "body": "Members can come to the shop to work on their projects or experiment with the robots we have.",
    "calendarId": "2",
    "start": "2023-01-23T15:00:00",
    "end": "2023-01-23T17:00:00",
    "title": "Open Shop Hours",
    "location": "Low 8214",
    "state": "Free"
  },
  {
    "id": 29,
    "attendees": ["Amar Maksimić, Ryan Grant"],
    "body": "Members can come to the shop to work on their projects or experiment with the robots we have.",
    "calendarId": "2",
    "start": "2023-01-24T15:00:00",
    "end": "2023-01-24T17:00:00",
    "title": "Open Shop Hours",
    "location": "Low 8214",
    "state": "Free"
  },
  {
    "id": 30,
    "attendees": ["Jayden Smith"],
    "body": "Members can come to the shop to work on their projects or experiment with the robots we have.",
    "calendarId": "2",
    "start": "2023-01-25T17:00:00",
    "end": "2023-01-25T18:00:00",
    "title": "Open Shop Hours",
    "location": "Low 8214",
    "state": "Free"
  },
  {
    "id": 31,
    "attendees": ["Molly Vitkevich"],
    "body": "Members can come to the shop to work on their projects or experiment with the robots we have.",
    "calendarId": "2",
    "start": "2023-01-26T14:00:00",
    "end": "2023-01-26T15:00:00",
    "title": "Open Shop Hours",
    "location": "Low 8214",
    "state": "Free"
  },
  {
    "id": 31,
    "attendees": ["Cullen Sheridan, Sean Fang"],
    "body": "Members can come to the shop to work on their projects or experiment with the robots we have.",
    "calendarId": "2",
    "start": "2023-01-26T16:00:00",
    "end": "2023-01-26T18:00:00",
    "title": "Open Shop Hours",
    "location": "Low 8214",
    "state": "Free"
  },
  {
    "id": 32,
    "attendees": ["Team"],
    "body": null,
    "calendarId": "1",
    "start": "2023-01-26T18:00:00",
    "end": "2023-01-26T19:00:00",
    "title": "General Meeting",
    "location": "Walker 6113",
    "state": "Free"
  },
  {
    "id": 33,
    "attendees": ["Thomas Byrne, Amar Maksumić, John Lockwood"],
    "body": "Members can come to the shop to work on their projects or experiment with the robots we have.",
    "calendarId": "2",
    "start": "2023-01-27T15:00:00",
    "end": "2023-01-27T18:00:00",
    "title": "Open Shop Hours",
    "location": "Low 8214",
    "state": "Free"
  },
  {
    "id": 34,
    "attendees": ["Thomas Byrne, Amar Maksumić, John Lockwood, Sean Fang, Luca Vitti, Cullen Sheridan, Wendy Chen, Colton Ritchie, Max Wethern"],
    "body": "Members can come visit our tabling event at the Albany Airport at the Million Air hangar.",
    "calendarId": "5",
    "start": "2023-11-04T10:00:00",
    "end": "2023-11-04T16:00:00",
    "title": "Albany Airport Tabling",
    "location": "16 Jetway Dr, Albany, NY",
    "state": "Free"
  },
  {
    "id": 35,
    "attendees": ["Team"],
    "body": "Project Meeting",
    "calendarId": "8",
    "start": "2023-11-02T17:30:00",
    "end": "2023-11-02T18:30:00",
    "title": "Couch Bot Project Meeting",
    "location": "LOW 3130",
    "state": "Free"
  }
  
]

function generateRandomEvents(viewName, renderStart, renderEnd) {
  return events;
}