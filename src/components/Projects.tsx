import React from "react";

const data = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
    title: "Mobile App 1",
    tools: "React, TailwindCSS",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=400&q=80",
    title: "Mobile App 2",
    tools: "React Native, Expo",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=400&q=80",
    title: "Mobile App 3",
    tools: "Flutter, Dart",
  },
  {
    id: 4,
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=400&q=80",
    title: "Mobile App 4",
    tools: "Vue, Vuetify",
  },
  {
    id: 5,
    image:
      "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?auto=format&fit=crop&w=400&q=80",
    title: "Mobile App 5",
    tools: "Angular, Material UI",
  },
  {
    id: 6,
    image:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=400&q=80",
    title: "Mobile App 6",
    tools: "Swift, UIKit",
  },
  {
    id: 7,
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=400&q=80",
    title: "Mobile App 7",
    tools: "Kotlin, Jetpack",
  },
  {
    id: 8,
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=400&q=80",
    title: "Mobile App 8",
    tools: "Ionic, Capacitor",
  },
  {
    id: 9,
    image:
      "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=400&q=80",
    title: "Mobile App 9",
    tools: "React, TailwindCSS",
  },
];

export default function Projects() {
  return (
    <div className="w-screen h-screen overflow-y-scroll bg-black">
      <div
        className="grid grid-cols-3 gap-x-4 gap-y-0 p-4 w-full h-[300vh]"
      >
        {data.map(({ id, image, title, tools }) => (
          <div
            key={id}
            id={`item-${id}`}
            className="relative flex items-center justify-center bg-[#ddd] rounded-xl shadow-md aspect-square group"
          >
            <img
              src={image}
              alt={title}
              className="w-24 h-24 object-contain rounded-md"
              draggable={false}
            />
            <div
              className="absolute bottom-4 left-1/2 -translate-x-1/2
                         bg-black bg-opacity-80 text-white px-3 py-1 rounded-md
                         text-center text-xs opacity-0 group-hover:opacity-100
                         transition-opacity duration-300 pointer-events-none
                         max-w-[90%]"
            >
              <div>{title}</div>
              <div className="text-gray-400 text-[0.7rem]">{tools}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
