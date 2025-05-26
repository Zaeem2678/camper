import React from 'react';
import { useTranslation } from 'react-i18next';

const GroupsList = () => {
  const { t } = useTranslation();

  return (
    <div style={{ background: '#fff', borderRadius: 8, border: '1px solid #e0e0e0', marginBottom: 24, padding: 16 }}>
      <div style={{ fontWeight: 600, fontSize: 18, marginBottom: 12 }}>{t('newsFeed.groupsList.title')}</div>
      <div style={{ color: '#888', fontSize: 13,borderRadius: 10, padding: '16px 0', textAlign: 'center' ,backgroundColor: '#F2F4F5'}}>
        {t('newsFeed.groupsList.noGroups')}
      </div>
    </div>
  );
};

export default GroupsList; 