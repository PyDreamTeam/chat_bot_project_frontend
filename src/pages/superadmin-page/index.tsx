import SuperadminDashboard from '@/src/components/entities/superadminDashboard.tsx';
import SuperadminPageWrapper from '@/src/components/wrappers/SuperadminWrapper';
import React from 'react'

const SuperadminPage = () => {
  return (
       <SuperadminPageWrapper page={"superadminPage"}>
            <SuperadminDashboard />
       </SuperadminPageWrapper>
  );
}

export default SuperadminPage;
