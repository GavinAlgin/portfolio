import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaPython, FaNodeJs,
  FaFigma, FaAdobe, FaPhp
} from 'react-icons/fa';
import { SiTypescript, SiMysql, SiSupabase, SiAdobexd, SiReact } from 'react-icons/si';

import profileIMG from '../assets/ChatGPT Image Jun 4, 2025, 01_12_44 AM.png';

// Skills Data with icon and animation direction
const techSkills = [
  { name: 'HTML', icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} color={"#fff"} fill={"none"}>
    <path d="M16.7685 3H8.23147C6.06757 3 4.98562 3 4.39152 3.70888C3.79742 4.41777 3.9697 5.50319 4.31426 7.67402L5.68897 16.3351C5.98587 18.2056 6.416 18.7661 8.18181 19.4563L11.0756 20.5873C11.7796 20.8624 12.1316 21 12.5 21C12.8684 21 13.2204 20.8624 13.9244 20.5873L16.8182 19.4563C18.584 18.7661 19.0141 18.2056 19.311 16.3351L20.6857 7.67402C21.0303 5.50319 21.2026 4.41777 20.6085 3.70888C20.0144 3 18.9324 3 16.7685 3Z" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
    <path d="M15.5 8H10.5269C9.61889 8 9.43592 8.18899 9.51742 9.09276L9.69841 11.0998C9.76714 11.862 9.94159 12.0141 10.7079 12.0141H13.8631C14.788 12.0141 14.9719 12.2076 14.8706 13.1264L14.7013 14.6624C14.6333 15.2803 14.6139 15.3041 14.0195 15.5038L12.7852 15.9187C12.4624 16.0271 12.4565 16.0271 12.1337 15.9187L10.7602 15.4571C10.3907 15.3329 10.2668 15.1818 10.2007 14.8117" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>, direction: 'left' },
  { name: 'CSS', icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} color={"#fff"} fill={"none"}>
    <path d="M12 6C8.4 6 7.16667 8.66667 7 10C7 10 7.81901 8.41169 9.86274 8.41169C12.3627 8.41169 12.5667 12 17.0667 12C20.7116 12 21.8333 9.51702 22 8.27554C22 8.27554 21.2198 9.67872 19.2198 9.67872C16.7296 9.67872 16.4134 6 12 6Z" stroke="#000000" strokeWidth="1.5" strokeLinejoin="round"></path>
    <path d="M7 12C3.4 12 2.16667 14.6667 2 16C2 16 2.81901 14.4117 4.86274 14.4117C7.36274 14.4117 7.56671 18 12.0667 18C15.7116 18 16.8333 15.517 17 14.2755C17 14.2755 16.2198 15.6787 14.2198 15.6787C11.7296 15.6787 11.4134 12 7 12Z" stroke="#000000" strokeWidth="1.5" strokeLinejoin="round"></path>
</svg>, direction: 'right' },
  { name: 'JavaScript', icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} color={"#fff"} fill={"none"}>
    <path d="M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z" stroke="#000000" strokeWidth="1.5"></path>
    <path d="M11.7324 12V16C11.7324 17.1046 10.837 18 9.73244 18C8.99215 18 8.34581 17.5978 8 17" stroke="#000000" strokeWidth="1.5" strokeLinecap="round"></path>
    <path d="M18.4668 13C18.121 12.4022 17.4747 12 16.7344 12H16.2344C15.4059 12 14.7344 12.6716 14.7344 13.5C14.7344 14.3284 15.4059 15 16.2344 15H17.2344C18.0628 15 18.7344 15.6716 18.7344 16.5C18.7344 17.3284 18.0628 18 17.2344 18H16.7344C15.9941 18 15.3477 17.5978 15.0019 17" stroke="#000000" strokeWidth="1.5" strokeLinecap="round"></path>
</svg>, direction: 'top' },
  { name: 'TypeScript', icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} color={"#fff"} fill={"none"}>
    <path d="M2.5 12.0001C2.5 7.52178 2.5 5.28261 3.89124 3.89136C5.28249 2.50012 7.52166 2.50012 12 2.50012C16.4783 2.50012 18.7175 2.50012 20.1088 3.89136C21.5 5.28261 21.5 7.52178 21.5 12.0001C21.5 16.4785 21.5 18.7176 20.1088 20.1089C18.7175 21.5001 16.4783 21.5001 12 21.5001C7.52166 21.5001 5.28249 21.5001 3.89124 20.1089C2.5 18.7176 2.5 16.4785 2.5 12.0001Z" stroke="#000000" strokeWidth="1.5" strokeLinejoin="round"></path>
    <path d="M18 12.0001H16.2C15.5373 12.0001 15 12.5374 15 13.2001V13.8001C15 14.4629 15.5373 15.0001 16.2 15.0001H16.8C17.4627 15.0001 18 15.5374 18 16.2001V16.8001C18 17.4629 17.4627 18.0001 16.8 18.0001H15" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
    <path d="M8.5 12.0001H10.5M12.5 12.0001H10.5M10.5 12.0001V18.0001" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>, direction: 'bottom' },
  { name: 'React', icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} color={"#fff"} fill={"none"}>
    <path d="M8.00001 12C8.00001 6.47715 9.79087 2 12 2C14.2091 2 16 6.47715 16 12C16 17.5228 14.2091 22 12 22C9.79087 22 8.00001 17.5228 8.00001 12Z" stroke="#000000" strokeWidth="1.5"></path>
    <path d="M9.97531 8.61921C14.8173 5.85779 19.649 5.17014 20.7673 7.08331C21.8855 8.99648 18.8667 12.786 14.0247 15.5474C9.18271 18.3088 4.35098 18.9965 3.23277 17.0833C2.11455 15.1701 5.13329 11.3806 9.97531 8.61921Z" stroke="#000000" strokeWidth="1.5"></path>
    <path d="M14.0247 8.61921C18.8667 11.3806 21.8855 15.1701 20.7673 17.0833C19.649 18.9965 14.8173 18.3088 9.97531 15.5474C5.13329 12.786 2.11455 8.99648 3.23277 7.08331C4.35098 5.17014 9.18271 5.85779 14.0247 8.61921Z" stroke="#000000" strokeWidth="1.5"></path>
    <path d="M13.5 12C13.5 12.8284 12.8284 13.5 12 13.5C11.1716 13.5 10.5 12.8284 10.5 12C10.5 11.1716 11.1716 10.5 12 10.5C12.8284 10.5 13.5 11.1716 13.5 12Z" stroke="#000000" strokeWidth="1.5"></path>
</svg>, direction: 'left' },
  { name: 'Node.js', icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} color={"#fff"} fill={"none"}>
    <path d="M19 12C19 11.1716 19.6716 10.5 20.5 10.5C21.3284 10.5 22 11.1716 22 12C22 12.8284 21.3284 13.5 20.5 13.5C19.6716 13.5 19 12.8284 19 12Z" stroke="#000000" strokeWidth="1.5"></path>
    <path d="M2 12C2 11.1716 2.67157 10.5 3.5 10.5C4.32843 10.5 5 11.1716 5 12C5 12.8284 4.32843 13.5 3.5 13.5C2.67157 13.5 2 12.8284 2 12Z" stroke="#000000" strokeWidth="1.5"></path>
    <path d="M13.7071 10.2929C13.4142 10 12.9428 10 12 10C11.0572 10 10.5858 10 10.2929 10.2929M13.7071 10.2929C14 10.5858 14 11.0572 14 12C14 12.9428 14 13.4142 13.7071 13.7071M13.7071 10.2929C13.7071 10.2929 13.7071 10.2929 13.7071 10.2929ZM10.2929 10.2929C10 10.5858 10 11.0572 10 12C10 12.9428 10 13.4142 10.2929 13.7071M10.2929 10.2929C10.2929 10.2929 10.2929 10.2929 10.2929 10.2929ZM10.2929 13.7071C10.5858 14 11.0572 14 12 14C12.9428 14 13.4142 14 13.7071 13.7071M10.2929 13.7071C10.2929 13.7071 10.2929 13.7071 10.2929 13.7071ZM13.7071 13.7071C13.7071 13.7071 13.7071 13.7071 13.7071 13.7071Z" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
    <path d="M20.7071 2.29289C20.4142 2 19.9428 2 19 2C18.0572 2 17.5858 2 17.2929 2.29289M20.7071 2.29289C21 2.58579 21 3.05719 21 4C21 4.94281 21 5.41421 20.7071 5.70711M20.7071 2.29289C20.7071 2.29289 20.7071 2.29289 20.7071 2.29289ZM17.2929 2.29289C17 2.58579 17 3.05719 17 4C17 4.94281 17 5.41421 17.2929 5.70711M17.2929 2.29289C17.2929 2.29289 17.2929 2.29289 17.2929 2.29289ZM17.2929 5.70711C17.5858 6 18.0572 6 19 6C19.9428 6 20.4142 6 20.7071 5.70711M17.2929 5.70711C17.2929 5.70711 17.2929 5.70711 17.2929 5.70711ZM20.7071 5.70711C20.7071 5.70711 20.7071 5.70711 20.7071 5.70711Z" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
    <path d="M6.70711 18.2929C6.41421 18 5.94281 18 5 18C4.05719 18 3.58579 18 3.29289 18.2929M6.70711 18.2929C7 18.5858 7 19.0572 7 20C7 20.9428 7 21.4142 6.70711 21.7071M6.70711 18.2929C6.70711 18.2929 6.70711 18.2929 6.70711 18.2929ZM3.29289 18.2929C3 18.5858 3 19.0572 3 20C3 20.9428 3 21.4142 3.29289 21.7071M3.29289 18.2929C3.29289 18.2929 3.29289 18.2929 3.29289 18.2929ZM3.29289 21.7071C3.58579 22 4.05719 22 5 22C5.94281 22 6.41421 22 6.70711 21.7071M3.29289 21.7071C3.29289 21.7071 3.29289 21.7071 3.29289 21.7071ZM6.70711 21.7071C6.70711 21.7071 6.70711 21.7071 6.70711 21.7071Z" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
    <path d="M5 12H10" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
    <path d="M14 12H19" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
    <path d="M12 10C12 8 12.8333 4 17 4" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
    <path d="M12 14C12 16 11.1667 20 7 20" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>, direction: 'right' },
  { name: 'Python', icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} color={"#fff"} fill={"none"}>
    <path d="M11 5.49976V5.50976" stroke="#000000" strokeWidth="1.5" strokeLinecap="round"></path>
    <path d="M13 18.4898V18.4998" stroke="#000000" strokeWidth="1.5" strokeLinecap="round"></path>
    <path d="M17.498 8.5H15.4989V6.5C15.4989 5.09554 15.4989 4.39331 15.1618 3.88886C15.0159 3.67048 14.8284 3.48298 14.61 3.33706C14.1056 3 13.4033 3 11.9989 3C10.5944 3 9.89218 3 9.38773 3.33706C9.16935 3.48298 8.98185 3.67048 8.83593 3.88886C8.49887 4.39331 8.49887 5.09554 8.49887 6.5V8.5H6.49805C5.09358 8.5 4.39135 8.5 3.88691 8.83706C3.66853 8.98298 3.48103 9.17048 3.33511 9.38886C2.99805 9.89331 2.99805 10.5955 2.99805 12C2.99805 13.4045 2.99805 14.1067 3.33511 14.6111C3.48102 14.8295 3.66853 15.017 3.88691 15.1629C4.39135 15.5 5.09358 15.5 6.49805 15.5H8.49887V17.5C8.49887 18.9045 8.49887 19.6067 8.83593 20.1111C8.98185 20.3295 9.16935 20.517 9.38773 20.6629C9.89218 21 10.5944 21 11.9989 21C13.4033 21 14.1056 21 14.61 20.6629C14.8284 20.517 15.0159 20.3295 15.1618 20.1111C15.4989 19.6067 15.4989 18.9045 15.4989 17.5V15.5H17.498C18.9025 15.5 19.6047 15.5 20.1092 15.1629C20.3276 15.017 20.5151 14.8295 20.661 14.6111C20.998 14.1067 20.998 13.4045 20.998 12C20.998 10.5955 20.998 9.89331 20.661 9.38886C20.5151 9.17048 20.3276 8.98298 20.1092 8.83706C19.6047 8.5 18.9025 8.5 17.498 8.5Z" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
    <path d="M15.5 8.5V12H8.5V15.5M12 15.5H15.5M8.5 8.5H12" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>, direction: 'top' },
  { name: 'PHP', icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} color={"#fff"} fill={"none"}>
    <path d="M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z" stroke="#000000" strokeWidth="1.5"></path>
    <path d="M5 12V10C5 9.72386 5.22386 9.5 5.5 9.5H6.75C7.44036 9.5 8 10.0596 8 10.75C8 11.4404 7.44036 12 6.75 12H5ZM5 12V14.5" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
    <path d="M16 12V10C16 9.72386 16.2239 9.5 16.5 9.5H17.75C18.4404 9.5 19 10.0596 19 10.75C19 11.4404 18.4404 12 17.75 12H16ZM16 12V14.5" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
    <path d="M10.5 9.5V12M10.5 14.5V12M13.5 9.5V12M13.5 14.5V12M10.5 12H13.5" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>, direction: 'bottom' },
  { name: 'SQL', icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} color={"#fff"} fill={"none"}>
    <path d="M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z" stroke="#000000" strokeWidth="1.5"></path>
    <path d="M8.41465 10C8.20873 9.4174 7.65311 9 7 9C6.17157 9 5.5 9.67157 5.5 10.5C5.5 11.3284 6.17157 12 7 12C7.82843 12 8.5 12.6716 8.5 13.5C8.5 14.3284 7.82843 15 7 15C6.34689 15 5.79127 14.5826 5.58535 14" stroke="#000000" strokeWidth="1.5" strokeLinecap="round"></path>
    <path d="M12.5 15C11.6716 15 11 14.3284 11 13.5V10.5C11 9.67157 11.6716 9 12.5 9C13.3284 9 14 9.67157 14 10.5V13.5C14 14.3284 13.3284 15 12.5 15ZM12.5 15L14 16.5" stroke="#000000" strokeWidth="1.5" strokeLinecap="round"></path>
    <path d="M16.5 9V13C16.5 13.9428 16.5 14.4142 16.7929 14.7071C17.0858 15 17.5572 15 18.5 15" stroke="#000000" strokeWidth="1.5" strokeLinecap="round"></path>
</svg>, direction: 'left' },
  { name: 'Supabase', icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} color={"#fff"} fill={"none"}>
    <ellipse cx="12" cy="5" rx="8" ry="3" stroke="#000000" strokeWidth="1.5"></ellipse>
    <path d="M7 10.842C7.60158 11.0229 8.27434 11.1718 9 11.282" stroke="#000000" strokeWidth="1.5" strokeLinecap="round"></path>
    <path d="M20 12C20 13.6569 16.4183 15 12 15C7.58172 15 4 13.6569 4 12" stroke="#000000" strokeWidth="1.5"></path>
    <path d="M7 17.842C7.60158 18.0229 8.27434 18.1718 9 18.282" stroke="#000000" strokeWidth="1.5" strokeLinecap="round"></path>
    <path d="M20 5V19C20 20.6569 16.4183 22 12 22C7.58172 22 4 20.6569 4 19V5" stroke="#000000" strokeWidth="1.5"></path>
</svg>, direction: 'right' },
  { name: 'React Native', icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} color={"#fff"} fill={"none"}>
    <path d="M10.7962 2.91338C11.4188 2.29077 12.2756 1.96039 13.1551 2.0038L18.7587 2.28039C20.3601 2.35944 21.6406 3.63993 21.7196 5.24131L21.9962 10.8449C22.0396 11.7244 21.7092 12.5811 21.0866 13.2037L13.5082 20.7822C11.8844 22.4059 9.25177 22.4059 7.62799 20.7822L3.21783 16.372C1.59406 14.7482 1.59406 12.1156 3.21783 10.4918L10.7962 2.91338Z" stroke="#000000" strokeWidth="1.5"></path>
    <path d="M17.5002 6.5L17.4912 6.5" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
    <path d="M12.982 12.2064L10.0004 14M10.0004 14L7.01869 15.7936M10.0004 14L10.0187 17.5M10.0004 14L9.98202 10.5M10.0004 14L13 15.7063M10.0004 14L7 12.2935" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>, direction: 'top' },
];

const designSkills = [
  { name: 'Figma', icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} color={"#ffff"} fill={"none"}>
    <circle cx="15" cy="12" r="3" stroke="#000000" strokeWidth="1.5" strokeLinejoin="round"></circle>
    <path d="M9 21C10.6569 21 12 19.6569 12 18V15H9C7.34315 15 6 16.3431 6 18C6 19.6569 7.34315 21 9 21Z" stroke="#000000" strokeWidth="1.5" strokeLinejoin="round"></path>
    <path d="M12 9V15H9C7.34315 15 6 13.6569 6 12C6 10.3431 7.34315 9 9 9H12Z" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
    <path d="M12 3V9H9C7.34315 9 6 7.65685 6 6C6 4.34315 7.34315 3 9 3H12Z" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
    <path d="M12 3V9H15C16.6569 9 18 7.65685 18 6C18 4.34315 16.6569 3 15 3H12Z" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>, direction: 'bottom' },
  { name: 'Adobe XD', icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} color={"#fff"} fill={"none"}>
    <circle cx="15" cy="12" r="3" stroke="#000000" strokeWidth="1.5" strokeLinejoin="round"></circle>
    <path d="M9 21C10.6569 21 12 19.6569 12 18V15H9C7.34315 15 6 16.3431 6 18C6 19.6569 7.34315 21 9 21Z" stroke="#000000" strokeWidth="1.5" strokeLinejoin="round"></path>
    <path d="M12 9V15H9C7.34315 15 6 13.6569 6 12C6 10.3431 7.34315 9 9 9H12Z" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
    <path d="M12 3V9H9C7.34315 9 6 7.65685 6 6C6 4.34315 7.34315 3 9 3H12Z" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
    <path d="M12 3V9H15C16.6569 9 18 7.65685 18 6C18 4.34315 16.6569 3 15 3H12Z" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>, direction: 'left' },
  { name: 'Photoshop', icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} color={"#fff"} fill={"none"}>
    <path d="M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z" stroke="#000000" strokeWidth="1.5" strokeLinejoin="round"></path>
    <path d="M6 8L12 16M6 16L12 8" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
    <path d="M18 11L18 15C18 16.1026 17.483 16 16.5 16C15.1193 16 14 14.8807 14 13.5C14 12.1193 15.1193 11 16.5 11H18ZM18 11V8" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>, direction: 'right' },
];

// Container variant for staggering children
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

// Custom easing curve for pouring motion
const pouringEasing = [0.22, 1, 0.36, 1];

// Variants for the "pour-in" effect
const getItemVariants = (direction) => {
  const distance = 60;
  switch (direction) {
    case 'pourIn':
      return {
        hidden: { opacity: 0, y: -distance, scaleY: 0.1 },
        visible: {
          opacity: 1,
          y: 0,
          scaleY: 1,
          transition: {
            ease: pouringEasing,
            duration: 0.6,
          },
        },
      };
    // Keep original directions if needed
    case 'left':
      return {
        hidden: { opacity: 0, x: -distance },
        visible: { opacity: 1, x: 0 },
      };
    case 'right':
      return {
        hidden: { opacity: 0, x: distance },
        visible: { opacity: 1, x: 0 },
      };
    case 'top':
      return {
        hidden: { opacity: 0, y: -distance },
        visible: { opacity: 1, y: 0 },
      };
    case 'bottom':
      return {
        hidden: { opacity: 0, y: distance },
        visible: { opacity: 1, y: 0 },
      };
    default:
      return {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
      };
  }
};

const BentoGrid = () => {
  const [showAddress, setShowAddress] = useState(false);
  const [showExperience, setShowExperience] = useState(false);
  const [showEducation, setShowEducation] = useState(false);
  const [showSkills, setShowSkills] = useState(false);

  return (
    <div className="flex h-screen w-full bg-white">
      {/* Image Section */}
      <div className="relative w-1/2 h-full">
        <img
          src={profileIMG}
          alt="About Us"
          className="w-full h-full object-cover"
        />
        {/* Toggle Button */}
        <button
          className="absolute bottom-6 right-6 bg-black hover:bg-white hover:text-black text-white p-4 rounded-full shadow-lg transition duration-300"
          onClick={() => setShowSkills(!showSkills)}
          aria-label="Toggle View"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width={24}
            height={24}
            fill="none"
          >
            <path
              d="M12.5 18C12.5 18 18.5 13.5811 18.5 12C18.5 10.4188 12.5 6 12.5 6"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M5.50005 18C5.50005 18 11.5 13.5811 11.5 12C11.5 10.4188 5.5 6 5.5 6"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>

      {/* Text Section */}
      <div className="w-1/2 flex items-center justify-center p-12 text-center md:text-left overflow-y-auto">
        <AnimatePresence mode="wait">
          {!showSkills ? (
            <motion.div
              key="about"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4 }}
            >
              <h2 className="text-4xl font-bold text-gray-800 mb-6">About Me</h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                I am a dedicated software engineer and freelance developer creating impactful digital experiences. From startups to enterprises, I build scalable, modern, and responsive solutions that help my clients succeed, with a Bachelor of Science degree in Information Technology. With over three years of hands-on experience, 
                I specialize in native web development technologies as well as Python programming. My passion lies in building efficient, scalable, and user-friendly applications tailored to client needs, combining both technical expertise and creative problem-solving skills.
              </p>

              {/* Address Dropdown */}
              <div className="mb-6">
                <button
                  onClick={() => setShowAddress(!showAddress)}
                  className="flex items-center text-black font-semibold underline underline-offset-4"
                >
                  Address
                  <svg
                    className={`ml-2 transition-transform duration-300 ${showAddress ? 'rotate-180' : 'rotate-0'}`}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {showAddress && (
                  <div className="mt-2 text-gray-600 text-base">
                    Based in Limpopo, Polokwane – available remotely and on-site within select regions.
                  </div>
                )}
              </div>

              {/* Experience Dropdown */}
              <div className="mb-6">
                <button
                  onClick={() => setShowExperience(!showExperience)}
                  className="flex items-center text-black font-semibold underline underline-offset-4"
                >
                  Experience
                  <svg
                    className={`ml-2 transition-transform duration-300 ${showExperience ? 'rotate-180' : 'rotate-0'}`}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {showExperience && (
                  <div className="mt-2 text-gray-600 text-base">
                    3+ years of experience working with HTML, CSS, JavaScript, PHP, Typescript, Node.js, React Native expo, SQL, Supabase and Python in both freelance and collaborative environments. Delivered websites, dashboards, APIs, and automation scripts for various clients.
                  </div>
                )}
              </div>

              {/* Education Dropdown */}
              <div>
                <button
                  onClick={() => setShowEducation(!showEducation)}
                  className="flex items-center text-black font-semibold underline underline-offset-4"
                >
                  Education
                  <svg
                    className={`ml-2 transition-transform duration-300 ${showEducation ? 'rotate-180' : 'rotate-0'}`}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {showEducation && (
                  <div className="mt-2 text-gray-600 text-base">
                    Bachelor of Science in Information Technology – Richfield Graduate Institute of Technology (RGIT),
                    <br/>
                    Cisco Badges in Beginner Data Science & Cyber Security,
                    <br/>
                    Certifications: AWS, Google Cloud,
                  </div>
                )}
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="skills"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4 }}
              className="text-center w-full"
            >
              <h2 className="text-4xl font-bold text-gray-800 mb-6">Skills Showcase</h2>

              <h3 className="text-2xl font-semibold mb-4 text-gray-700">Technical Skills</h3>
              <motion.div
                className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                {techSkills.map(({ name, icon }) => (
                  <motion.div
                    key={name}
                    className="flex items-center gap-2 border border-black bg-transparent text-black py-2 px-4 rounded-full shadow-sm"
                    initial={getItemVariants('pourIn').hidden}
                    animate={getItemVariants('pourIn').visible}
                    transition={{ type: 'spring', stiffness: 100, damping: 12 }}
                  >
                    <span className="text-xl">{icon}</span>
                    {name}
                  </motion.div>
                ))}
              </motion.div>

              <h3 className="text-2xl font-semibold mb-4 text-gray-700">Design Tools</h3>
              <motion.div
                className="grid grid-cols-2 md:grid-cols-3 gap-4"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                {designSkills.map(({ name, icon }) => (
                  <motion.div
                    key={name}
                    className="flex items-center gap-2 border border-gray-800 bg-transparent text-gray-800 py-2 px-4 rounded-full shadow-sm"
                    initial={getItemVariants('pourIn').hidden}
                    animate={getItemVariants('pourIn').visible}
                    transition={{ type: 'spring', stiffness: 100, damping: 12 }}
                  >
                    <span className="text-xl">{icon}</span>
                    {name}
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default BentoGrid;
