const windowWidth = window.innerWidth

var defaultVh = 684
if (windowWidth > 350 && windowWidth < 1701) {
  defaultVh = 784
} else if (windowWidth > 1700) {
  defaultVh = window.innerHeight
}

export const vh = defaultVh * 0.01
