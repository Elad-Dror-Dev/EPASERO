function scrollToSection(sectionId: string) {
  const targetElement = document.getElementById(sectionId)

  if (!targetElement) return
  const headerOffset = 0
  const elementPosition = targetElement.getBoundingClientRect().top
  const offsetPosition = elementPosition + window.pageYOffset - headerOffset

  window.scrollTo({
    top: offsetPosition,
    behavior: 'smooth',
  })
}

function waitForElement(e: React.MouseEvent<HTMLAnchorElement>, id: string, callback: () => void) {
  const el = document.getElementById(id)
  if (el) {
    e.preventDefault()
    callback()
    return
  }

  const observer = new MutationObserver(() => {
    const element = document.getElementById(id)
    if (element) {
      observer.disconnect()
      callback()
    }
  })

  observer.observe(document.body, {
    childList: true,
    subtree: true,
  })
}

export const smoothScrollToSection = (
  e: React.MouseEvent<HTMLAnchorElement>,
  sectionId?: string,
) => {
  if (!sectionId) return
  waitForElement(e, sectionId, () => scrollToSection(sectionId))
}
