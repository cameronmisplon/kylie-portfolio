/**
 * Composable for smooth scrolling functionality
 */
export function useScrollTo() {
  const scrollTo = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return {
    scrollTo
  }
}

