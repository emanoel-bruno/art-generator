import { makeStyles, createStyles } from '@mui/material/styles';
import { getCommon } from './common';

const common = getCommon();
export const stylesApp = makeStyles(() =>
  createStyles({
    hide: {
      ...common.display.none,
    },
    stepLabel: {
      '& .MuiStepIcon-active': {
        ...common.text.color.primary,
      },
      '& .MuiStepIcon-completed': {
        ...common.text.color.primary,
      },
    },
    textIconContainer: {
      ...common.display.flex,
      ...common.custom.flexContainerRowMiddle,
    },
    // Calendar Card
    inputContainerLabelCalendar: {
      position: 'relative',
      top: '-10px',
    },
    buttonBack: {
      marginTop: common.theme.spacing(1),
      marginRight: common.theme.spacing(3),
    },
    buttonNext: {
      marginTop: common.theme.spacing(1),
      marginRight: common.theme.spacing(1),
      ...common.background.primary,
      ...common.text.color.white,
      marginBottom: '30px',
    },
    actionsContainer: {
      ...common.width.full,
      ...common.display.flex,
      ...common.custom.flexContainerRowCenter,
      marginTop: '30px',
    },
    dateInput: {
      marginTop: '8px',
    },
  })
);
