import 'styled-components/native';

import { COLOR_TYPE, EFFECTS_TYPE, FONT_TYPE } from '@/presentation/theme';

declare module 'styled-components/native' {
  export interface DefaultTheme {
    colors: COLOR_TYPE;
    fonts: FONT_TYPE;
    effects: EFFECTS_TYPE;
  }
}
