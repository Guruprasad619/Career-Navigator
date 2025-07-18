'use client';

import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';

export function useThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return { theme: undefined, setTheme: () => {} };
  }

  return { theme, setTheme };
}