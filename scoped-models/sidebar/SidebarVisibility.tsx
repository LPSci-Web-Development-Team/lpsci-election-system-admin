import * as React from 'react';

// ANCHOR Model
import createModel from '@lxsmnsyc/react-scoped-model';

// ANCHOR Hooks
import { useToggle } from '@lpsci/hooks';

// ANCHOR Models
import { DeviceView } from '@scoped-models/device/DeviceView';

export const SidebarVisibility = createModel(
  () => {
    const control = useToggle(true);

    const isMobile = DeviceView.useSelector((state) => state.isMobile);

    const initialToggle = React.useRef(true);

    React.useEffect(() => {
      if (isMobile) {
        initialToggle.current = true;
      }
    }, [isMobile]);

    // Hides sidebar on mobile
    React.useEffect(() => {
      if (isMobile && control.state && initialToggle.current) {
        control.hide();
        initialToggle.current = false;
      }
    }, [isMobile, control]);

    return control;
  },
  {
    displayName: 'Models.SidebarVisibility',
  },
);
