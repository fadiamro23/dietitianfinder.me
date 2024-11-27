export function generateStaticParams() {
  // Define all the cities that should be pre-rendered
  return [
    { city: 'new-york' },
    { city: 'los-angeles' },
    { city: 'chicago' },
    { city: 'houston' },
    // Add more cities as needed
  ]
}

// Your existing page component... 