import useLocalStorageState from 'use-local-storage-state';
import { useState, useEffect, useCallback, useMemo } from 'react';
import useEventListener from '@use-it/event-listener';

const noop = () => {};

const mockElement = {
  classList: {
    add: noop,
    remove: noop,
  },
};

const preferDarkQuery = '(prefers-color-scheme: dark)';

const initialize = (storageKey, glbl = global) => {
  const usePersistedDarkModeState = storageKey
    ? (initial) => useLocalStorageState(storageKey, {defaultValue: initial})
    : useState;

  const mql = glbl.matchMedia ? glbl.matchMedia(preferDarkQuery) : {};

  const mediaQueryEventTarget = {
    addEventListener: (_, handler) => mql.addListener && mql.addListener(handler),
    removeEventListener: (_, handler) => mql.removeListener && mql.removeListener(handler),
  };

  const isColorSchemeQuerySupported = mql.media === preferDarkQuery;

  const getInitialValue = usersInitialState => (
    isColorSchemeQuerySupported ? mql.matches : usersInitialState
  );

  // Mock element if SSR else real body element.
  const defaultElement = (glbl.document && glbl.document.body) || mockElement;

  const getDefaultOnChange = (
    element = defaultElement,
    classNameDark = 'dark-mode',
    classNameLight = 'light-mode'
  ) => (val) => {
    element.classList.add(val ? classNameDark : classNameLight);
    element.classList.remove(val ? classNameLight : classNameDark);
  };

  return {
    usePersistedDarkModeState,
    getDefaultOnChange,
    mediaQueryEventTarget,
    getInitialValue,
  };
};

const useDarkMode = (
  initialValue = false,
  {
    element,
    classNameDark,
    classNameLight,
    onChange,
    storageKey = 'darkMode',
    global,
  } = {}
) => {
  const {
    usePersistedDarkModeState,
    getDefaultOnChange,
    getInitialValue,
    mediaQueryEventTarget,
  } = useMemo(
    () => initialize(storageKey, global),
    [storageKey, global]
  );

  const [state, setState] = usePersistedDarkModeState(getInitialValue(initialValue));

  const stateChangeCallback = useMemo(
    () => onChange || getDefaultOnChange(element, classNameDark, classNameLight),
    [onChange, element, classNameDark, classNameLight, getDefaultOnChange]
  );

  // Call the onChange handler
  useEffect(() => {
    stateChangeCallback(state);
  }, [stateChangeCallback, state]);

  // Listen for media changes and set state.
  useEventListener(
    'change',
    ({ matches }) => setState(matches),
    mediaQueryEventTarget
  );

  return {
    value: state,
    enable: useCallback(() => setState(true), [setState]),
    disable: useCallback(() => setState(false), [setState]),
    toggle: useCallback(() => setState(current => !current), [setState]),
  };
};

export default useDarkMode;