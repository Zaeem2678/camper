import React from 'react';
import { useTranslation } from 'react-i18next';

const avatars = [1, 2, 3, 4, 5, 6, 7];

const ActiveMembers = () => {
  const { t } = useTranslation();

  return (
    <div style={{ background: '#fff', borderRadius: 8, boxShadow: '0 1px 4px rgba(0,0,0,0.04)', padding: 16 }}>
      <div style={{ fontWeight: 600, fontSize: 18, marginBottom: 15 }}>{t('newsFeed.activeMembers.title')}</div>
      <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
        {avatars.map((a, i) => (
          <div key={i} style={{ width: 40, height: 40, borderRadius: '50%', background: '#eee' }} />
        ))}
      </div>
    </div>
  );
};

export default ActiveMembers; 