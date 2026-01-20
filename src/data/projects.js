import artProjectImage from '../assets/images/art_project.jpg'
import bedroomImage from '../assets/images/bedroom.jpg'
import beeProtectionImage from '../assets/images/bee_protection.jpg'
import floorPlanImage from '../assets/images/floor_plan.jpg'
import flowerKitImage from '../assets/images/flower_kit.jpg'
import lampColourImage from '../assets/images/lamp_colour.jpg'
import lampDarkImage from '../assets/images/lamp_dark.jpg'
import technicalDrawingImage from '../assets/images/technical_drawing.jpg'
import treesImage from '../assets/images/trees.jpg'
import simulationPdf from '../assets/documents/simulation.pdf'

export const projects = [
  {
    id: 9,
    title: 'Simulated Office',
    category: 'Community Pavillion',
    description: 'Detailed simulation report and analysis',
    type: 'pdf',
    file: simulationPdf
  },
  {
    id: 7,
    title: 'The Light Within',
    category: 'Product Design',
    description: 'Butterfly inspired stained glass lamp fixture',
    image: lampDarkImage
  },
  {
    id: 6,
    title: 'Feeling Within Architectual Drawing',
    category: 'Product Design',
    description: 'Scale 1:1',
    image: lampColourImage
  },
  {
    id: 2,
    title: 'Bedroom Design',
    category: 'Residental design hand drawn',
    description: 'Perspective view of butterfly lamp',
    image: bedroomImage
  },
  {
    id: 1,
    title: 'Feeling Within',
    category: 'Grade 11 - 12 Hour Version 1',
    description: 'Mediums of tissue paper background texture, water colour and black fine liner',
    image: artProjectImage
  },
  {
    id: 3,
    title: 'Bee Protection Concept',
    category: 'Sustainable Design',
    description: 'Eco-Friendly Initiative',
    image: beeProtectionImage
  },
  {
    id: 8,
    title: 'Sectional Technical Drawing',
    category: 'Hand Drawn Technical Design',
    description: 'Scale 1:20',
    image: technicalDrawingImage
  },
  {
    id: 4,
    title: 'Floor Plan',
    category: 'Technical Design',
    description: 'Precise Planning',
    image: floorPlanImage
  }
]

