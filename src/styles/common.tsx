import { makeStyles, createStyles } from '@mui/styles';
import { alpha, createTheme } from '@mui/material/styles';
type ThemeType = 'red';

export const getCommon = () => {
  const color: ThemeType = 'red';
  const theme = createTheme();
  const colors = {
    primary: (): string => {
      switch (color) {
        case 'red':
          return '#b61f23';
      }
    },
    primaryShade: (): string => {
      switch (color) {
        case 'red':
          return '#b61f23';
      }
    },
    primaryShadeDark: (): string => {
      switch (color) {
        case 'red':
          return '#BD3A41';
      }
    },
    secondary: (): string => {
      switch (color) {
        case 'red':
          return '#F0EC62';
      }
    },
    secondaryShade: (): string => {
      switch (color) {
        case 'red':
          return '#F2F0AC';
      }
    },
    success: (): string => {
      switch (color) {
        case 'red':
          return '#28A745';
      }
    },
    successShade: (): string => {
      switch (color) {
        case 'red':
          return '#28A745';
      }
    },
    danger: (): string => {
      switch (color) {
        case 'red':
          return '#FF2919';
      }
    },
    dangerShade: (): string => {
      switch (color) {
        case 'red':
          return '#E80C47';
      }
    },
    warning: (): string => {
      switch (color) {
        case 'red':
          return '#FFA200';
      }
    },
    warningShade: (): string => {
      switch (color) {
        case 'red':
          return '#FF650D';
      }
    },
    info: (): string => {
      switch (color) {
        case 'red':
          return '#17A2B8';
      }
    },
    infoShade: (): string => {
      switch (color) {
        case 'red':
          return '#0ECFB4';
      }
    },
    light: (): string => {
      switch (color) {
        case 'red':
          return '#F8F9FA';
      }
    },
    lightShade: (): string => {
      switch (color) {
        case 'red':
          return '#f7fdff';
      }
    },
    dark: (): string => {
      switch (color) {
        case 'red':
          return '#353A40';
      }
    },
    darkShade: (): string => {
      switch (color) {
        case 'red':
          return '#445157';
      }
    },
    muted: (): string => {
      switch (color) {
        case 'red':
          return '#6C757D';
      }
    },
    mutedShade: (): string => {
      switch (color) {
        case 'red':
          return '#6C757D';
      }
    },
    white: (): string => {
      switch (color) {
        case 'red':
          return '#FFFFFF';
      }
    },
    whiteShade: (): string => {
      switch (color) {
        case 'red':
          return '#fff7f7';
      }
    },
  };
  const svg = {
    color: {
      primary: {
        '& path, text, circle': { fill: colors.primary() + ' !important' },
      },
      primaryShade: {
        '& path, text, circle': { fill: colors.primaryShade() + ' !important' },
      },
      primaryShadeDark: {
        '& path, text, circle': {
          fill: colors.primaryShadeDark() + ' !important',
        },
      },
      secondary: {
        '& path, text, circle': { fill: colors.secondary() + ' !important' },
      },
      secondaryShade: {
        '& path, text, circle': {
          fill: colors.secondaryShade() + ' !important',
        },
      },
      success: {
        '& path, text, circle': { fill: colors.success() + ' !important' },
      },
      successShade: {
        '& path, text, circle': { fill: colors.successShade() + ' !important' },
      },
      danger: {
        '& path, text, circle': { fill: colors.danger() + ' !important' },
      },
      dangerShade: {
        '& path, text, circle': { fill: colors.dangerShade() + ' !important' },
      },
      warning: {
        '& path, text, circle': { fill: colors.warning() + ' !important' },
      },
      warningShade: {
        '& path, text, circle': { fill: colors.warningShade() + ' !important' },
      },
      info: {
        '& path, text, circle': { fill: colors.info() + ' !important' },
      },
      infoShade: {
        '& path, text, circle': { fill: colors.infoShade() + ' !important' },
      },
      light: {
        '& path, text, circle': { fill: colors.light() + ' !important' },
      },
      lightShade: {
        '& path, text, circle': { fill: colors.lightShade() + ' !important' },
      },
      dark: {
        '& path, text, circle': { fill: colors.dark() + ' !important' },
      },
      darkShade: {
        '& path, text, circle': { fill: colors.darkShade() + ' !important' },
      },
      muted: {
        '& path, text, circle': { fill: colors.muted() + ' !important' },
      },
      mutedShade: {
        '& path, text, circle': { fill: colors.mutedShade() + ' !important' },
      },
      white: {
        '& path, text, circle': { fill: colors.white() + ' !important' },
      },
      whiteShade: {
        '& path, text, circle': { fill: colors.whiteShade() + ' !important' },
      },
      transparent: {
        '& path, text, circle': { fill: 'transparent !important' },
      },
    },
  };
  const text = {
    decoration: {
      none: {
        textDecoration: 'none !important',
      },
    },
    color: {
      primary: {
        color: colors.primary() + ' !important',
      },
      primaryShade: {
        color: colors.primaryShade() + ' !important',
      },
      primaryShadeDark: {
        color: colors.primaryShadeDark() + ' !important',
      },
      secondary: {
        color: colors.secondary() + ' !important',
      },
      secondaryShade: {
        color: colors.secondaryShade() + ' !important',
      },
      success: {
        color: colors.success() + ' !important',
      },
      successShade: {
        color: colors.successShade() + ' !important',
      },
      danger: {
        color: colors.danger() + ' !important',
      },
      dangerShade: {
        color: colors.dangerShade() + ' !important',
      },
      warning: {
        color: colors.warning() + ' !important',
      },
      warningShade: {
        color: colors.warningShade() + ' !important',
      },
      info: {
        color: colors.info() + ' !important',
      },
      infoShade: {
        color: colors.infoShade() + ' !important',
      },
      light: {
        color: colors.light() + ' !important',
      },
      lightShade: {
        color: colors.lightShade() + ' !important',
      },
      dark: {
        color: colors.dark() + ' !important',
      },
      darkShade: {
        color: colors.darkShade() + ' !important',
      },
      muted: {
        color: colors.muted() + ' !important',
      },
      mutedShade: {
        color: colors.mutedShade() + ' !important',
      },
      white: {
        color: colors.white() + ' !important',
      },
      whiteShade: {
        color: colors.whiteShade() + ' !important',
      },
      transparent: {
        color: 'transparent !important',
      },
    },
  };
  const border = {
    color: {
      primary: {
        boderColor: colors.primary() + ' !important',
      },
      primaryShade: {
        boderColor: colors.primaryShade() + ' !important',
      },
      primaryShadeDark: {
        boderColor: colors.primaryShadeDark() + ' !important',
      },
      secondary: {
        boderColor: colors.secondary() + ' !important',
      },
      secondaryShade: {
        boderColor: colors.secondaryShade() + ' !important',
      },
      success: {
        boderColor: colors.success() + ' !important',
      },
      successShade: {
        boderColor: colors.successShade() + ' !important',
      },
      danger: {
        boderColor: colors.danger() + ' !important',
      },
      dangerShade: {
        boderColor: colors.dangerShade() + ' !important',
      },
      warning: {
        boderColor: colors.warning() + ' !important',
      },
      warningShade: {
        boderColor: colors.warningShade() + ' !important',
      },
      info: {
        boderColor: colors.info() + ' !important',
      },
      infoShade: {
        boderColor: colors.infoShade() + ' !important',
      },
      light: {
        boderColor: colors.light() + ' !important',
      },
      lightShade: {
        boderColor: colors.lightShade() + ' !important',
      },
      dark: {
        boderColor: colors.dark() + ' !important',
      },
      darkShade: {
        boderColor: colors.darkShade() + ' !important',
      },
      muted: {
        boderColor: colors.muted() + ' !important',
      },
      mutedShade: {
        boderColor: colors.mutedShade() + ' !important',
      },
      white: {
        boderColor: colors.white() + ' !important',
      },
      whiteShade: {
        boderColor: colors.whiteShade() + ' !important',
      },
      transparent: {
        boderColor: 'transparent !important',
      },
    },
  };
  const background = {
    primary: {
      background: alpha(colors.primary(), 0.9) + ' !important',
    },
    primaryShade: {
      background: alpha(colors.primaryShade(), 0.9) + ' !important',
    },
    primaryShadeDark: {
      background: alpha(colors.primaryShadeDark(), 0.9) + ' !important',
    },
    secondary: {
      background: alpha(colors.secondary(), 0.9) + ' !important',
    },
    secondaryShade: {
      background: alpha(colors.secondaryShade(), 0.9) + ' !important',
    },
    success: {
      background: alpha(colors.success(), 0.9) + ' !important',
    },
    successShade: {
      background: alpha(colors.successShade(), 0.9) + ' !important',
    },
    danger: {
      background: alpha(colors.danger(), 0.9) + ' !important',
    },
    dangerShade: {
      background: alpha(colors.dangerShade(), 0.9) + ' !important',
    },
    warning: {
      background: alpha(colors.warning(), 0.9) + ' !important',
    },
    warningShade: {
      background: alpha(colors.warningShade(), 0.9) + ' !important',
    },
    info: {
      background: alpha(colors.info(), 0.9) + ' !important',
    },
    infoShade: {
      background: alpha(colors.infoShade(), 0.9) + ' !important',
    },
    light: {
      background: alpha(colors.light(), 0.9) + ' !important',
    },
    lightShade: {
      background: alpha(colors.lightShade(), 0.9) + ' !important',
    },
    dark: {
      background: alpha(colors.dark(), 0.9) + ' !important',
    },
    darkShade: {
      background: alpha(colors.darkShade(), 0.9) + ' !important',
    },
    muted: {
      background: alpha(colors.muted(), 0.9) + ' !important',
    },
    mutedShade: {
      background: alpha(colors.mutedShade(), 0.9) + ' !important',
    },
    white: {
      background: alpha(colors.white(), 0.9) + ' !important',
    },
    whiteShade: {
      background: alpha(colors.whiteShade(), 0.9) + ' !important',
    },
    transparent: {
      background: 'transparent !important',
    },
  };
  const display = {
    none: {
      display: 'none !important',
    },
    flex: {
      display: 'flex !important',
    },
    block: {
      display: 'block !important',
    },
  };
  const position = {
    fixed: {
      position: 'fixed !important' as 'fixed',
    },
    top: {
      top: '0 !important',
    },
    static: {
      position: 'static !important' as 'static',
    },
    relative: {
      position: 'relative !important' as 'relative',
    },
    absolute: {
      position: 'absolute !important' as 'absolute',
    },
  };
  const flex = {
    direction: {
      row: {
        flexDirection: 'row !important' as 'row',
      },
      column: {
        flexDirection: 'column !important' as 'column',
      },
    },
    wrap: {
      wrap: { flexWrap: 'wrap !important' as 'wrap' },
    },
    grow1: {
      flexGrow: 1,
    },
    grow2: {
      flexGrow: 2,
    },
    grow3: {
      flexGrow: 3,
    },
  };
  const flexContainer = {
    row: {
      center: {
        justifyContent: 'center !important',
      },
      left: {
        justifyContent: 'flex-start !important',
      },
      right: {
        justifyContent: 'flex-end !important',
      },
      top: {
        alignItems: 'flex-start !important',
      },
      middle: {
        alignItems: 'center !important',
      },
      bottom: {
        alignItems: 'flex-end !important',
      },
      between: {
        justifyContent: 'space-between !important',
      },
      around: {
        justifyContent: 'space-around !important',
      },
      evenly: {
        justifyContent: 'space-evenly !important',
      },
    },
    column: {
      center: {
        alignItems: 'center !important',
      },
      left: {
        alignItems: 'flex-start !important',
      },
      right: {
        alignItems: 'flex-end !important',
      },
      top: {
        justifyContent: 'flex-start !important',
      },
      middle: {
        justifyContent: 'center !important',
      },
      bottom: {
        justifyContent: 'flex-end !important',
      },
      between: {
        justifyContent: 'space-between !important',
      },
      around: {
        justifyContent: 'space-around !important',
      },
      evenly: {
        justifyContent: 'space-evenly !important',
      },
    },
  };
  const height = {
    auto: {
      height: 'auto !important',
    },
    full: {
      height: '100% !important',
    },
    fullView: {
      height: '100vh !important',
    },
  };
  const width = {
    auto: {
      width: 'auto !important',
    },
    full: {
      width: '100% !important',
    },
    fullView: {
      width: '100vw !important',
    },
    w90: {
      width: '90% !important',
    },
    w50: {
      width: '50% !important',
    },
  };
  const overflow = {
    none: {
      overflow: 'none !important',
    },
    auto: {
      overflow: 'auto !important',
    },
    y: {
      auto: { overflowY: 'auto !important' as 'auto' },
      scroll: { overflowY: 'scroll !important' as 'scroll' },
      hidden: { overflowY: 'hidden !important' as 'hidden' },
    },
    x: {
      auto: { overflowX: 'auto !important' as 'auto' },
      scroll: { overflowX: 'scroll !important' as 'scroll' },
      hidden: { overflowX: 'hidden !important' as 'hidden' },
    },
  };

  const cursor = {
    auto: { cursor: 'auto !important' },
    default: { cursor: 'default !important' },
    none: { cursor: 'none !important' },
    pointer: { cursor: 'pointer !important' },
    resize: { cursor: 'se-resize !important' },
  };

  const custom = {
    positionFixedTop: {
      ...position.fixed,
      ...position.top,
    },
    flexContainerColumnCenter: {
      ...flex.direction.column,
      ...flexContainer.column.center,
    },
    flexContainerColumnAround: {
      ...flex.direction.column,
      ...flexContainer.column.around,
    },
    flexContainerColumnFull: {
      ...flex.direction.column,
      ...flexContainer.column.center,
      ...flexContainer.column.middle,
    },
    flexContainerColumnMiddle: {
      ...flex.direction.column,
      ...flexContainer.column.middle,
    },
    flexContainerRowFull: {
      ...flex.direction.row,
      ...flex.wrap.wrap,
      ...flexContainer.row.middle,
      ...flexContainer.row.center,
    },
    flexContainerRowCenter: {
      ...flex.direction.row,
      ...flex.wrap.wrap,
      ...flexContainer.row.center,
    },
    flexContainerRowAround: {
      ...flex.direction.row,
      ...flex.wrap.wrap,
      ...flexContainer.row.around,
    },
    flexContainerRowStart: {
      ...flex.direction.row,
      ...flex.wrap.wrap,
      ...flexContainer.row.left,
    },
    flexContainerRowMiddle: {
      ...flex.direction.row,
      ...flexContainer.row.middle,
    },
    fullHeightOverflowY: {
      ...overflow.y.auto,
      ...overflow.x.hidden,
      ...height.fullView,
    },
    disabledLink: {
      ...text.decoration.none,
      ...cursor.default,
      '&:hover': {
        ...text.decoration.none,
        ...cursor.default,
      },
    },
    hoverPointer: {
      '&:hover': {
        ...cursor.pointer,
      },
    },
  };

  const stylesCommon = makeStyles(
    createStyles({
      bgDanger: background.danger,
      bgDangerShade: background.dangerShade,
      bgDark: background.dark,
      bgDarkShade: background.darkShade,
      bgInfo: background.info,
      bgInfoShade: background.infoShade,
      bgLight: background.light,
      bgLightShade: background.lightShade,
      bgMuted: background.muted,
      bgMutedShade: background.mutedShade,
      bgPrimary: background.primary,
      bgPrimaryShade: background.primaryShade,
      bgPrimaryShadeDark: background.primaryShadeDark,
      bgSecondary: background.secondary,
      bgSecondaryShade: background.secondaryShade,
      bgSuccess: background.success,
      bgSuccessShade: background.successShade,
      bgWarning: background.warning,
      bgWarningShade: background.warningShade,
      bgWhite: background.white,
      bgWhiteShade: background.whiteShade,
      flexGrow: flex.grow1,
      fullHeightOverflowY: custom.fullHeightOverflowY,
      hide: display.none,
      positionFixedTop: custom.positionFixedTop,
      disabledLink: custom.disabledLink,
    })
  );

  return {
    colors: colors,
    svg: svg,
    text: text,
    cursor: cursor,
    border: border,
    background: background,
    display: display,
    position: position,
    flex: flex,
    flexContainer: flexContainer,
    height: height,
    width: width,
    overflow: overflow,
    custom: custom,
    stylesCommon: stylesCommon,
    theme: theme,
  };
};
