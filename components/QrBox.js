import React from 'react';

const getQrData = (accountCode) => `2;RJ_SEAT;${accountCode}`

const QrBox = ({ qrData, userAccountCode }) => (
  <div className="flex flex-col items-center gap-1">
      <img src="unknown" /> {/* replace with qr code */}
    {userAccountCode && (
      <div className="text-neutral-gray">
        Cislo uctu {userAccountCode}
      </div>
    )}
  </div>
);
export default QrBox;