// ANCHOR Model
import createModel from '@lxsmnsyc/react-scoped-model';

// ANCHOR LPSci Hooks
import { useWindowSize } from '@lpsci/hooks';

interface IState {
  isMobile: boolean;
  isDesktop: boolean;
  width: number;
  height: number;
}

export const DeviceView = createModel<IState>(() => {
  const { width, height } = useWindowSize();

  return {
    isMobile: width <= 768,
    isDesktop: width > 768,
    width,
    height,
  };
},
{
  displayName: 'Models.DeviceView',
});
