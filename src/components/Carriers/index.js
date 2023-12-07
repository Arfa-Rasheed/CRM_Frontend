import React from 'react'

const Carriers = () => {
  const policies = [
    { id: 1, icon: 'icon1.png', name: 'Policy 1' },
    { id: 2, icon: 'icon2.png', name: 'Policy 2' },
    { id: 3, icon: 'icon3.png', name: 'Policy 3' },
    { id: 4, icon: 'icon4.png', name: 'Policy 4' },
    { id: 5, icon: 'icon5.png', name: 'Policy 5' },
    { id: 6, icon: 'icon6.png', name: 'Policy 6' },
    { id: 7, icon: 'icon7.png', name: 'Policy 7' },
    { id: 8, icon: 'icon8.png', name: 'Policy 8' },
    { id: 9, icon: 'icon9.png', name: 'Policy 9' },
  ];
  return (
    <div className="carriers-grid">
      {policies.map((policy) => (
        <div key={policy.id} className="policy-card">
          <img src={policy.icon} alt={policy.name} className="policy-icon" />
          <button className="policy-button">{policy.name}</button>
        </div>
      ))}
    </div>
  );
}

export default Carriers