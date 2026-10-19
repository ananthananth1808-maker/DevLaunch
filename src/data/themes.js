export const themes = [
  {
    id: "minimal-pro",
    name: "Minimal Pro",
    description: "Light, clean and quietly confident",
    swatch: ["#ffffff", "#edf5ff", "#2678ee"],
  },
  {
    id: "creative-studio",
    name: "Creative Studio",
    description: "Expressive shapes and vibrant blue",
    swatch: ["#f3f7ff", "#dceaff", "#3978f6"],
  },
  {
    id: "dark-pro",
    name: "Dark Pro",
    description: "Deep navy with electric-blue accents",
    swatch: ["#0c1220", "#17243a", "#69a9ff"],
  },
];

export const DEFAULT_THEME = themes[0].id;
export const THEME_STORAGE_KEY = "devlaunch-theme";

export function isThemeId(value) {
  return themes.some((theme) => theme.id === value);
}

export function getInitialTheme() {
  try {
    const storedTheme = localStorage.getItem(THEME_STORAGE_KEY);
    if (isThemeId(storedTheme)) return storedTheme;
  } catch {
    // A saved preference is optional; fall back to the default theme.
  }
  return isThemeId(document.documentElement.dataset.theme)
    ? document.documentElement.dataset.theme
    : DEFAULT_THEME;
}

export function applyTheme(themeId) {
  const theme = isThemeId(themeId) ? themeId : DEFAULT_THEME;
  document.documentElement.dataset.theme = theme;
  try {
    localStorage.setItem(THEME_STORAGE_KEY, theme);
  } catch {
    // Applying the theme to the current page does not depend on storage.
  }
  return theme;
}
