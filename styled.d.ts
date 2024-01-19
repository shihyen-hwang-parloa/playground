import 'styled-components';

import type { Theme } from '@parloa/ui-library';

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}