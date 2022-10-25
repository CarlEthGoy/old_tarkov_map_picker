import {
  LY_THEME,
  LY_THEME_NAME,
  LY_THEME_GLOBAL_VARIABLES,
  PartialThemeVariables
} from '@alyle/ui';
import { color } from '@alyle/ui/color';

import { MinimaDeepDark} from '@alyle/ui/themes/minima';

/**
 * For dark theme
 * Theme name = minima-deep-dark
 */
export class CustomMinimaDeepDark implements PartialThemeVariables {
  name = 'minima-deep-dark';
  primary = {
    default: color(0xba5658),
    contrast: color(0xffffff)
  };
  accent = {
    default: color(0x69F0AE),
    contrast: color(0x202020)
  };
  warning = {
    default: color(0xF5002C),
    contrast: color(0x202020)
  };
}