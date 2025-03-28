import { Outlet } from 'react-router-dom';
import { DevicesLayoutProps } from '../types/devices.types';

const DevicesLayout = ({ routeType }: DevicesLayoutProps) => {
  return (
    <div>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default DevicesLayout;
