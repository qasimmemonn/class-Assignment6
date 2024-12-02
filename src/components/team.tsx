// pages/our-team.js
import { FaLinkedin, FaTwitter, FaDribbble } from "react-icons/fa";

export default function OurTeam() {
  const teamMembers = [
    {
      name: "James Nduku",
      role: "Marketing Coordinator",
      image: "/images/team4.png",
    },
    {
      name: "Joseph Munyambu",
      role: "Nursing Assistant",
      image: "/images/team1.png",
    },
    {
      name: "Joseph Ngumbau",
      role: "Medical Assistant",
      image: "/images/team5.png",
    },
    {
      name: "Erick Kipkemboi",
      role: "Web Designer",
      image: "/images/team3.png",
    },
    {
      name: "Stephen Kerubo",
      role: "President of Sales",
      image: "/images/team2.png",
    },
    {
      name: "John Leboo",
      role: "Dog Trainer",
      image: "/images/team6.png",
    },
  ];

  return (
    <section id="about" className="bg-[#F7F7F7] py-16 px-4">
      <div className="max-w-6xl mx-auto text-center">
        {/* Section Heading */}
        <h2 className="text-4xl font-bold mb-4">Our Team</h2>
        <p className="text-gray-600 mb-12">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>

        {/* Team Members */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center space-y-4"
            >
              {/* Image */}
              <img
                src={member.image}
                alt={member.name}
                className="w-28 h-28  object-cover"
              />
              {/* Name and Role */}
              <div>
                <h3 className="text-lg font-semibold">{member.name}</h3>
                <p className="text-gray-500">{member.role}</p>
              </div>
              {/* Social Icons */}
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="text-gray-500 hover:text-blue-600 transition"
                >
                  <FaLinkedin />
                </a>
                <a
                  href="#"
                  className="text-gray-500 hover:text-blue-400 transition"
                >
                  <FaTwitter />
                </a>
                <a
                  href="#"
                  className="text-gray-500 hover:text-pink-500 transition"
                >
                  <FaDribbble />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
