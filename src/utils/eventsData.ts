export interface Event {
  title: string;
  nameOfOrganization: string;
  location: string;
  date: string;
  time: string;
  skills: string;
}

const eventsData = [
  {
    title: "Art & Creativity Workshop",
    nameOfOrganization: "Hope Foundation Center",
    location: "Navsari",
    date: "30th March 2025",
    time: "11:00 AM - 3:00 PM",
    skills: "Painting, Crafting, Creativity",
  },
  {
    title: "Gardening Workshop",
    nameOfOrganization: "Bright Future Foundation",
    location: "Navsari",
    date: "30th March 2025",
    time: "11:00 AM - 3:00 PM",
    skills: "Gardening, Crafting, Creativity",
  },
  {
    title: "Music & Dance Therapy",
    nameOfOrganization: "Bright Future Foundation",
    location: "Surat",
    date: "11th April 2025",
    time: "4:00 PM - 7:00 PM",
    skills: "Singing, Dancing, Instrumental Skills",
  },
  {
    title: "Sports for All",
    nameOfOrganization: "Hope Foundation Center",
    location: "Surat",
    date: "5th April 2025",
    time: "4:00 PM - 7:00 PM",
    skills: "Coaching, Motivation, Teamwork",
  },
];
export default eventsData;
