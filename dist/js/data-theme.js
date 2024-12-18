const DATA_THEME = {
  body_attribute_key: 'data-theme',
  storage_key: 'data-theme',
  value_default: 'light',
  value_dark: 'dark',

  getTheme: () => localStorage.getItem(DATA_THEME.storage_key) || document.documentElement.getAttribute(DATA_THEME.body_attribute_key),

  setTheme: (theme = null, storage = true) => {
    if (theme !== DATA_THEME.value_default && theme !== DATA_THEME.value_dark) {
      theme = DATA_THEME.value_default
    }

    document.documentElement.setAttribute(DATA_THEME.body_attribute_key, theme)

    if (storage) {
      localStorage.setItem(DATA_THEME.storage_key, theme)
    }

    return true
  },

  toggleTheme: () => {
    let theme = DATA_THEME.getTheme()

    if (theme === DATA_THEME.value_default) {
      theme = DATA_THEME.value_dark
    } else {
      theme = DATA_THEME.value_default
    }

    DATA_THEME.setTheme(theme)

    return true
  },
}

const initial_theme = DATA_THEME.getTheme()
if (initial_theme) {
  DATA_THEME.setTheme(initial_theme)
} else {
  let theme = DATA_THEME.value_default

  if (window.matchMedia) {
    theme = window.matchMedia('(prefers-color-scheme: dark)').matches ? DATA_THEME.value_dark : DATA_THEME.value_default

    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (event) => {
      const t = event.matches ? DATA_THEME.value_dark : DATA_THEME.value_default
      DATA_THEME.setTheme(t, false)
    })
  }

  DATA_THEME.setTheme(theme, false)
}

document.addEventListener('click', (event) => {
  const theme_switcher = event.target.closest('[data-theme-set]')
  const theme_toggler = event.target.closest('[data-theme-toggle]')

  if (!theme_switcher && !theme_toggler) {
    return false
  }

  event.preventDefault()

  const theme = theme_switcher.getAttribute('data-theme-set')

  if (theme_switcher) {
    DATA_THEME.setTheme(theme)
  } else if (theme_toggler) {
    DATA_THEME.toggleTheme()
  }
})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJkYXRhLXRoZW1lLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IERBVEFfVEhFTUUgPSB7XG4gIGJvZHlfYXR0cmlidXRlX2tleTogJ2RhdGEtdGhlbWUnLFxuICBzdG9yYWdlX2tleTogJ2RhdGEtdGhlbWUnLFxuICB2YWx1ZV9kZWZhdWx0OiAnbGlnaHQnLFxuICB2YWx1ZV9kYXJrOiAnZGFyaycsXG5cbiAgZ2V0VGhlbWU6ICgpID0+IGxvY2FsU3RvcmFnZS5nZXRJdGVtKERBVEFfVEhFTUUuc3RvcmFnZV9rZXkpIHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5nZXRBdHRyaWJ1dGUoREFUQV9USEVNRS5ib2R5X2F0dHJpYnV0ZV9rZXkpLFxuXG4gIHNldFRoZW1lOiAodGhlbWUgPSBudWxsLCBzdG9yYWdlID0gdHJ1ZSkgPT4ge1xuICAgIGlmICh0aGVtZSAhPT0gREFUQV9USEVNRS52YWx1ZV9kZWZhdWx0ICYmIHRoZW1lICE9PSBEQVRBX1RIRU1FLnZhbHVlX2RhcmspIHtcbiAgICAgIHRoZW1lID0gREFUQV9USEVNRS52YWx1ZV9kZWZhdWx0XG4gICAgfVxuXG4gICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNldEF0dHJpYnV0ZShEQVRBX1RIRU1FLmJvZHlfYXR0cmlidXRlX2tleSwgdGhlbWUpXG5cbiAgICBpZiAoc3RvcmFnZSkge1xuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oREFUQV9USEVNRS5zdG9yYWdlX2tleSwgdGhlbWUpXG4gICAgfVxuXG4gICAgcmV0dXJuIHRydWVcbiAgfSxcblxuICB0b2dnbGVUaGVtZTogKCkgPT4ge1xuICAgIGxldCB0aGVtZSA9IERBVEFfVEhFTUUuZ2V0VGhlbWUoKVxuXG4gICAgaWYgKHRoZW1lID09PSBEQVRBX1RIRU1FLnZhbHVlX2RlZmF1bHQpIHtcbiAgICAgIHRoZW1lID0gREFUQV9USEVNRS52YWx1ZV9kYXJrXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoZW1lID0gREFUQV9USEVNRS52YWx1ZV9kZWZhdWx0XG4gICAgfVxuXG4gICAgREFUQV9USEVNRS5zZXRUaGVtZSh0aGVtZSlcblxuICAgIHJldHVybiB0cnVlXG4gIH0sXG59XG5cbmNvbnN0IGluaXRpYWxfdGhlbWUgPSBEQVRBX1RIRU1FLmdldFRoZW1lKClcbmlmIChpbml0aWFsX3RoZW1lKSB7XG4gIERBVEFfVEhFTUUuc2V0VGhlbWUoaW5pdGlhbF90aGVtZSlcbn0gZWxzZSB7XG4gIGxldCB0aGVtZSA9IERBVEFfVEhFTUUudmFsdWVfZGVmYXVsdFxuXG4gIGlmICh3aW5kb3cubWF0Y2hNZWRpYSkge1xuICAgIHRoZW1lID0gd2luZG93Lm1hdGNoTWVkaWEoJyhwcmVmZXJzLWNvbG9yLXNjaGVtZTogZGFyayknKS5tYXRjaGVzID8gREFUQV9USEVNRS52YWx1ZV9kYXJrIDogREFUQV9USEVNRS52YWx1ZV9kZWZhdWx0XG5cbiAgICB3aW5kb3cubWF0Y2hNZWRpYSgnKHByZWZlcnMtY29sb3Itc2NoZW1lOiBkYXJrKScpLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIChldmVudCkgPT4ge1xuICAgICAgY29uc3QgdCA9IGV2ZW50Lm1hdGNoZXMgPyBEQVRBX1RIRU1FLnZhbHVlX2RhcmsgOiBEQVRBX1RIRU1FLnZhbHVlX2RlZmF1bHRcbiAgICAgIERBVEFfVEhFTUUuc2V0VGhlbWUodCwgZmFsc2UpXG4gICAgfSlcbiAgfVxuXG4gIERBVEFfVEhFTUUuc2V0VGhlbWUodGhlbWUsIGZhbHNlKVxufVxuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICBjb25zdCB0aGVtZV9zd2l0Y2hlciA9IGV2ZW50LnRhcmdldC5jbG9zZXN0KCdbZGF0YS10aGVtZS1zZXRdJylcbiAgY29uc3QgdGhlbWVfdG9nZ2xlciA9IGV2ZW50LnRhcmdldC5jbG9zZXN0KCdbZGF0YS10aGVtZS10b2dnbGVdJylcblxuICBpZiAoIXRoZW1lX3N3aXRjaGVyICYmICF0aGVtZV90b2dnbGVyKSB7XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cblxuICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG5cbiAgY29uc3QgdGhlbWUgPSB0aGVtZV9zd2l0Y2hlci5nZXRBdHRyaWJ1dGUoJ2RhdGEtdGhlbWUtc2V0JylcblxuICBpZiAodGhlbWVfc3dpdGNoZXIpIHtcbiAgICBEQVRBX1RIRU1FLnNldFRoZW1lKHRoZW1lKVxuICB9IGVsc2UgaWYgKHRoZW1lX3RvZ2dsZXIpIHtcbiAgICBEQVRBX1RIRU1FLnRvZ2dsZVRoZW1lKClcbiAgfVxufSlcbiJdLCJmaWxlIjoiZGF0YS10aGVtZS5qcyJ9
