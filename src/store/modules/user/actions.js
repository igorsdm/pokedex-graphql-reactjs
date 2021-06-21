export function changeTheme(theme) {
  return {
    type: '@user/CHANGE_THEME',
    payload: { theme },
  };
}
